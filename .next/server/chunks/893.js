"use strict";
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 8893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ FilesForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2077);
/* harmony import */ var _form_RadioField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1289);
/* harmony import */ var _form_SelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6038);
/* harmony import */ var _form_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6652);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);








const MyForm = ({ title , children , onSubmit , onBack , submitText , initialValues  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
            initialValues: initialValues,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                className: " mx-auto w-full lg:max-w-screen-sm bg-white flex flex-col gap-y-4 border rounded-md shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-lg border-b p-5",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-5 flex flex-col gap-y-4",
                                children: children
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-gray-50 p-5 flex w-full justify-end",
                        children: [
                            onBack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                    color: "black",
                                    onClick: onBack,
                                    children: "Back"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                onClick: onSubmit,
                                children: submitText ? submitText : 'Submit'
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const BasicInfoForm = ({ handleClick , initialValues  })=>{
    const FILE_TYPES = [
        {
            value: 'testing'
        }, 
    ];
    const STATUS_VALUES = [
        {
            label: 'Sold',
            value: 'sold'
        },
        {
            label: 'Reserved',
            value: 'reserved'
        },
        {
            label: 'Available',
            value: 'available'
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyForm, {
        title: "Basic Information",
        submitText: "Next",
        onSubmit: handleClick,
        initialValues: initialValues,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "File Number",
                name: "fileNo"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Security Code",
                name: "securityCode"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_SelectField__WEBPACK_IMPORTED_MODULE_5__/* .SelectField */ .m, {
                label: "Type",
                name: "type",
                options: FILE_TYPES
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_RadioField__WEBPACK_IMPORTED_MODULE_4__/* .RadioField */ .g, {
                label: "Status",
                name: "status",
                values: STATUS_VALUES
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Project Name",
                name: "projectName"
            })
        ]
    }));
};
const InitialAssignmentForm = ({ handleClick , handleClickBack , initialValues  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyForm, {
        title: "Initial Assignment",
        submitText: "Next",
        onSubmit: handleClick,
        onBack: handleClickBack,
        initialValues: initialValues,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Assigned To",
                name: "assignedTo"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Assignment Date",
                name: "assignmentDate"
            })
        ]
    }));
};
const Pricing = ({ handleClick , handleClickBack , initialValues  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyForm, {
        title: "Initial Assignment",
        submitText: "Submit",
        onSubmit: handleClick,
        onBack: handleClickBack,
        initialValues: initialValues,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Unit Price",
                name: "unitPrice"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full justify-between flex-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                        label: "Minimum Deposit",
                        name: "minimumDeposit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                        label: "Percentage",
                        name: "percentage"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_TextField__WEBPACK_IMPORTED_MODULE_6__/* .TextField */ .n, {
                label: "Notes / Comments",
                name: "notes"
            })
        ]
    }));
};
const StepItem = ({ step , text , currentStep  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `p-2  rounded-md w-10 h-10 flex justify-center items-center ${step === currentStep ? 'bg-primary text-white' : 'bg-gray-200'}`,
                children: step
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `ml-2 ${step === currentStep ? 'text-gray-900' : ''}`,
                children: text
            })
        ]
    }));
};
const FilesForm = ({ initialValuesBasicInformation , initialValuesAssignment , initialValuesPricing ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: currentStep , 1: setCurrentStep  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const handleClickNext = ()=>{
        setCurrentStep(currentStep + 1);
    };
    const handleClickBack = ()=>{
        setCurrentStep(currentStep - 1);
    };
    const handleClickSubmit = ()=>{
        console.log('submit');
        // HARDCODED FOR NOW
        router.push('/files/445');
    };
    const renderCurrentStep = ()=>{
        switch(currentStep){
            case 1:
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BasicInfoForm, {
                    handleClick: handleClickNext,
                    initialValues: initialValuesBasicInformation
                }));
            case 2:
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InitialAssignmentForm, {
                    initialValues: initialValuesAssignment,
                    handleClick: handleClickNext,
                    handleClickBack: handleClickBack
                }));
            case 3:
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pricing, {
                    initialValues: initialValuesPricing,
                    handleClick: handleClickSubmit,
                    handleClickBack: handleClickBack
                }));
            default:
                return null;
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto w-full py-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex items-center justify-center gap-x-8 font-semibold text-gray-600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepItem, {
                            step: 1,
                            text: "Basic Information",
                            currentStep: currentStep
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepItem, {
                            step: 2,
                            text: "Initial Assignment",
                            currentStep: currentStep
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepItem, {
                            step: 3,
                            text: "Pricing",
                            currentStep: currentStep
                        })
                    ]
                })
            }),
            renderCurrentStep()
        ]
    }));
};


/***/ })

};
;