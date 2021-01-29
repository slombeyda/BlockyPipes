

//let cachedupdate=false;

class SimplePipelineRenderer {

   static get LAYOUT_HORIZONTAL() { return 0; }
   static get LAYOUT_VERTICAL()   { return 1; }

   static get MODE_COMPACT()      { return 0; }
   static get MODE_EXPANDED()     { return 2; }

   static get GRID_REGULAR()      { return 0; }
   static get GRID_ORTHOGRAPHIC() { return 1; }

   static get RENDER_NODE_DISTANCE_COMPACT()  { return 10; }
   static get RENDER_NODE_DISTANCE_EXTENDED() { return 30; }

   static get RENDER_PADDING() { return 20; }
   static get RENDER_NODE_CENTER_COMPACT()  { return 4; }
   static get RENDER_NODE_CENTER_EXTENDED() { return 8; }


   static hightlightNode(e,node,nodetable,nodedata,hasinputoutput,target,canvas,infodialog) {
       if (!node.classed('enabled')) return;
       SimplePipelineRenderer.update(SimplePipelineRenderer.MODE_EXPANDED,nodetable,hasinputoutput,target,nodedata.x,nodedata.y);
       // cachedupdate=true; // hack to fix double call
       node.classed('selected',true);
       nodedata.infobox.style.visibility='visible';
   }

   static unhightlightNode(e,node,nodetable,nodedata,hasinputoutput,target,canvas,infodialog) {
       if (!node.classed('enabled')) return;
       SimplePipelineRenderer.update(SimplePipelineRenderer.MODE_EXPANDED,nodetable,hasinputoutput,target);
       infodialog.style('visibility','hidden');
       nodedata.infobox.style.visibility='hidden';
       return true;
   }

   static _setupInfoDialog(target) {
       let infodialog=d3.select('body').append('div');
       infodialog.attr('class','infobox')
                 .style('visibility','hidden');
       return infodialog;
   }

   static regrid(mode,hasinputoutput,nodetable,expandx=-1,expandy=-1) {

       let delta=              SimplePipelineRenderer.RENDER_NODE_DISTANCE_COMPACT;
       let padding=            SimplePipelineRenderer.RENDER_PADDING;
       let centerdisplacement= SimplePipelineRenderer.RENDER_NODE_CENTER_COMPACT;

       let cmap_x=  (x,y)=>x; let cemap_x= (x,y)=>x;
       let cmap_y=  (x,y)=>y; let cemap_y= (x,y)=>y;
       let c='';
       let w=1;
       const gridmode=SimplePipelineRenderer.GRID_ORTHOGRAPHIC;
       if (mode==0) {
          c='#a0a0a0';
          w=0.5;
       } else {
          delta=SimplePipelineRenderer.RENDER_NODE_DISTANCE_EXTENDED;
          centerdisplacement=SimplePipelineRenderer.RENDER_NODE_CENTER_EXTENDED;
          w=1;
          c='#404040';
       }
       cmap_x=  (x,y)=>x*delta+padding; cemap_x= (x,y)=>x*delta+padding+centerdisplacement;
       cmap_y=  (x,y)=>y*delta+padding; cemap_y= (x,y)=>y*delta+padding+centerdisplacement;
       if (gridmode==SimplePipelineRenderer.GRID_ORTHOGRAPHIC)
             cmap_x=  (x,y)=>(x+y)*delta+padding; cemap_x= (x,y)=>(x+y)*delta+padding+centerdisplacement;

       let maxx=-1;
       let maxy=-1;
       for (let i=0; i<nodetable.length;i++) {
           let px=nodetable[i].x;
           if (px>maxx) maxx=px;
           let py=nodetable[i].y;
           if (py>maxy) maxy=py;
       }
       maxx++;
       maxy++;
       maxx+=2;
       maxy+=2;
       let grid=new Array(maxy);

       const expand_text_width=120;

       for (let j=0; j<maxy; j++) {
         grid[j]=new Array(maxx);
         for (let i=0; i<maxx; i++) {
             let x=cmap_x(i,j);
             let y=cmap_y(i,j);
             let xe=cemap_x(i,j);
             let ye=cemap_y(i,j);
             if (expandx>=0 && i>expandx) { x+=expand_text_width; xe+=expand_text_width; }
             //if (expandy>=0 && j>expandy) { y+=20; ye+=20; }
             grid[j][i]={
                    'topleft':{ 'x':x,  'y':y },
                    'center' :{ 'x':xe, 'y':ye}
             };
         }
       }
       return grid;
   }

   static draw(nodetable,connectivity,hasinputoutput,target) {
       let input_n=   0;
       let output_n=  nodetable.length-1;

       let grid=SimplePipelineRenderer.regrid(SimplePipelineRenderer.MODE_COMPACT,hasinputoutput,nodetable);

       if (!hasinputoutput) {
           input_n=  -1;
           output_n= -2;
       }

       let infodialog=SimplePipelineRenderer._setupInfoDialog(target);
       let canvas=d3.select(target).append('g');
       canvas.classed('pipelinecanvas',true);


       canvas.selectAll('polyline').data(connectivity)
                 .join('polyline')
                 .attr('points', function(edge,i) {
                    let xo=nodetable[edge[0]].x;
                    let yo=nodetable[edge[0]].y;
                    let xf=nodetable[edge[1]].x;
                    let yf=nodetable[edge[1]].y;
                    let s='';
                    s+= grid[yo][xo].center.x+','+ grid[yo][xo].center.y +' ';
                    s+= grid[yf][xf].center.x+','+ grid[yf][xf].center.y;
                    return s;
                 })
                 .attr('class','compactedge')
                 .attr('stroke','#f0f0f0')
                 .attr('strole-width',0.5);

       canvas.selectAll('rect').data(nodetable)
            .join('rect')
            .attr('x',      (d,i) => (d.posx=grid[d.y][d.x].topleft.x+((hasinputoutput && i==input_n) ?5:0)))
            .attr('y',      (d,i) => (d.posy=grid[d.y][d.x].topleft.y+((hasinputoutput && i==output_n)?3:0)))
            .attr('width',  (d,i) => (hasinputoutput && i==input_n)  ? 2 : 8)
            .attr('height', (d,i) => (hasinputoutput && i==output_n) ? 2 : 8)
            .attr('class',  (d,i) => (hasinputoutput && (i==output_n || i==input_n)) ? 'compact endnode': 'compact node')
            .on('mouseover',(e,d) => SimplePipelineRenderer.hightlightNode(  e,d3.select(e.target),nodetable,d,hasinputoutput,target,canvas,infodialog))
            .on('mouseout', (e,d) => SimplePipelineRenderer.unhightlightNode(e,d3.select(e.target),nodetable,d,hasinputoutput,target,canvas,infodialog))
        ;
       canvas.selectAll('foreignObject').data(nodetable)
            .join('foreignObject')
            .attr('x',      (d,i) => d.posx)
            .attr('y',      (d,i) => d.posy)
            .attr('width',  (d,i) => 120)
            .attr('height', (d,i) => 34)
            .attr('visibility','hidden')
            .each(function(d,i) {
                    d.infobox=this;
                    let infotokens=d.description.split('.');
                    let choice=infotokens.length-2;
                    if (choice<0) choice=0;
                    this.innerHTML='<div class=nodetextcontainer>'+infotokens[choice]+'</div>';
                  })
            ;
        SimplePipelineRenderer.update(SimplePipelineRenderer.MODE_COMPACT,nodetable,hasinputoutput,target);
   }

   static update(mode,nodetable,hasinputoutput,target,expandx=-1,expandy=-1) {
       /*if (cachedupdate) {
           cachedupdate=false;
           return;
       }*/
       let canvas=d3.select(target).select('.pipelinecanvas');
       let c='';
       let w=1;
       let boxscale=1;
       if (mode==0) {
          c='#a0a0a0';
          w=0.5;
       } else {
          w=0.5;
          c='#404040';
          boxscale=2;
       }

       let input_n=   -1;
       let output_n=  -2;

       if (hasinputoutput) {
           for (let i=0; i<nodetable.length & input_n<0;i++) {
               let info=nodetable[i].description.split('.');
               if (info[info.length-1].toLowerCase()==='input') input_n=i;
               else if (info[info.length-1].toLowerCase()==='inputs') input_n=i;
           }
           if (input_n<0) input_n=0;
           for (let i=0; i<nodetable.length & output_n<0;i++) {
               let info=nodetable[i].description.split('.');
               if (info[info.length-1].toLowerCase()==='output') output_n=i;
               else if (info[info.length-1].toLowerCase()==='outputs') output_n=i;
           }
           if (output_n<0) output_n=nodetable.length-1;
           //console.log(nodetable[i].description);
       }

       let grid=SimplePipelineRenderer.regrid(mode,hasinputoutput,nodetable,expandx,expandy);
       let isexpanded= (mode==SimplePipelineRenderer.MODE_EXPANDED);

       canvas.selectAll('rect').classed('enabled',false).transition().duration(100)
            .attr('x',      (d,i) => (d.posx=grid[d.y][d.x].topleft.x+((hasinputoutput && i==input_n) ?5*boxscale:0)))
            .attr('y',      (d,i) => (d.posy=grid[d.y][d.x].topleft.y+((hasinputoutput && i==output_n)?3*boxscale:0)))
            .attr('width',  (d,i) => (hasinputoutput && i==input_n)  ? 2*boxscale : 8*boxscale)
            .attr('height', (d,i) => (hasinputoutput && i==output_n) ? 2*boxscale : 8*boxscale)
            .on('end', function() { d3.select(this).classed('enabled',isexpanded); });

       canvas.selectAll('foreignObject')
            .attr('x',      (d,i) => d.posx+16)
            .attr('y',      (d,i) => d.posy-1)
            .attr('visibility','hidden');

       canvas.selectAll('polyline').transition()
            .attr('points', function(edge,i) {
                     let xo=nodetable[edge[0]].x;
                     let yo=nodetable[edge[0]].y;
                     let xf=nodetable[edge[1]].x;
                     let yf=nodetable[edge[1]].y;
                     let s='';
                     s+= grid[yo][xo].center.x+','+ grid[yo][xo].center.y+' ';
                     if (yo!=yf) {
                         if (xf<=xo) {
                            console.log('WARNING! wrong direction. ('+edge[0]+' -> '+edge[1]+')');
                         }
                         if (yo>yf)
                            s+= grid[yo][xf].center.x+','+ grid[yo][xf].center.y+' ';
                         else
                            s+= grid[yf][xo].center.x+','+ grid[yf][xo].center.y+' ';
                     } else if (xf-xo>1) {
                            // if long jump on the same line... assume we need to hop two out? BAD!
                            s+= grid[yo+2][xo].center.x+','+ grid[yo+2][xo].center.y+' ';
                            s+= grid[yf+2][xf].center.x+','+ grid[yf+2][xf].center.y+' ';
                     }
                     s+= grid[yf][xf].center.x+','+ grid[yf][xf].center.y;
                     return s;
              })
            .attr('stroke',c)
            .attr('stroke-width',w);

   }
}
