"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 4589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X2": () => (/* binding */ Row),
/* harmony export */   "JX": () => (/* binding */ Col),
/* harmony export */   "PG": () => (/* binding */ SocietyForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8451);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2077);
/* harmony import */ var _form_RadioField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1289);
/* harmony import */ var _form_SelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6038);
/* harmony import */ var _form_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Row = ({ title , children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card mb-4 p-12",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-lg font-semibold mb-8",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-start gap-x-8 ",
                children: children
            })
        ]
    }));
};
const Col = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "gap-y-4 flex flex-col justify-start h-full w-full",
        children: children
    }));
};
const SuccessDialog = ({ isOpen , setIsOpen  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const handleOK = ()=>{
        router.push('/society/SC12252021-0011');
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        open: isOpen,
        onClose: ()=>setIsOpen(false)
        ,
        className: "fixed inset-0 z-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "min-h-screen flex justify-center items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                    className: "bg-black fixed inset-0 opacity-30"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white p-8 z-30 w-96 h-72 rounded",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-end mb-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hover:cursor-pointer",
                                onClick: ()=>setIsOpen(false)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_icons_close_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center gap-y-4 flex flex-col justify-center items-center ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                    children: "Your product have been added successfully!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Description, {
                                    children: "Click OK to view your product"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                    onClick: handleOK,
                                    children: "OK"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
const SocietyForm = ({ initialValues , onSubmit  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: isDialogOpen , 1: setIsDialogOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    // const initialValues = {
    //   id: '',
    //   name: '',
    //   phone: '',
    //   email: '',
    //   address: '',
    //   website: '',
    //   type: '',
    //   ownerPhone: '',
    //   ownerPrevProject: '',
    //   legalStatus: '',
    //   area: '',
    //   map: '',
    //   companyName: '',
    //   companyPhone: '',
    //   companyPrevProjects: '',
    //   companyEmail: '',
    //   companyAddress: '',
    // };
    const societySchema = yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
        id: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('ID is required'),
        name: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Name is required'),
        phone: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Phone is required'),
        email: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Email is required'),
        address: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Address is required'),
        website: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Website is required'),
        type: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Type is required'),
        ownerPhone: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Owner Phone is required'),
        ownerPrevProject: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Owner Prev Project is required'),
        legalStatus: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Legal Status is required'),
        area: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Area is required'),
        map: yup__WEBPACK_IMPORTED_MODULE_10__.string().notRequired(),
        companyName: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Company Name is required'),
        companyPhone: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Company Phone is required'),
        companyPrevProjects: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Company Prev Projects is required'),
        companyEmail: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Company Email is required'),
        companyAddress: yup__WEBPACK_IMPORTED_MODULE_10__.string().required('Company Address is required')
    });
    const SOCIETY_TYPES = [
        {
            value: 'Employee',
            label: 'Employee'
        },
        {
            value: 'Dealer',
            label: 'Dealer'
        },
        {
            value: 'End-User',
            label: 'End-User'
        }, 
    ];
    const LEGAL_STATUS = [
        {
            name: 'legalTypes',
            label: 'Certified'
        },
        {
            name: 'legalTypes',
            label: 'Not Certified'
        }, 
    ];
    const handleSubmit = async (values)=>{
        console.log(values);
        const isValid = await societySchema.isValid(values);
        if (isValid) {
            setIsDialogOpen(true);
        } else {
            console.log('not valid');
        }
        onSubmit();
        // hardcoded for now
        router.push('/society/2');
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessDialog, {
                isOpen: isDialogOpen,
                setIsOpen: setIsDialogOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                initialValues: initialValues,
                onSubmit: (values)=>{
                    handleSubmit(values);
                },
                validationSchema: societySchema,
                children: ({ errors , touched  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                                title: "Society Details",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                label: "Name",
                                                name: "name",
                                                placeholder: "Enter Name here",
                                                errors: errors.name,
                                                touched: touched.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                type: "tel",
                                                label: "Phone No",
                                                name: "phone",
                                                placeholder: "Enter phone number here",
                                                errors: errors.phone,
                                                touched: touched.phone
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                label: "Area",
                                                name: "area",
                                                placeholder: "Enter area here",
                                                errors: errors.area,
                                                touched: touched.area
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_RadioField__WEBPACK_IMPORTED_MODULE_5__/* .RadioField */ .g, {
                                                label: "Legal Status",
                                                name: "legalStatus",
                                                values: LEGAL_STATUS,
                                                errors: errors.legalStatus,
                                                touched: touched.legalStatus
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                type: "file",
                                                label: "Map",
                                                name: "map",
                                                placeholder: "Enter website here"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Row, {
                                title: "Owner Detial",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                            label: "Owner Name",
                                            name: "name",
                                            placeholder: "Enter Name here",
                                            errors: errors.name,
                                            touched: touched.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                            type: "tel",
                                            label: "Owner Phone No",
                                            name: "ownerPhone",
                                            placeholder: "Enter Phone Number here",
                                            errors: errors.ownerPhone,
                                            touched: touched.ownerPhone
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                            label: "Owner Previous Project",
                                            name: "ownerPrevProject",
                                            placeholder: "Enter previous projects here (if any)",
                                            errors: errors.ownerPrevProject,
                                            touched: touched.ownerPrevProject
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                                title: "Development Company",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                label: "Company Name",
                                                name: "companyName",
                                                placeholder: "Enter Company Name here",
                                                errors: errors.companyName,
                                                touched: touched.companyName
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                type: "tel",
                                                label: "Phone",
                                                name: "companyPhone",
                                                placeholder: "Enter Phone Number here",
                                                errors: errors.companyPhone,
                                                touched: touched.companyPhone
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                label: "Previous Projects",
                                                name: "companyPrevProjects",
                                                placeholder: "Enter previous projects here (if any)",
                                                errors: errors.companyPrevProjects,
                                                touched: touched.companyPrevProjects
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                label: "Email",
                                                name: "companyEmail",
                                                placeholder: "Enter email here"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_7__/* .TextField */ .n, {
                                                    label: "Address",
                                                    name: "companyAddress",
                                                    placeholder: "Enter address here",
                                                    as: "textarea",
                                                    errors: errors.companyAddress,
                                                    touched: touched.companyAddress
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Row, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex w-full justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                        onClick: handleSubmit,
                                        type: "submit",
                                        children: "Submit"
                                    })
                                })
                            })
                        ]
                    })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;