(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{8036:function(e,s,n){"use strict";var r,l=n(7294);function a(){return a=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}s.Z=function(e){return l.createElement("svg",a({width:11,height:11,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=l.createElement("path",{d:"M10.083 4.583H6.417V.917a.917.917 0 1 0-1.834 0v3.666H.917a.917.917 0 1 0 0 1.834h3.666v3.666a.917.917 0 1 0 1.834 0V6.417h3.666a.917.917 0 1 0 0-1.834Z",fill:"#fff"})))}},7586:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files/all",function(){return n(1100)}])},3304:function(e,s,n){"use strict";n.d(s,{D:function(){return a}});var r=n(5893),l=n(1163),a=function(e){var s=e.children,n=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4 card",children:[(0,r.jsxs)("div",{className:" flex justify-around",children:[(0,r.jsxs)("a",{href:"",className:"relative",onClick:function(){return n.push("/files/all",void 0,{shallow:!0})},children:[(0,r.jsx)("h3",{className:"mx-4 bg-yellow p-1.5",children:"Inventory"})," "]}),(0,r.jsx)("a",{href:"",className:"relative",onClick:function(){return n.push("/files/new",void 0,{shallow:!0})},children:(0,r.jsx)("h3",{className:"mx-4 p-1.5",children:"Add New File"})}),(0,r.jsx)("a",{href:"",className:"relative",onClick:function(){return n.push("/files/assignment",void 0,{shallow:!0})},children:(0,r.jsx)("h3",{className:"mx-4 p-1.5",children:"File Assignment"})}),(0,r.jsx)("a",{href:"",className:"relative",onClick:function(){return n.push("/files/bulk",void 0,{shallow:!0})},children:(0,r.jsx)("h3",{className:"mx-4 p-1.5",children:"Bulk Files Upload"})}),(0,r.jsx)("a",{href:"",className:"relative",onClick:function(){return n.push("/files/history",void 0,{shallow:!0})},children:(0,r.jsx)("h3",{className:"mx-4 p-1.5",children:"Assignment History"})})]}),(0,r.jsx)("div",{className:"flex gap-x-4",children:s})]})}},7031:function(e,s,n){"use strict";n.d(s,{m:function(){return l}});var r=n(5893),l=function(e){var s=e.title,n=e.children;return(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsxs)("div",{className:" flex flex-col",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold ",children:s}),(0,r.jsx)("span",{className:"w-full h-1 bg-primary"})]}),(0,r.jsx)("div",{className:"flex gap-x-4",children:n})]})}},6652:function(e,s,n){"use strict";n.d(s,{n:function(){return i}});var r=n(5893),l=n(2580),a=n(4299),i=function(e){var s=e.label,n=e.placeholder,i=e.name,t=e.type,c=e.as,o=e.errors,d=e.touched;return(0,r.jsxs)(a.i,{label:s,children:[(0,r.jsx)(l.gN,{className:"input my-3 form-input  ".concat(o&&d?"border-red-500":"border-gray-300"),as:c||"input",type:t||"text",name:i,placeholder:n}),o&&d&&(0,r.jsx)("div",{className:"text-xs pt-1 text-red-600",children:o})]})}},1100:function(e,s,n){"use strict";n.r(s);var r=n(5893),l=n(8100),a=n(2077),i=(n(7031),n(5901)),t=n(2734),c=n(6922),o=n(8036),d=n(1163),u=n(7141),h=n(6652),f=n(3304),x=function(){return(0,r.jsx)(u.o,{children:(0,r.jsxs)("div",{className:"flex divide-x-2 gap-x-4",children:[(0,r.jsxs)("div",{className:"flex gap-x-4",children:[(0,r.jsx)(h.n,{placeholder:"Project Name"}),(0,r.jsx)(h.n,{placeholder:"Status"}),(0,r.jsx)(h.n,{placeholder:"Type"})]}),(0,r.jsx)("div",{className:"flex pl-2",children:(0,r.jsx)("button",{className:"underline",children:"Show advanced filters"})})]})})};s.default=function(){var e=(0,d.useRouter)();console.log(e.pathname);var s,n=(0,l.ZP)("https://property-expert-backend-prod.herokuapp.com/plot-files",c.Z),u=n.data;n.error;return u&&(s=u.map((function(e){return{"FILE NO":e.fileNo,"FILE SECURITY":e.fileSecurityNo,"FILE OWNER":"Muhammad Waqas\n         Cheema","CREATED DATE":e.createdAt,"ASSIGNED DATE":e.assignedDate,"PROJECT NAME":e.projectName,"PRICE (RS)":e.unitPrice,STATUS:"STATUS",ACTION:String(e.id)}}))),(0,r.jsxs)(i.A,{children:[(0,r.jsx)(f.D,{children:(0,r.jsx)(a.z,{icon:(0,r.jsx)(o.Z,{}),onClick:function(){return e.push("/files/new",{shallow:!0})},children:"Add New File"})}),(0,r.jsx)("div",{className:"card mb-4",children:(0,r.jsx)(x,{})}),(0,r.jsx)("div",{className:"card",children:u&&(0,r.jsx)(t.i,{tableData:s})})]})}}},function(e){e.O(0,[937,898,580,280,521,901,259,774,888,179],(function(){return s=7586,e(e.s=s);var s}));var s=e.O();_N_E=s}]);