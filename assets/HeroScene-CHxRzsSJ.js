import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g,v as _,y as v}from"./index-OZQC5lsZ.js";var y={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},b={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},x=v(_()),S=x.forwardRef(function({children:e,object:t,disable:r,disableX:i,disableY:a,disableZ:c,left:u,right:d,top:f,bottom:p,front:m,back:h,onCentered:g,precise:_=!0,cacheKey:v=0,...y},b){let S=x.useRef(null),C=x.useRef(null),w=x.useRef(null),[T]=x.useState(()=>new n),[E]=x.useState(()=>new o),[D]=x.useState(()=>new l);return x.useLayoutEffect(()=>{C.current.matrixWorld.identity(),T.setFromObject(t??w.current,_);let e=T.max.x-T.min.x,n=T.max.y-T.min.y,o=T.max.z-T.min.z;T.getCenter(E),T.getBoundingSphere(D);let s=f?n/2:p?-n/2:0,l=u?-e/2:d?e/2:0,v=m?o/2:h?-o/2:0;C.current.position.set(r||i?0:-E.x+l,r||a?0:-E.y+s,r||c?0:-E.z+v),g?.({parent:S.current.parent,container:S.current,width:e,height:n,depth:o,boundingBox:T,boundingSphere:D,center:E,verticalAlignment:s,horizontalAlignment:l,depthAlignment:v})},[v,g,f,u,m,r,i,a,c,t,_,d,p,h,T,E,D]),x.useImperativeHandle(b,()=>S.current,[]),x.createElement(`group`,s({ref:S},y),x.createElement(`group`,{ref:C},x.createElement(`group`,{ref:w},e)))}),C=x.forwardRef(({scale:e=10,frames:t=1/0,opacity:n=1,width:o=1,height:l=1,blur:u=1,near:p=0,far:h=10,resolution:_=512,smooth:v=!0,color:S=`#000000`,depthWrite:C=!1,renderOrder:w,...T},E)=>{let D=x.useRef(null),O=m(e=>e.scene),k=m(e=>e.gl),A=x.useRef(null);o*=Array.isArray(e)?e[0]:e||1,l*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=x.useMemo(()=>{let e=new a(_,_),t=new a(_,_);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let n=new i(o,l).rotateX(Math.PI/2),s=new g(n),u=new r;u.depthTest=u.depthWrite=!1,u.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new c(S)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let d=new f(y),p=new f(b);return p.depthTest=d.depthTest=!1,[e,n,u,s,d,p,t]},[_,o,l,e,S]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return d(()=>{A.current&&(t===1/0||z<t)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(u),v&&R(u*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),x.useImperativeHandle(E,()=>D.current,[]),x.createElement(`group`,s({"rotation-x":Math.PI/2},T,{ref:D}),x.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},x.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:n,depthWrite:C})),x.createElement(`orthographicCamera`,{ref:A,args:[-o/2,o/2,l/2,-l/2,p,h]}))}),w=e();function T(e){let t=(0,x.useRef)(),{scene:r}=p(h),i=(0,x.useMemo)(()=>{let e=new n().setFromObject(r),t=new o;return e.getSize(t),3/(Math.max(t.x,t.y,t.z)||1)},[r]);return d((e,n)=>{t.current&&(t.current.rotation.y+=n*.8)}),(0,w.jsx)(`group`,{ref:t,...e,dispose:null,children:(0,w.jsx)(S,{scale:i,children:(0,w.jsx)(`primitive`,{object:r})})})}typeof window<`u`&&p.preload(h);function E({children:e}){let{size:t}=m();return(0,w.jsx)(`group`,{scale:Math.min(1.2,t.width/1440),children:e})}function D(){return(0,w.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,width:`100vw`,height:`100vh`,pointerEvents:`none`,zIndex:0},children:(0,w.jsxs)(t,{gl:{antialias:!0,logarithmicDepthBuffer:!0,powerPreference:`high-performance`},dpr:[1,2],camera:{position:[0,0,10],fov:45,near:.1,far:100},children:[(0,w.jsx)(`color`,{attach:`background`,args:[`#050505`]}),(0,w.jsx)(`ambientLight`,{intensity:1.2,color:`#ffffff`}),(0,w.jsx)(`directionalLight`,{position:[5,5,5],intensity:.5}),(0,w.jsx)(x.Suspense,{fallback:null,children:(0,w.jsxs)(E,{children:[(0,w.jsx)(`group`,{position:[0,0,0],children:(0,w.jsx)(T,{})}),(0,w.jsx)(u,{preset:`studio`}),(0,w.jsx)(C,{position:[0,-2.5,0],opacity:.4,scale:15,blur:2,far:4,color:`#000000`})]})})]})})}export{D as default};