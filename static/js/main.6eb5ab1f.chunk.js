(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3cOtY",ImageGalleryItem:"ImageGallery_ImageGalleryItem__NFLG8",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__2mJio"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1ngiu",Modal:"Modal_Modal__dEnCA"}},17:function(e,t,a){e.exports={App:"App_App__zBosM",Loader:"App_Loader__3M9MO"}},28:function(e,t,a){e.exports={Button:"Button_Button__1Bshm"}},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(18),s=a(4),i=a(5),u=a(7),m=a(6),h=(a(34),a(78),a(8)),p=a.n(h),d=a(1),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleNameChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.inputValue;""!==a.trim()?(e.props.onSubmit(a),e.setState({inputValue:""})):alert("Enter what you are looking for.")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(d.jsx)("header",{className:p.a.Searchbar,children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(d.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleNameChange})]})})}}]),a}(r.a.Component),b=a(12),f=a.n(b),j=function(e){var t=e.smallImage,a=e.largeImage,n=e.onClick;return Object(d.jsx)("li",{onClick:function(){n(a)},children:Object(d.jsx)("img",{src:t,alt:"gallaryImg",className:f.a.ImageGalleryItemImage})})},y=(a(36),function(e){var t=e.images,a=e.onClick;return Object(d.jsx)("ul",{className:f.a.ImageGallery,children:t.map((function(e){return Object(d.jsx)(j,{smallImage:e.webformatURL,largeImage:e.largeImageURL,onClick:a},e.id)}))})}),v=a(14),O=a.n(v),S=a(27),I=a(15),_=a.n(I);_.a.defaults.baseURL="https://pixabay.com/api";var x="16763452-f17d9c1e6c077c804b5291364",k=function(){var e=Object(S.a)(O.a.mark((function e(t){var a,n,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,_()("/?q=".concat(t,"&page=").concat(a,"&key=").concat(x,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={fetchImagesWithQuery:k},w=a(28),F=a.n(w);function B(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})}var N=a(29),M=a.n(N),L=a(16),G=a.n(L),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscClick=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscClick)}},{key:"render",value:function(){var e=this.props.largeImage;return Object(d.jsx)("div",{className:G.a.Overlay,onClick:this.onBackdropClick,children:Object(d.jsx)("div",{className:G.a.Modal,children:Object(d.jsx)("img",{src:e,alt:"modalImg"})})})}}]),a}(r.a.Component),A=a(17),Q=a.n(A),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,results:[],loading:!1,modalImage:null,firstFetch:!0},e.handleSearchbarSubmit=function(t){e.setState({searchQuery:t,results:[],page:1,firstFetch:!0})},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),C.fetchImagesWithQuery(a,n).then((function(t){t.length<1?e.setState({error:!0}):(e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1,error:!1}})),1!==n&&e.scrollToBottom())})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.openModal=function(t){e.setState({modalImage:t})},e.closeModal=function(t){e.setState({modalImage:null})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.results,a=e.loading,n=e.modalImage;return Object(d.jsxs)("div",{className:Q.a.App,children:[Object(d.jsx)(g,{onSubmit:this.handleSearchbarSubmit}),Object(d.jsx)(y,{images:t,onClick:this.openModal}),n&&Object(d.jsx)(E,{largeImage:n,onClose:this.closeModal}),a&&Object(d.jsx)("div",{className:Q.a.Loader,children:Object(d.jsx)(M.a,{type:"Oval",color:"#00BFFF",height:100,width:100})}),t.length>0&&!a&&Object(d.jsx)(B,{onClick:this.fetchImages})]})}}]),a}(r.a.Component);a(76);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__S9upa",SearchForm:"Searchbar_SearchForm__2sxL3",SearchFormButton:"Searchbar_SearchFormButton__1PjhR",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2CprE",SearchFormInput:"Searchbar_SearchFormInput__2TNRc"}}},[[77,1,2]]]);
//# sourceMappingURL=main.6eb5ab1f.chunk.js.map