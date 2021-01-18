

class SlowGraphPositioner {

   static findpathtooutput(nodes,connects_to,current,target) {
       let foundpath=false;
       nodes[current].touched=true;
       for (let i=0; !foundpath && i<connects_to[current].length; i++) {
           let next=connects_to[current][i];
           if (next==target) {
               nodes[target].x =0;
               nodes[target].touched=true;
               nodes[current].x=1;
               return 1;
           }
           if (!nodes[next].touched) {
             let foundpath=this.findpathtooutput(nodes,connects_to,next,target);
             //if (DEBUG) console.log(next+" -> "+foundpath);
             if (foundpath>=0) {
                nodes[current].x=foundpath+1;
                return foundpath+1;
             }
          }
       }
       nodes[current].touched=false;
       return -1;
   }

   static followuntouched(nodes,connects_to,current,touchedcount) {
       for (let i=0; i<connects_to[current].length; i++) {
           let next=connects_to[current][i];
           if (nodes[next].touched) {
               return touchedcount;
           } else {
               nodes[next].x=nodes[current].x+1;
               nodes[next].y=nodes[current].y;
               nodes[next].touched=true;
               touchedcount++;
               let newtouchedcount=this.followuntouched(nodes,connects_to,next,touchedcount);
               if (newtouchedcount<0) {
                   console.log('ERROR!!! STOPPPPP!!');
               } else {
                   return newtouchedcount;
               }
           }
       }
       return -1; // THIS SHOULD NEVER HAPPEN!
   }


   static place(nodes,connectivity) {
       //if (DEBUG) console.log(nodes);
       //if (DEBUG) console.log(connectivity);
       let n=nodes.length;
       let n_edges= connectivity.length;
       let connects_to   =[];
       let connected_from=[];
       for (let i=0; i<n; i++) {
           connects_to[i]=[];
           connected_from[i]=[];
           nodes[i].outcount=0;
           nodes[i].incount =0;
           nodes[i].touched=false;
       }
       for (let e=0; e<n_edges; e++) {
           let src=connectivity[e][0];
           let dst=connectivity[e][1];
           connects_to[src].push(dst);
           connected_from[dst].push(src);
           nodes[src].outcount++;
           nodes[src].incount++;
       }
       nodes[0].touched=true;
       let foundpath=this.findpathtooutput(nodes,connects_to,0,n-1);
       if (foundpath<0) {
           console.log('Error. Could not find a straight path from input to output');
           return;
       }
       let touchedcount=0;
       let maxdepth=0;
       let islandcount=0;
       for (let i=0; i<n; i++) {
           if (nodes[i].touched) {
               nodes[i].x=foundpath-nodes[i].x;
               touchedcount++;
           }
       }
       //if (DEBUG) console.log(touchedcount+' out of '+n+' placed already.');
       while (touchedcount<n) {
             for (let i=0; i<n; i++) {
               if (!nodes[i].touched) {
                   if (connected_from[i].length==0) {
                        nodes[i].touched=true;
                        nodes[i].x=0;
                        islandcount++;
                        nodes[i].y=-islandcount;
                        touchedcount++;
                        // could be just a dangling input --> need to followup!
                   } else {
                       for (let j=0; j<connected_from[i].length; j++) {
                           let prev=connected_from[i][j];
                           if (nodes[prev].touched) {
                               nodes[i].x=nodes[prev].x+1;
                               maxdepth++;
                               nodes[i].y=maxdepth;
                               nodes[i].touched=true;
                               touchedcount++;
                               if (touchedcount<n) {
                                 let newtouchedcount=this.followuntouched(nodes,connects_to,i,touchedcount);
                                 if (newtouchedcount<0) {
                                   console.log('ERROR!');
                                   return;
                                 } else {
                                   touchedcount=newtouchedcount+1;
                                 }
                               }
                           }
                       }
                   }
               }
             }
       }
       //if (DEBUG) console.log(touchedcount+' out of '+n+' placed already.');
   }
}
