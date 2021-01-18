

const _BR_ = '\n';

class SimplePipeline {

   // this "SimplePipeline" is fully dependent on the pipeline json structure
   // this means that it is not that simple, and requires knowledge of where
   // the attributes, pointers, and overall composition is/are.

   constructor() {
     this.self =this;
     this.rawdata =null;
     this.rawsteps=null;
     this.rawnodes=null;
     this.nodes=null;
     this.addPipelineInputOutputToTable=true;
   }

   setAddPipelineInputOutputToTable() {
       this.addPipelineInputOutputToTable=true;
   }

   removePipelineInputOutputFromTable() {
       this.addPipelineInputOutputToTable=false;
   }

   setdata(newdata) {
     this.rawdata=newdata;
     //console.log(newdata);
     this.analyzedata();
   }

   analyzedata() {
      this.rawsteps=  this.rawdata._source.steps;
      this.rawinputs= this.rawdata._source.inputs;
      this.rawoutputs=this.rawdata._source.outputs;
      this.rawnodes=[];
      this.nodes=[];
      for (const i in this.rawsteps) {
         this.rawnodes.push(new SimplePipelineRawNode(
				this.rawsteps[i].arguments,
				this.rawsteps[i].outputs,
				this.rawsteps[i].primitive.python_path));
         let node=new SimplePipelineNode();
         this.nodes.push(node);
         node.setinputs(this.rawnodes[i].rawinputs);
         node.setdescriptorsstring(this.rawnodes[i].rawpath);
      }
      // do a second pass to link nodes?
      // do a pass to calculate extents?
      // do a pass to compute positions?
   }

   writeinfo() {
      let s='';
      s+=('<li> inputs= ' +this.rawinputs.length+'</li>');
      s+=('<li> outputs= '+this.rawoutputs.length+'</li>');
      s+=('<li> steps= '  +this.rawsteps.length+'</li>');
      let nsteps= this.rawsteps.length;
      for (const i in this.rawnodes) {
         s+=('<ul>');
         s+=('<li>'+i+'</li>');
         s+=(this.rawnodes[i].write());
         s+=('</ul>');
      }
      return s;
   }

   writenodedata(nodename,node,indent,s) {
     let l=indent.length+nodename.length;
     let tabindent='';
     for (let i=0; i<24-l; i++) tabindent+=' ';
     tabindent='<span>'+tabindent+'</span>';
     s+=tabindent+'<em>&lt;'+typeof(node)+'&gt;</em>'+_BR_;
     if (typeof(node)=='object') {
       for (const [key,value] of Object.entries(node)) {
          s+=indent+'+ '+key; //+_BR_;
          s=this.writenodedata(key,value,indent+'  ',s);
       }
     }
     return s;
   }

   writedata(title,targetid) {
     let console= document.getElementById(targetid);
     let s=title;
     s=this.writenodedata(title,this.rawdata,'',s);
     console.innerHTML=s;
   }

   /*
   get nodetableheader() {
       let nodelistheader= new Array();
       nodelistheader.push('id');
       nodelistheader.push('name');
       nodelistheader.push('x');
       nodelistheader.push('y');
       nodelistheader.push('path');
       nodelistheader.push('isinput');
       nodelistheader.push('isoutput');
       nodelistheader.push('isprimitive');
       return nodelistheader;
   }

   get nodetable() {
       let nodelist= new Array();
       let index=0;
       if (this.addPipelineInputOutputToTable) {
           let row=new Array();
             row.push(index);
             row.push('input');
             row.push(index);
             row.push(0);
             row.push('input');
           nodelist.push(row);
           index++;
       }
       for (const i in this.nodes) {
           let row=new Array();
             row.push(index);
             row.push('node_'+i);
             row.push(index);
             row.push(0);
             row.push(this.nodes[i].path);
           nodelist.push(row);
           index++;
       }
       if (this.addPipelineInputOutputToTable) {
           let row=new Array();
             row.push(index);       // id
             row.push('output');    // name
             row.push(index);       // x
             row.push(0);           // y
             row.push('output');    // path
           nodelist.push(row);
           index++;
       }
       return nodelist;
   }
   */

   get nodedictionary() {
       let nodelist= new Array();
       let index=0;
       if (this.addPipelineInputOutputToTable) {
           let row={};
             row.index=index;
             row.name='input';
             row.x=index;
             row.y=0;
             row.description='input';
           nodelist.push(row);
           index++;
       }
       for (const i in this.nodes) {
           let row={};
             row.index=(index);
             row.name=('node_'+i);
             row.x=(index);
             row.y=(0);
             row.description=(this.nodes[i].path);
           nodelist.push(row);
           index++;
       }
       if (this.addPipelineInputOutputToTable) {
           let row={}
             row.index=(index);       // id
             row.name=('output');    // name
             row.x=(index);       // x
             row.y=(0);           // y
             row.description=('output');    // path
           nodelist.push(row);
           index++;
       }
       this._nodedictionary=nodelist;
       return nodelist;
   }

   get connectivitytableheader() {
       let connectivityheader= new Array();
         connectivityheader.push('src');
         connectivityheader.push('dst');
       return connectivityheader;
   }

   get connectivitytable() {
       let connectivity= new Array();
       for (let i=0; i<this.nodes.length; i++) {
           for (let j=0; j<this.nodes[i].inputs.length; j++) {
              let srcname=  this.nodes[i].inputs[j];
              let srcindex= this.nodes[i].inputsindices[j];
              let row= new Array();
              if (this.addPipelineInputOutputToTable) {
                  if (srcname==INPUT_PIPELINE_INPUT)
                     row.push(0,i+1);
                  else
                     row.push(srcindex+1,i+1);
              } else {
                  if (srcname==INPUT_PIPELINE_INPUT)
                     row.push(-1,i);
                  else
                     row.push(srcindex,i);
              }
              connectivity.push(row);
           }
       }

       if (this.addPipelineInputOutputToTable) {
            let outputindex=this.nodes.length+1;
            for (const i in this.rawoutputs) {
                if ('data' in this.rawoutputs[i]) {
                    let outputrow= this.rawoutputs[i].data.split('.');
                    if (outputrow[0]==INPUT_PIPELINE_STEP) {
                        if (this.addPipelineInputOutputToTable)
                          connectivity.push([parseInt(outputrow[1])+1,outputindex]);
                        else
                          connectivity.push([parseInt(outputrow[1]),-2]);
                    }
                }
            }
       }

       this._connectivity=connectivity;

       return connectivity;
   }

   draw(renderfunction,targetid) {
       let nodes=this.nodedictionary;
       let edges=this.connectivitytable;
       let hasends=this.addPipelineInputOutputToTable;
       SlowGraphPositioner.place(nodes,edges);
       renderfunction.draw(nodes,edges,hasends,targetid);
   }

   update(mode,renderfunction,targetid) {
       let nodes=  this._nodedictionary;
       let edges=  this._connectivity;
       let hasends=this.addPipelineInputOutputToTable;
       renderfunction.update(mode,nodes,hasends,targetid);
   }

}
