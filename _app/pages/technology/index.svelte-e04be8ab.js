import{S as Fa,i as Ya,s as Ja,e as o,t as l,k as i,J as ze,c as r,a,h as n,d as s,m as c,K as Ge,b as t,Z as X,g as re,F as e,H as Ga,v as Za}from"../../chunks/vendor-8c425beb.js";import{d as Qa}from"../../chunks/colorTheme-cc2ba3ce.js";import{v as $}from"../../chunks/variables-d8dce8d8.js";function Xa(le){let f,p,g,x,b,w,qe,At,K,I,ot,Vt,m,ee,Tt,Fe,Wt,St,jt,te,Kt,Ye,Bt,Ht,Lt,se,Mt,Je,Rt,Nt,Ot,ae,Ut,Ze,zt,Gt,rt,B,ne,ie,ce,de,he,qt,Ft,H,C,lt,Yt,L,oe,Jt,Qe,Zt,Qt,Xt,P,$t,Xe,es,ts,$e,ss,as,nt,M,pe,ue,me,ve,fe,os,rs,R,A,it,ls,k,E,ge,N,V,ns,xe,is,cs,u,ds,et,hs,ps,tt,us,ms,st,vs,fs,at,gs,xs,y,be,O,T,bs,we,ws,ks,ke,Es,ys,_,Ee,U,W,_s,ye,Ds,Is,_e,Cs,ct,De,z,D,dt,Ps,Ie,Ce,Pe,As,Vs,Ae,Ts,Ws,G,S,ht,Ss,v,q,Ve,js,Ks,Te,Bs,Hs,F,We,Ls,Ms,Se,Rs,Ns,Y,je,Os,Us,Ke,zs,Gs,J,Be,qs,Fs,He,Ys;return{c(){f=o("section"),p=o("div"),g=o("div"),x=o("h2"),b=o("span"),w=o("span"),qe=l("High Level Architecture"),At=i(),K=o("div"),I=o("img"),Vt=i(),m=o("div"),ee=o("p"),Tt=l("Workspaces are defined with "),Fe=o("b"),Wt=l("Devfiles"),St=l(", YAML files versioned in the git repository close to the application source code."),jt=i(),te=o("p"),Kt=l("Eclipse Che "),Ye=o("b"),Bt=l("Dashboard"),Ht=l(" is a web application that transforms a Devfile provided by an authenticated user into a Kubernetes Custom Resource (the DevWorkspace)."),Lt=i(),se=o("p"),Mt=l("The "),Je=o("b"),Rt=l("DevWorkspace Operator"),Nt=l(" extends the Kubernetes API to support DevWorkspaces objects, a Custom Resource specialized for development environment provisioning."),Ot=i(),ae=o("p"),Ut=l("A "),Ze=o("b"),zt=l("Workspace"),Gt=l(" is composed of Pods, Services, Ingresses, Volumes and other Kubernetes objects. All together those objects empower developers to code, build and deploy using a web based IDE."),rt=i(),B=o("section"),ne=o("div"),ie=o("div"),ce=o("h2"),de=o("span"),he=o("span"),qt=l("A Closer Look: Che Dashboard"),Ft=i(),H=o("div"),C=o("img"),Yt=i(),L=o("div"),oe=o("p"),Jt=l("The "),Qe=o("b"),Zt=l("Dashboard"),Qt=l(" is Che frontend application to manage DevWorkspaces. It lets authenticated users create, list, stop or delete DevWorkspaces. The input parameter for a DevWorkspace creation is an URL to a git repo or to a `Devfile.yaml`."),Xt=i(),P=o("p"),$t=l("The Che dashboard uses other server-side components: the "),Xe=o("b"),es=l("Che server"),ts=l(", that is both a gateway to external git services and a Kubernetes namespaces provisioner and the "),$e=o("b"),ss=l("Devfile Registry"),as=l(" that returns a list of sample DevWorkspaces."),nt=i(),M=o("section"),pe=o("div"),ue=o("div"),me=o("h2"),ve=o("span"),fe=o("span"),os=l("A Closer Look: DevWorkspace Operator"),rs=i(),R=o("div"),A=o("img"),ls=i(),k=o("div"),E=o("div"),ge=o("div"),N=ze("svg"),V=ze("polygon"),ns=i(),xe=o("h6"),is=l("Universal API"),cs=i(),u=o("ul"),ds=l(`Che Workspaces are Kubernetes object:
          `),et=o("li"),hs=l("Managed with any Kubernetes client such as kubectl"),ps=i(),tt=o("li"),us=l("Secured by Role-Based Access Control (RBAC)"),ms=i(),st=o("li"),vs=l("Can be validated and protected by Admission Webhooks"),fs=i(),at=o("li"),gs=l("The Devfile specification is automatically generated from the API"),xs=i(),y=o("div"),be=o("div"),O=ze("svg"),T=ze("polygon"),bs=i(),we=o("h6"),ws=l("Highly Available"),ks=i(),ke=o("p"),Es=l("The new engine is a Kubernetes controller. As such it runs behind the kube-apiserver that is designed to scale horizontally. The data is persisted in a key value store designed to be highly available (etcd)."),ys=i(),_=o("div"),Ee=o("div"),U=ze("svg"),W=ze("polygon"),_s=i(),ye=o("h6"),Ds=l("Simple Design"),Is=i(),_e=o("p"),Cs=l("The new workspace engine has a single responsibility that is to manage workspace resources. It's decoupled from the developers IDEs and from the server side components of Che. Communications between components happens asynchronously using ConfigMaps and Secrets rather than a REST API."),ct=i(),De=o("section"),z=o("div"),D=o("div"),dt=o("div"),Ps=i(),Ie=o("h2"),Ce=o("span"),Pe=o("span"),As=l("Workspace components"),Vs=i(),Ae=o("p"),Ts=l("The Kubernetes objects that power a development environment, IDE included"),Ws=i(),G=o("div"),S=o("img"),Ss=i(),v=o("div"),q=o("div"),Ve=o("h6"),js=l("Init Containers"),Ks=i(),Te=o("p"),Bs=l("Init containers are used to perform pre-start actions such as cloning a git repository, downloading the IDE or pre-downloading IDE extensions."),Hs=i(),F=o("div"),We=o("h6"),Ls=l("Developer defined containers"),Ms=i(),Se=o("p"),Rs=l("These are the containers that are specified in the Devfile. The entrypoint of these containers must be non-terminating. The IDE and its extensions are usually run as standalone binaries in one of these containers although they can run in its own container too."),Ns=i(),Y=o("div"),je=o("h6"),Os=l("Persistent Volumes"),Us=i(),Ke=o("p"),zs=l("Containers are ephemeral: when a workspace is stopped changes to its files are wiped out unless they belonged to a PV. By default code is cloned in a PV. Persistent Volumes can be specified in Devfiles or can be labeled and annotated to be automatically mounted."),Gs=i(),J=o("div"),Be=o("h6"),qs=l("Secrets and ConfigMaps"),Fs=i(),He=o("p"),Ys=l("Kubernetes Secrets and ConfigMap can be automatically mounted in containers with user credentials and configurations. The DevWorkspace operator selects which ones based on their labels."),this.h()},l(d){f=r(d,"SECTION",{});var h=a(f);p=r(h,"DIV",{class:!0});var Js=a(p);g=r(Js,"DIV",{class:!0});var Zs=a(g);x=r(Zs,"H2",{class:!0});var Qs=a(x);b=r(Qs,"SPAN",{class:!0});var Xs=a(b);w=r(Xs,"SPAN",{class:!0});var $s=a(w);qe=n($s,"High Level Architecture"),$s.forEach(s),Xs.forEach(s),Qs.forEach(s),Zs.forEach(s),Js.forEach(s),At=c(h),K=r(h,"DIV",{class:!0});var pt=a(K);I=r(pt,"IMG",{class:!0,src:!0,alt:!0}),Vt=c(pt),m=r(pt,"DIV",{class:!0});var Z=a(m);ee=r(Z,"P",{});var ut=a(ee);Tt=n(ut,"Workspaces are defined with "),Fe=r(ut,"B",{});var ea=a(Fe);Wt=n(ea,"Devfiles"),ea.forEach(s),St=n(ut,", YAML files versioned in the git repository close to the application source code."),ut.forEach(s),jt=c(Z),te=r(Z,"P",{});var mt=a(te);Kt=n(mt,"Eclipse Che "),Ye=r(mt,"B",{});var ta=a(Ye);Bt=n(ta,"Dashboard"),ta.forEach(s),Ht=n(mt," is a web application that transforms a Devfile provided by an authenticated user into a Kubernetes Custom Resource (the DevWorkspace)."),mt.forEach(s),Lt=c(Z),se=r(Z,"P",{});var vt=a(se);Mt=n(vt,"The "),Je=r(vt,"B",{});var sa=a(Je);Rt=n(sa,"DevWorkspace Operator"),sa.forEach(s),Nt=n(vt," extends the Kubernetes API to support DevWorkspaces objects, a Custom Resource specialized for development environment provisioning."),vt.forEach(s),Ot=c(Z),ae=r(Z,"P",{});var ft=a(ae);Ut=n(ft,"A "),Ze=r(ft,"B",{});var aa=a(Ze);zt=n(aa,"Workspace"),aa.forEach(s),Gt=n(ft," is composed of Pods, Services, Ingresses, Volumes and other Kubernetes objects. All together those objects empower developers to code, build and deploy using a web based IDE."),ft.forEach(s),Z.forEach(s),pt.forEach(s),h.forEach(s),rt=c(d),B=r(d,"SECTION",{});var gt=a(B);ne=r(gt,"DIV",{class:!0});var oa=a(ne);ie=r(oa,"DIV",{class:!0});var ra=a(ie);ce=r(ra,"H2",{class:!0});var la=a(ce);de=r(la,"SPAN",{class:!0});var na=a(de);he=r(na,"SPAN",{class:!0});var ia=a(he);qt=n(ia,"A Closer Look: Che Dashboard"),ia.forEach(s),na.forEach(s),la.forEach(s),ra.forEach(s),oa.forEach(s),Ft=c(gt),H=r(gt,"DIV",{class:!0});var xt=a(H);C=r(xt,"IMG",{class:!0,src:!0,alt:!0}),Yt=c(xt),L=r(xt,"DIV",{class:!0});var bt=a(L);oe=r(bt,"P",{});var wt=a(oe);Jt=n(wt,"The "),Qe=r(wt,"B",{});var ca=a(Qe);Zt=n(ca,"Dashboard"),ca.forEach(s),Qt=n(wt," is Che frontend application to manage DevWorkspaces. It lets authenticated users create, list, stop or delete DevWorkspaces. The input parameter for a DevWorkspace creation is an URL to a git repo or to a `Devfile.yaml`."),wt.forEach(s),Xt=c(bt),P=r(bt,"P",{});var Le=a(P);$t=n(Le,"The Che dashboard uses other server-side components: the "),Xe=r(Le,"B",{});var da=a(Xe);es=n(da,"Che server"),da.forEach(s),ts=n(Le,", that is both a gateway to external git services and a Kubernetes namespaces provisioner and the "),$e=r(Le,"B",{});var ha=a($e);ss=n(ha,"Devfile Registry"),ha.forEach(s),as=n(Le," that returns a list of sample DevWorkspaces."),Le.forEach(s),bt.forEach(s),xt.forEach(s),gt.forEach(s),nt=c(d),M=r(d,"SECTION",{});var kt=a(M);pe=r(kt,"DIV",{class:!0});var pa=a(pe);ue=r(pa,"DIV",{class:!0});var ua=a(ue);me=r(ua,"H2",{class:!0});var ma=a(me);ve=r(ma,"SPAN",{class:!0});var va=a(ve);fe=r(va,"SPAN",{class:!0});var fa=a(fe);os=n(fa,"A Closer Look: DevWorkspace Operator"),fa.forEach(s),va.forEach(s),ma.forEach(s),ua.forEach(s),pa.forEach(s),rs=c(kt),R=r(kt,"DIV",{class:!0});var Et=a(R);A=r(Et,"IMG",{class:!0,src:!0,alt:!0}),ls=c(Et),k=r(Et,"DIV",{class:!0});var Me=a(k);E=r(Me,"DIV",{class:!0});var Re=a(E);ge=r(Re,"DIV",{class:!0});var ga=a(ge);N=Ge(ga,"svg",{class:!0,stroke:!0,viewBox:!0});var xa=a(N);V=Ge(xa,"polygon",{"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,fill:!0,points:!0}),a(V).forEach(s),xa.forEach(s),ga.forEach(s),ns=c(Re),xe=r(Re,"H6",{class:!0});var ba=a(xe);is=n(ba,"Universal API"),ba.forEach(s),cs=c(Re),u=r(Re,"UL",{class:!0});var j=a(u);ds=n(j,`Che Workspaces are Kubernetes object:
          `),et=r(j,"LI",{});var wa=a(et);hs=n(wa,"Managed with any Kubernetes client such as kubectl"),wa.forEach(s),ps=c(j),tt=r(j,"LI",{});var ka=a(tt);us=n(ka,"Secured by Role-Based Access Control (RBAC)"),ka.forEach(s),ms=c(j),st=r(j,"LI",{});var Ea=a(st);vs=n(Ea,"Can be validated and protected by Admission Webhooks"),Ea.forEach(s),fs=c(j),at=r(j,"LI",{});var ya=a(at);gs=n(ya,"The Devfile specification is automatically generated from the API"),ya.forEach(s),j.forEach(s),Re.forEach(s),xs=c(Me),y=r(Me,"DIV",{class:!0});var Ne=a(y);be=r(Ne,"DIV",{class:!0});var _a=a(be);O=Ge(_a,"svg",{class:!0,stroke:!0,viewBox:!0});var Da=a(O);T=Ge(Da,"polygon",{"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,fill:!0,points:!0}),a(T).forEach(s),Da.forEach(s),_a.forEach(s),bs=c(Ne),we=r(Ne,"H6",{class:!0});var Ia=a(we);ws=n(Ia,"Highly Available"),Ia.forEach(s),ks=c(Ne),ke=r(Ne,"P",{class:!0});var Ca=a(ke);Es=n(Ca,"The new engine is a Kubernetes controller. As such it runs behind the kube-apiserver that is designed to scale horizontally. The data is persisted in a key value store designed to be highly available (etcd)."),Ca.forEach(s),Ne.forEach(s),ys=c(Me),_=r(Me,"DIV",{class:!0});var Oe=a(_);Ee=r(Oe,"DIV",{class:!0});var Pa=a(Ee);U=Ge(Pa,"svg",{class:!0,stroke:!0,viewBox:!0});var Aa=a(U);W=Ge(Aa,"polygon",{"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,fill:!0,points:!0}),a(W).forEach(s),Aa.forEach(s),Pa.forEach(s),_s=c(Oe),ye=r(Oe,"H6",{class:!0});var Va=a(ye);Ds=n(Va,"Simple Design"),Va.forEach(s),Is=c(Oe),_e=r(Oe,"P",{class:!0});var Ta=a(_e);Cs=n(Ta,"The new workspace engine has a single responsibility that is to manage workspace resources. It's decoupled from the developers IDEs and from the server side components of Che. Communications between components happens asynchronously using ConfigMaps and Secrets rather than a REST API."),Ta.forEach(s),Oe.forEach(s),Me.forEach(s),Et.forEach(s),kt.forEach(s),ct=c(d),De=r(d,"SECTION",{});var Wa=a(De);z=r(Wa,"DIV",{class:!0});var yt=a(z);D=r(yt,"DIV",{class:!0});var Ue=a(D);dt=r(Ue,"DIV",{});var qa=a(dt);qa.forEach(s),Ps=c(Ue),Ie=r(Ue,"H2",{class:!0});var Sa=a(Ie);Ce=r(Sa,"SPAN",{class:!0});var ja=a(Ce);Pe=r(ja,"SPAN",{class:!0});var Ka=a(Pe);As=n(Ka,"Workspace components"),Ka.forEach(s),ja.forEach(s),Sa.forEach(s),Vs=c(Ue),Ae=r(Ue,"P",{class:!0});var Ba=a(Ae);Ts=n(Ba,"The Kubernetes objects that power a development environment, IDE included"),Ba.forEach(s),Ue.forEach(s),Ws=c(yt),G=r(yt,"DIV",{class:!0});var _t=a(G);S=r(_t,"IMG",{class:!0,src:!0,alt:!0}),Ss=c(_t),v=r(_t,"DIV",{class:!0});var Q=a(v);q=r(Q,"DIV",{class:!0});var Dt=a(q);Ve=r(Dt,"H6",{class:!0});var Ha=a(Ve);js=n(Ha,"Init Containers"),Ha.forEach(s),Ks=c(Dt),Te=r(Dt,"P",{class:!0});var La=a(Te);Bs=n(La,"Init containers are used to perform pre-start actions such as cloning a git repository, downloading the IDE or pre-downloading IDE extensions."),La.forEach(s),Dt.forEach(s),Hs=c(Q),F=r(Q,"DIV",{class:!0});var It=a(F);We=r(It,"H6",{class:!0});var Ma=a(We);Ls=n(Ma,"Developer defined containers"),Ma.forEach(s),Ms=c(It),Se=r(It,"P",{class:!0});var Ra=a(Se);Rs=n(Ra,"These are the containers that are specified in the Devfile. The entrypoint of these containers must be non-terminating. The IDE and its extensions are usually run as standalone binaries in one of these containers although they can run in its own container too."),Ra.forEach(s),It.forEach(s),Ns=c(Q),Y=r(Q,"DIV",{class:!0});var Ct=a(Y);je=r(Ct,"H6",{class:!0});var Na=a(je);Os=n(Na,"Persistent Volumes"),Na.forEach(s),Us=c(Ct),Ke=r(Ct,"P",{class:!0});var Oa=a(Ke);zs=n(Oa,"Containers are ephemeral: when a workspace is stopped changes to its files are wiped out unless they belonged to a PV. By default code is cloned in a PV. Persistent Volumes can be specified in Devfiles or can be labeled and annotated to be automatically mounted."),Oa.forEach(s),Ct.forEach(s),Gs=c(Q),J=r(Q,"DIV",{class:!0});var Pt=a(J);Be=r(Pt,"H6",{class:!0});var Ua=a(Be);qs=n(Ua,"Secrets and ConfigMaps"),Ua.forEach(s),Fs=c(Pt),He=r(Pt,"P",{class:!0});var za=a(He);Ys=n(za,"Kubernetes Secrets and ConfigMap can be automatically mounted in containers with user credentials and configurations. The DevWorkspace operator selects which ones based on their labels."),za.forEach(s),Pt.forEach(s),Q.forEach(s),_t.forEach(s),yt.forEach(s),Wa.forEach(s),this.h()},h(){t(w,"class","relative dark:text-white"),t(b,"class","relative inline-block text-gray-500"),t(x,"class","max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"),t(g,"class","max-w-xl md:mx-auto sm:text-center lg:max-w-2xl"),t(p,"class","px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mt-10"),t(I,"class","w-full rounded"),X(I.src,ot=le[0])||t(I,"src",ot),t(I,"alt",""),t(m,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base text-gray-700 dark:text-gray-300 md:text-lg py-5"),t(K,"class","container mx-auto flex items-center justify-center flex-col"),t(he,"class","relative dark:text-white"),t(de,"class","relative inline-block text-gray-500"),t(ce,"class","max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"),t(ie,"class","max-w-xl md:mx-auto sm:text-center lg:max-w-2xl"),t(ne,"class","px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mt-10"),t(C,"class","w-full lg:w-3/4 rounded"),X(C.src,lt=le[1])||t(C,"src",lt),t(C,"alt",""),t(L,"class","grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-700 dark:text-gray-300 md:text-lg py-5"),t(H,"class","container mx-auto flex items-center justify-center flex-col"),t(fe,"class","relative dark:text-white"),t(ve,"class","relative inline-block text-gray-500"),t(me,"class","max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"),t(ue,"class","max-w-xl md:mx-auto sm:text-center lg:max-w-2xl"),t(pe,"class","px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mt-10"),t(A,"class","w-full rounded"),X(A.src,it=le[2])||t(A,"src",it),t(A,"alt",""),t(V,"stroke-width","3"),t(V,"stroke-linecap","round"),t(V,"stroke-linejoin","round"),t(V,"fill","none"),t(V,"points","29 13 14 29 25 29 23 39 38 23 27 23"),t(N,"class","w-12 h-12 text-deep-purple-accent-400 dark:text-gray-200 sm:w-16 sm:h-16"),t(N,"stroke","currentColor"),t(N,"viewBox","0 0 52 52"),t(ge,"class","flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-700 sm:mx-auto sm:w-24 sm:h-24"),t(xe,"class","mb-3 text-xl font-bold leading-5"),t(u,"class","mb-3 text-sm text-gray-900 dark:text-gray-300 text-left list-outside list-disc ml-6"),t(E,"class","max-w-md sm:mx-auto sm:text-center"),t(T,"stroke-width","3"),t(T,"stroke-linecap","round"),t(T,"stroke-linejoin","round"),t(T,"fill","none"),t(T,"points","29 13 14 29 25 29 23 39 38 23 27 23"),t(O,"class","w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"),t(O,"stroke","currentColor"),t(O,"viewBox","0 0 52 52"),t(be,"class","flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-700 sm:mx-auto sm:w-24 sm:h-24"),t(we,"class","mb-3 text-xl font-bold leading-5"),t(ke,"class","mb-3 text-sm text-gray-900"),t(y,"class","max-w-md sm:mx-auto sm:text-center"),t(W,"stroke-width","3"),t(W,"stroke-linecap","round"),t(W,"stroke-linejoin","round"),t(W,"fill","none"),t(W,"points","29 13 14 29 25 29 23 39 38 23 27 23"),t(U,"class","w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"),t(U,"stroke","currentColor"),t(U,"viewBox","0 0 52 52"),t(Ee,"class","flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-700 sm:mx-auto sm:w-24 sm:h-24"),t(ye,"class","mb-3 text-xl font-bold leading-5"),t(_e,"class","mb-3 text-sm text-gray-900"),t(_,"class","max-w-md sm:mx-auto sm:text-center"),t(k,"class","grid grid-cols-3 gap-8 row-gap-10 mt-8"),t(R,"class","container mx-auto flex items-center justify-center flex-col"),t(Pe,"class","relative dark:text-white"),t(Ce,"class","relative inline-block text-gray-500"),t(Ie,"class","max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"),t(Ae,"class","text-base text-gray-700 dark:text-gray-300 md:text-lg"),t(D,"class","max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"),t(S,"class","w-full rounded"),X(S.src,ht=le[3])||t(S,"src",ht),t(S,"alt",""),t(Ve,"class","mb-3 text-xl font-bold leading-5"),t(Te,"class","mb-3 text-sm text-gray-900"),t(q,"class","max-w-md sm:mx-auto sm:text-center"),t(We,"class","mb-3 text-xl font-bold leading-5"),t(Se,"class","mb-3 text-sm text-gray-900"),t(F,"class","max-w-md sm:mx-auto sm:text-center"),t(je,"class","mb-3 text-xl font-bold leading-5"),t(Ke,"class","mb-3 text-sm text-gray-900"),t(Y,"class","max-w-md sm:mx-auto sm:text-center"),t(Be,"class","mb-3 text-xl font-bold leading-5"),t(He,"class","mb-3 text-sm text-gray-900"),t(J,"class","max-w-md sm:mx-auto sm:text-center"),t(v,"class","grid grid-cols-4 gap-8 row-gap-10 mt-8"),t(G,"class","container mx-auto flex items-center justify-center flex-col"),t(z,"class","px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20")},m(d,h){re(d,f,h),e(f,p),e(p,g),e(g,x),e(x,b),e(b,w),e(w,qe),e(f,At),e(f,K),e(K,I),e(K,Vt),e(K,m),e(m,ee),e(ee,Tt),e(ee,Fe),e(Fe,Wt),e(ee,St),e(m,jt),e(m,te),e(te,Kt),e(te,Ye),e(Ye,Bt),e(te,Ht),e(m,Lt),e(m,se),e(se,Mt),e(se,Je),e(Je,Rt),e(se,Nt),e(m,Ot),e(m,ae),e(ae,Ut),e(ae,Ze),e(Ze,zt),e(ae,Gt),re(d,rt,h),re(d,B,h),e(B,ne),e(ne,ie),e(ie,ce),e(ce,de),e(de,he),e(he,qt),e(B,Ft),e(B,H),e(H,C),e(H,Yt),e(H,L),e(L,oe),e(oe,Jt),e(oe,Qe),e(Qe,Zt),e(oe,Qt),e(L,Xt),e(L,P),e(P,$t),e(P,Xe),e(Xe,es),e(P,ts),e(P,$e),e($e,ss),e(P,as),re(d,nt,h),re(d,M,h),e(M,pe),e(pe,ue),e(ue,me),e(me,ve),e(ve,fe),e(fe,os),e(M,rs),e(M,R),e(R,A),e(R,ls),e(R,k),e(k,E),e(E,ge),e(ge,N),e(N,V),e(E,ns),e(E,xe),e(xe,is),e(E,cs),e(E,u),e(u,ds),e(u,et),e(et,hs),e(u,ps),e(u,tt),e(tt,us),e(u,ms),e(u,st),e(st,vs),e(u,fs),e(u,at),e(at,gs),e(k,xs),e(k,y),e(y,be),e(be,O),e(O,T),e(y,bs),e(y,we),e(we,ws),e(y,ks),e(y,ke),e(ke,Es),e(k,ys),e(k,_),e(_,Ee),e(Ee,U),e(U,W),e(_,_s),e(_,ye),e(ye,Ds),e(_,Is),e(_,_e),e(_e,Cs),re(d,ct,h),re(d,De,h),e(De,z),e(z,D),e(D,dt),e(D,Ps),e(D,Ie),e(Ie,Ce),e(Ce,Pe),e(Pe,As),e(D,Vs),e(D,Ae),e(Ae,Ts),e(z,Ws),e(z,G),e(G,S),e(G,Ss),e(G,v),e(v,q),e(q,Ve),e(Ve,js),e(q,Ks),e(q,Te),e(Te,Bs),e(v,Hs),e(v,F),e(F,We),e(We,Ls),e(F,Ms),e(F,Se),e(Se,Rs),e(v,Ns),e(v,Y),e(Y,je),e(je,Os),e(Y,Us),e(Y,Ke),e(Ke,zs),e(v,Gs),e(v,J),e(J,Be),e(Be,qs),e(J,Fs),e(J,He),e(He,Ys)},p(d,[h]){h&1&&!X(I.src,ot=d[0])&&t(I,"src",ot),h&2&&!X(C.src,lt=d[1])&&t(C,"src",lt),h&4&&!X(A.src,it=d[2])&&t(A,"src",it),h&8&&!X(S.src,ht=d[3])&&t(S,"src",ht)},i:Ga,o:Ga,d(d){d&&s(f),d&&s(rt),d&&s(B),d&&s(nt),d&&s(M),d&&s(ct),d&&s(De)}}}function $a(le,f,p){let g,x,b,w;return Za(()=>{Qa.subscribe(qe=>{qe?(p(0,g=`${$.imagesPath}/how-it-works-high-level-dark.png`),p(1,x=`${$.imagesPath}/how-it-works-devfile-todevworkspace-dark.png`),p(2,b=`${$.imagesPath}/how-it-works-devworkspace-to-kubernetes-dark.png`),p(3,w=`${$.imagesPath}/how-it-works-workspace-creation-flow-dark.png`)):(p(0,g=`${$.imagesPath}/how-it-works-high-level-light.png`),p(1,x=`${$.imagesPath}/how-it-works-devfile-todevworkspace-light.png`),p(2,b=`${$.imagesPath}/how-it-works-devworkspace-to-kubernetes-light.png`),p(3,w=`${$.imagesPath}/how-it-works-workspace-creation-flow-light.png`))})}),[g,x,b,w]}class ao extends Fa{constructor(f){super();Ya(this,f,$a,Xa,Ja,{})}}export{ao as default};
