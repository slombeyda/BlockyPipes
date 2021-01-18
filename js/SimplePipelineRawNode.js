
class SimplePipelineRawNode {

   constructor(inputs,outputs,path) {
      this.rawinputs =inputs; // [] before all arguments
      this.rawoutputs=outputs;
      this.rawpath   =path;
  }

  write() {
      let s='';
      s+='<ul>';
      for (const n in this.rawinputs) {
          s+='<li> > ';
          s+= this.rawinputs[n].data;
          s+='</li>';
      }
      for (const n in this.rawoutputs) {
          s+='<li> &lt; ';
          s+=this.rawoutputs[n].id;
          s+='</li>';

      }
      s+='<li>'+this.rawpath+'</li>';
      s+='</ul>';
      return s;
  }

}
