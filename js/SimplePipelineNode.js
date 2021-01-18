
const INPUT_PIPELINE_INPUT = 'inputs';
const INPUT_PIPELINE_STEP  = 'steps';

const DESCRIPTOR_PRIMITIVE = 'primitives';

class SimplePipelineNode {

   constructor() {
     this.self=this;
   }

   setinput(newinputsource, newinputsourceindex) {
       this.input_source        .push(newinputsource);
       this.input_source_index  .push(newinputsourceindex);
       //if (debug) console.log("<"+newinputsource+"["+newinputsourceindex+"]");
   }

   get inputs() {
       return this.input_source;
   }

   get inputsindices() {
       return this.input_source_index;
   }

   get ninputs() {
       return this.input_source.length;
   }

   setinputstring(newinputsourcepath) {

       let newinputinfo=newinputsourcepath.split('.');

       if (newinputinfo.length==2 && newinputinfo[0]==INPUT_PIPELINE_INPUT)
          this.setinput(newinputinfo[0],parseInt(newinputinfo[1]));

       else if (newinputinfo.length==3 && newinputinfo[0]==INPUT_PIPELINE_STEP)
          this.setinput(newinputinfo[0],parseInt(newinputinfo[1]));

       else
          console.log('Warning: could not parse input as a descriptor path: "'+newinputsourcepath+'"');
   }

   setinputs(newinputs) {
       this.input_source=[];
       this.input_source_index=[];
       for (const i in newinputs) {
           this.setinputstring(newinputs[i].data);
       }
   }

   getinput(i) {
       if (this.input_source==null || i<0 || i>=this.input_source.length)
          return null
       return [this.input_source[i],this.input_source_index[i]];
   }

   setdescriptorsstring(newdescriptorstring) {
       this.path        =newdescriptorstring;
       this.descriptor  =newdescriptorstring.split('.');
       this.ndescriptors=this.descriptor.length;
   }
   setdescriptorset(newdescriptor) {
       this.descriptor  =newdescriptor;
       this.ndescriptors=this.descriptor.length;
       this.path        =newdescriptor.join('.');
   }

   isprimitive() {
       if (this.descriptor==null) return false;
       if (this.ndescriptors<=0)  return false;
       return this.descriptor[1]==DESCRIPTOR_PRIMITIVE;
   }
}
