import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g,v as _}from"./index-Dha1wKza.js";var v={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},y={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},b=_(e()),x=b.forwardRef(function({children:e,object:t,disable:n,disableX:r,disableY:i,disableZ:a,left:o,right:s,top:c,bottom:u,front:d,back:h,onCentered:g,precise:_=!0,cacheKey:v=0,...y},x){let S=b.useRef(null),C=b.useRef(null),w=b.useRef(null),[T]=b.useState(()=>new m),[E]=b.useState(()=>new l),[D]=b.useState(()=>new f);return b.useLayoutEffect(()=>{C.current.matrixWorld.identity(),T.setFromObject(t??w.current,_);let e=T.max.x-T.min.x,l=T.max.y-T.min.y,f=T.max.z-T.min.z;T.getCenter(E),T.getBoundingSphere(D);let p=c?l/2:u?-l/2:0,m=o?-e/2:s?e/2:0,v=d?f/2:h?-f/2:0;C.current.position.set(n||r?0:-E.x+m,n||i?0:-E.y+p,n||a?0:-E.z+v),g?.({parent:S.current.parent,container:S.current,width:e,height:l,depth:f,boundingBox:T,boundingSphere:D,center:E,verticalAlignment:p,horizontalAlignment:m,depthAlignment:v})},[v,g,c,o,d,n,r,i,a,t,_,s,u,h,T,E,D]),b.useImperativeHandle(x,()=>S.current,[]),b.createElement(`group`,p({ref:S},y),b.createElement(`group`,{ref:C},b.createElement(`group`,{ref:w},e)))}),S=b.forwardRef(({scale:e=10,frames:a=1/0,opacity:s=1,width:l=1,height:u=1,blur:f=1,near:m=0,far:h=10,resolution:_=512,smooth:x=!0,color:S=`#000000`,depthWrite:C=!1,renderOrder:w,...T},E)=>{let D=b.useRef(null),O=d(e=>e.scene),k=d(e=>e.gl),A=b.useRef(null);l*=Array.isArray(e)?e[0]:e||1,u*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=b.useMemo(()=>{let e=new o(_,_),t=new o(_,_);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let a=new r(l,u).rotateX(Math.PI/2),s=new c(a),d=new g;d.depthTest=d.depthWrite=!1,d.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new n(S)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let f=new i(v),p=new i(y);return p.depthTest=f.depthTest=!1,[e,a,d,s,f,p,t]},[_,l,u,e,S]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return t(()=>{A.current&&(a===1/0||z<a)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(f),x&&R(f*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),b.useImperativeHandle(E,()=>D.current,[]),b.createElement(`group`,p({"rotation-x":Math.PI/2},T,{ref:D}),b.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},b.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:s,depthWrite:C})),b.createElement(`orthographicCamera`,{ref:A,args:[-l/2,l/2,u/2,-u/2,m,h]}))}),C=a();function w(e){let n=(0,b.useRef)(),{scene:r}=u(`/vittavardhana/vitta-3d-model.glb`),i=(0,b.useMemo)(()=>{let e=new m().setFromObject(r),t=new l;return e.getSize(t),3/(Math.max(t.x,t.y,t.z)||1)},[r]);return t((e,t)=>{n.current&&(n.current.rotation.y+=t*.8)}),(0,C.jsx)(`group`,{ref:n,...e,dispose:null,children:(0,C.jsx)(x,{scale:i,children:(0,C.jsx)(`primitive`,{object:r})})})}typeof window<`u`&&u.preload(`/vittavardhana/vitta-3d-model.glb`);function T({children:e}){let{size:t}=d();return(0,C.jsx)(`group`,{scale:Math.min(1.2,t.width/1440),children:e})}function E(){return(0,C.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,width:`100vw`,height:`100vh`,pointerEvents:`none`,zIndex:0},children:(0,C.jsxs)(s,{gl:{antialias:!0,logarithmicDepthBuffer:!0,powerPreference:`high-performance`},dpr:[1,2],camera:{position:[0,0,10],fov:45,near:.1,far:100},children:[(0,C.jsx)(`color`,{attach:`background`,args:[`#050505`]}),(0,C.jsx)(`ambientLight`,{intensity:1.2,color:`#ffffff`}),(0,C.jsx)(`directionalLight`,{position:[5,5,5],intensity:.5}),(0,C.jsx)(b.Suspense,{fallback:null,children:(0,C.jsxs)(T,{children:[(0,C.jsx)(`group`,{position:[0,0,0],children:(0,C.jsx)(w,{})}),(0,C.jsx)(h,{preset:`studio`}),(0,C.jsx)(S,{position:[0,-2.5,0],opacity:.4,scale:15,blur:2,far:4,color:`#000000`})]})})]})})}export{E as default};