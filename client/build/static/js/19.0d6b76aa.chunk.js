(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{107:function(t,e,n){"use strict";var a=n(5),o=n(4),r=n(0),i={fetchPosts:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({},t))};return fetch("/api/post/getPosts/",e).then(s).then(function(t){return t.data})},getPostsByHashtag:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({hashtag:t},e))};return fetch("/api/post/getPostsByHashtag/",n).then(s).then(function(t){return t.data})},getPostsByLocation:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({coordinates:t},e))};return fetch("/api/post/getPostsByLocation/",n).then(s).then(function(t){return t.data})},addPost:function(t){var e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/post/addPost/",e).then(s).then(function(t){return t.post})},addProfiePicture:function(t){var e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/user/addProfiePicture/",e).then(s).then(function(t){return t})},deletePost:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/delete/",e).then(s).then(function(t){return t})},likePost:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t,authorId:e})};return fetch("/api/post/likePost/",n).then(s).then(function(t){return t})},getPostLikes:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPostLikes/",e).then(s).then(function(t){return t})},getPost:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPost/",e).then(s).then(function(t){return t})},logout:c};function c(){localStorage.removeItem("user")}function s(t){return t.text().then(function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status&&(console.log(t),c(),window.location.reload(!0));var a=n&&n.message||t.statusText;return Promise.reject(a)}return n})}var l=n(31);n.d(e,"a",function(){return u});var u={mapLoactionSelect:function(t){return function(e){e({type:a.a.MAP_LOCATION_SELECT,location:t})}},changeTextareaValue:function(t){return function(e){e({type:a.a.TEXTAREA_VALUE_CAHNGE,value:t})}},canvasHasValue:function(t){return function(e){e({type:a.a.CANVAS_HAS_VALUE,hasValue:t})}},getCroppedSrc:function(t){return function(e){e({type:a.a.IMAGE_CROP_SELECT,imgSrc:t})}},selectImage:function(t,e){return function(n){n({type:a.a.IMAGE_SELECT,imgSrc:t,imgSrcExt:e})}},fetchPosts:function(t){return function(n){i.fetchPosts(t).then(function(o){if(t.initialFetch){var r=o[0],i=r.posts,c=r.total;i.forEach(function(t){return n({type:a.a.INIT_COMMENT,postId:t._id})}),n(e(i,c[0],t.initialFetch))}else n(e(o)),o.forEach(function(t){return n({type:a.a.INIT_COMMENT,postId:t._id})})},function(t){n(l.a.error(t))})};function e(t,e,n){return{type:a.a.POSTS_SUCCESS,posts:t,total:e,initialFetch:n}}},getPostsByHashtag:function(t,e){return function(o){var r;o((r=e.initialFetch,{type:a.a.HASHTAG_POSTS_REQUEST,initialFetch:r})),i.getPostsByHashtag(t,e).then(function(a){if(e.initialFetch){var r=a[0],i=r.posts,c=r.total;o(n(i,c[0],e.initialFetch,t))}else o(n(a))},function(t){o(l.a.error(t))})};function n(t,e,n,o){return{type:a.a.HASHTAG_POSTS_SUCCESS,posts:t,total:e,initialFetch:n,hashtag:o}}},getPostsByLocation:function(t,e){return function(o){var r;o((r=e.initialFetch,{type:a.a.LOCATION_POSTS_REQUEST,initialFetch:r})),i.getPostsByLocation(t,e).then(function(a){if(e.initialFetch){var r=a[0],i=r.posts,c=r.total;o(n(i,c[0],e.initialFetch,t))}else o(n(a))},function(t){o(l.a.error(t))})};function n(t,e,n,o){return{type:a.a.LOCATION_POSTS_SUCCESS,posts:t,total:e,initialFetch:n,coordinates:o}}},deletePost:function(t){return function(e){e({type:a.a.POST_DELETE_REQUEST}),i.deletePost(t).then(function(t){var n;e((n=t,{type:a.a.POST_DELETE_SUCCESS,result:n})),e(l.a.success(t.message))},function(t){console.log(t)})}},addPost:function(t){return function(e){e({type:a.a.ADD_POST_REQUEST}),i.addPost(t).then(function(t){e(function(t){return{type:a.a.ADD_POST_SUCCESS,post:t}}(t)),e(l.a.success("Post uploaded")),e({type:a.a.INIT_COMMENT,postId:t._id})},function(t){e(l.a.error(t))})}},addProfiePicture:function(t){return function(e){e({type:o.a.GETUSER_REQUEST}),i.addProfiePicture(t).then(function(t){var n;e((n=t.user,{type:o.a.USER_UPDATE_PROFILEPICTURE_SUCCESS,user:n}))},function(t){console.log(t)})}},likePost:function(t,e,n){return function(r){n.some(function(e){return e===t})?r(o(a.a.DISLIKE_POST,{postId:t})):r(o(a.a.LIKE_POST,{postId:t})),i.likePost(t,e).then(function(){},function(t){console.log(t)})};function o(t,e){return{type:t,post:e}}},getPostLikes:function(t){return function(e){i.getPostLikes(t).then(function(t){var n;e((n=t.users[0].users_likes,{type:a.a.GET_POST_LIKES,postLikes:n}))},function(t){console.log(t)})}},getPost:function(t){return function(e){i.getPost(t).then(function(t){var n,o;document.title=t.post[0].author[0].username+"'s post | social-network",e((n=a.a.GET_POST,o=t.post,{type:n,post:o})),e({type:a.a.INIT_COMMENT,postId:t.post[0]._id})},function(t){e(l.a.error(t)),console.log(t)})}}}},126:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n(1),o=n.n(a),r=n(271);function i(t){var e=t.alert,n=e.type,a=e.message;return"success"===n?o.a.createElement(r.a,{success:!0,header:"Success",content:a}):"error"===n?o.a.createElement(r.a,{error:!0,header:"Error",content:a}):null}},271:function(t,e,n){"use strict";var a=n(61),o=n.n(a),r=n(67),i=n.n(r),c=n(70),s=n.n(c),l=n(71),u=n.n(l),p=n(68),d=n.n(p),h=n(72),f=n.n(h),m=n(74),g=n.n(m),y=n(66),S=n.n(y),E=n(91),O=n.n(E),P=(n(84),n(62)),v=n.n(P),T=(n(2),n(1)),N=n.n(T),b=n(259),_=n(460),I=n(461),j=n(60),C=n(476),L=n(305);function k(t){var e=t.children,n=t.className,a=t.content,r=v()("content",n),i=Object(_.a)(k,t),c=Object(I.a)(k,t);return N.a.createElement(c,o()({},i,{className:r}),j.a.isNil(e)?a:e)}k.handledProps=["as","children","className","content"],k.propTypes={};var A=k;function J(t){var e=t.children,n=t.className,a=t.content,r=v()("header",n),i=Object(_.a)(J,t),c=Object(I.a)(J,t);return N.a.createElement(c,o()({},i,{className:r}),j.a.isNil(e)?a:e)}J.handledProps=["as","children","className","content"],J.propTypes={},J.create=Object(C.f)(J,function(t){return{content:t}});var w=J,U=n(83),D=n.n(U);function F(t){var e=t.children,n=t.className,a=t.content,r=v()("content",n),i=Object(_.a)(F,t),c=Object(I.a)(F,t);return N.a.createElement(c,o()({},i,{className:r}),j.a.isNil(e)?a:e)}F.handledProps=["as","children","className","content"],F.propTypes={},F.defaultProps={as:"li"},F.create=Object(C.f)(F,function(t){return{content:t}});var M=F;function B(t){var e=t.children,n=t.className,a=t.items,r=v()("list",n),i=Object(_.a)(B,t),c=Object(I.a)(B,t);return N.a.createElement(c,o()({},i,{className:r}),j.a.isNil(e)?D()(a,M.create):e)}B.handledProps=["as","children","className","items"],B.propTypes={},B.defaultProps={as:"ul"},B.create=Object(C.f)(B,function(t){return{items:t}});var G=B;n.d(e,"a",function(){return z});var z=function(t){function e(){var t,n;i()(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=u()(this,(t=d()(e)).call.apply(t,[this].concat(o))),S()(g()(g()(n)),"handleDismiss",function(t){var e=n.props.onDismiss;e&&e(t,n.props)}),n}return f()(e,t),s()(e,[{key:"render",value:function(){var t=this.props,n=t.attached,a=t.children,r=t.className,i=t.color,c=t.compact,s=t.content,l=t.error,u=t.floating,p=t.header,d=t.hidden,h=t.icon,f=t.info,m=t.list,g=t.negative,y=t.onDismiss,S=t.positive,E=t.size,P=t.success,T=t.visible,k=t.warning,J=v()("ui",i,E,Object(b.a)(c,"compact"),Object(b.a)(l,"error"),Object(b.a)(u,"floating"),Object(b.a)(d,"hidden"),Object(b.a)(h,"icon"),Object(b.a)(f,"info"),Object(b.a)(g,"negative"),Object(b.a)(S,"positive"),Object(b.a)(P,"success"),Object(b.a)(T,"visible"),Object(b.a)(k,"warning"),Object(b.b)(n,"attached"),"message",r),U=y&&N.a.createElement(L.a,{name:"close",onClick:this.handleDismiss}),D=Object(_.a)(e,this.props),F=Object(I.a)(e,this.props);return j.a.isNil(a)?N.a.createElement(F,o()({},D,{className:J}),U,L.a.create(h,{autoGenerateKey:!1}),(!O()(p)||!O()(s)||!O()(m))&&N.a.createElement(A,null,w.create(p,{autoGenerateKey:!1}),G.create(m,{autoGenerateKey:!1}),Object(C.d)(s,{autoGenerateKey:!1}))):N.a.createElement(F,o()({},D,{className:J}),U,a)}}]),e}(T.Component);S()(z,"Content",A),S()(z,"Header",w),S()(z,"List",G),S()(z,"Item",M),S()(z,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),z.propTypes={}},820:function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(e);var o=n(24),r=n(25),i=n(27),c=n(26),s=n(28),l=n(1),u=n.n(l),p=n(18),d=n(305),h=n(336),f=n(292),m=n(126),g=n(107),y=n(247),S=n.n(y);n.d(e,"default",function(){return O});var E=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(r)))).componentDidMount=function(){var t=n.props,e=t.match,a=t.dispatch;t.data.coordinates!==e.params.coordinates&&a(g.a.getPostsByLocation(e.params.coordinates,{initialFetch:!0,coordinates:e.params.coordinates})),document.title="Location Page | social-network"},n.fetchData=function(){var t=n.props,e=t.dispatch,a=t.data.postsByLocation,o=t.match,r=a[a.length-1]._id;e(g.a.getPostsByLocation(o.params.coordinates,{initialFetch:!1,lastId:r}))},n}return Object(s.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props,e=t.data,n=e.postsByLocation,o=e.totalPostsByLocation,r=t.alert,i=t.match,c=n.length!==o,s=a(i.params.coordinates.split(","),2),p=s[0],g=s[1],y=n.map(function(t){return u.a.createElement(f.a,{to:"/p/"+t._id,key:t._id},u.a.createElement("div",{className:"gallery-item"},u.a.createElement("img",{src:"/images/post-images/thumbnail/".concat(t.photo),className:"gallery-image",alt:""}),u.a.createElement("div",{className:"gallery-item-info"},u.a.createElement("ul",null,u.a.createElement("li",{className:"gallery-item-likes"},u.a.createElement("span",{className:"visually-hidden"},"Likes:"),u.a.createElement(d.a,{name:"heart"})," ",t.likes),u.a.createElement("li",{className:"gallery-item-comments"},u.a.createElement("span",{className:"visually-hidden"},"Comments:"),u.a.createElement(d.a,{name:"comment"})," ",t.comments)))))});return r.type?u.a.createElement("div",{className:"container"},u.a.createElement(m.a,{alert:r})):u.a.createElement(l.Fragment,null,u.a.createElement("div",{className:"map-header"},u.a.createElement("img",{alt:"",src:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l(".concat(p,",").concat(g,")/").concat(p,",").concat(g,",13,0.00,0.00/1200x250@2x?access_token=pk.eyJ1Ijoiam9obmJvcyIsImEiOiJjanl1b3l1MmkwaDdnM2pwaG5yNm1mZmlrIn0.O7X5QEcRO2ncLo_vLMVeTQ")}),u.a.createElement("div",{className:"location-name"},n[0]?n[0].location.address:"")),u.a.createElement("div",{className:"container"},u.a.createElement("div",null,u.a.createElement("p",{style:{fontSize:"2rem",paddingBottom:"1%"}}," ",o," posts"),u.a.createElement(h.a,null),u.a.createElement(S.a,{className:"gallery",dataLength:y.length,next:this.fetchData,hasMore:c,loader:u.a.createElement("h4",null,"Loading...")},y))),u.a.createElement(h.a,{hidden:!0}))}}]),e}(l.Component),O=Object(p.b)(function(t){return{data:t.post,fetchingUserData:t.user.loadingUser,alert:t.alert}})(E)}}]);