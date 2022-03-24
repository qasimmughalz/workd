"use strict";
(() => {
var exports = {};
exports.id = 884;
exports.ids = [884,301];
exports.modules = {

/***/ 1736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5789);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7031);
/* harmony import */ var _components_SocietyForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_SocietyForm__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_SocietyForm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const EditSocietyPage = ({ society  })=>{
    console.log(society);
    const initialValues = {
        id: society.societyId,
        name: society.societyName,
        phone: society.contactNo,
        email: '',
        address: '',
        website: '',
        type: '',
        ownerPhone: '',
        ownerPrevProject: '',
        legalStatus: society.legalStatus === 'CERTIFIED' ? 'Certified' : 'Not Certified',
        area: society.area,
        map: '',
        companyName: society.developerCompanyName,
        companyPhone: '',
        companyPrevProjects: '',
        companyEmail: '',
        companyAddress: ''
    };
    const postSociety = ()=>{
        return null;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .A, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* .PageHeader */ .m, {
                title: "Edit Society"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocietyForm__WEBPACK_IMPORTED_MODULE_3__/* .SocietyForm */ .PG, {
                initialValues: initialValues,
                onSubmit: postSociety
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    const { id  } = context.query;
    const data = await fetch(`https://property-expert-backend-prod.herokuapp.com/society/${id}`).then((res)=>res.json()
    );
    return {
        props: {
            society: data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditSocietyPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,789,87,877,196,589], () => (__webpack_exec__(1736)));
module.exports = __webpack_exports__;

})();