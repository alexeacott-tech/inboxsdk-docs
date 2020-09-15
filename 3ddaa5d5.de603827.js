(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{61:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return r})),o.d(t,"default",(function(){return b}));var a=o(2),n=o(6),s=(o(0),o(80)),i={},c={unversionedId:"compose",id:"compose",isDocsHomePage:!1,title:"compose",description:"Compose",source:"@site/docs/compose.md",slug:"/compose",permalink:"/inboxsdk-docs/compose",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/compose.md",version:"current"},r=[{value:"<code>Compose.registerComposeViewHandler(handler)</code>",id:"composeregistercomposeviewhandlerhandler",children:[]},{value:"<code>Compose.openNewComposeView()</code>",id:"composeopennewcomposeview",children:[]},{value:"ComposeView",id:"composeview",children:[]}],p={rightToc:r};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"compose"},"Compose"),Object(s.b)("p",null,"This namespace contains methods and types related to adding your application elements to the Gmail or Inbox Compose UI. The compose UI has two variants. The New Compose UI appears when users are composing new messages and appear as windows above the rest of the app content. The second, the Reply UI, appears when users are replying to existing messages from the message they are replying to. This namespace handles both of these variants equivalently."),Object(s.b)("p",null,"The ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.inboxsdk.com/docs/#ComposeView"}),Object(s.b)("inlineCode",{parentName:"a"},"ComposeView"))," type is how you interact with compose windows in Gmail and Inbox. The most common way to get access to a compose view is to use the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"javascript:$.find%28%22methods-box%5Bdoc-class=Compose%5D%22%29%5B0%5D.scrollMethodIntoView%28%22registerComposeViewHandler%22%29"}),Object(s.b)("inlineCode",{parentName:"a"},"Compose.registerComposeViewHandler()"))," method which calls you back with every existing ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.inboxsdk.com/docs/#ComposeView"}),Object(s.b)("inlineCode",{parentName:"a"},"ComposeView"))," and all future ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.inboxsdk.com/docs/#ComposeView"}),Object(s.b)("inlineCode",{parentName:"a"},"ComposeView")),"s. From there a typical application will modify the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.inboxsdk.com/docs/#ComposeView"}),Object(s.b)("inlineCode",{parentName:"a"},"ComposeView"))," as needed by adding buttons, adding content to the message, or accessing the recipient data."),Object(s.b)("h3",{id:"composeregistercomposeviewhandlerhandler"},Object(s.b)("inlineCode",{parentName:"h3"},"Compose.registerComposeViewHandler(handler)")),Object(s.b)("p",null,"Register a handler to be called for every existing ComposeView as well as for all future ComposeViews that may come into existence. This method is the preferred way to add your application to every compose area such as a new compose window or inline reply compose areas. This function returns a function which removes the handler registration."),Object(s.b)("p",null,"Returns: ",Object(s.b)("inlineCode",{parentName:"p"},"Function")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(s.b)("strong",{parentName:"td"},"handler")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(s.b)("inlineCode",{parentName:"td"},"function(ComposeView)")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The function to be called")))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"InboxSDK.load(1, 'YOUR_APP_ID_HERE').then(function(sdk){\n  sdk.Compose.registerComposeViewHandler(function(composeView){\n    console.log(\"compose view exists!\");\n  });\n});\n")),Object(s.b)("h3",{id:"composeopennewcomposeview"},Object(s.b)("inlineCode",{parentName:"h3"},"Compose.openNewComposeView()")),Object(s.b)("p",null,"Opens a new compose view. Any handlers you've registered for ComposeViews will be called as well. Returns a promise which will resolve with the new ComposeView once it has opened."),Object(s.b)("p",null,"Returns: ",Object(s.b)("inlineCode",{parentName:"p"},"Promise<ComposeView>")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(s.b)("strong",{parentName:"td"},"handler")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(s.b)("inlineCode",{parentName:"td"},"function(ComposeView)")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The function to be called")))),Object(s.b)("h2",{id:"composeview"},"ComposeView"),Object(s.b)("p",null,"Object that represents an open compose window ",Object(s.b)("strong",{parentName:"p"},"or")," reply widget. The fields can be easily read and modified, and certain elements can be attached to it. This includes buttons and sidebars.  "))}b.isMDXComponent=!0}}]);