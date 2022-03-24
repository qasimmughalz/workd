"use strict";
exports.id = 38;
exports.ids = [38];
exports.modules = {

/***/ 6038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ SelectField)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/arrowDown.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrowDown = function SvgArrowDown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 10,
    height: 6,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.518 0H.482C.055 0-.163.565.144.901L4.66 5.848a.453.453 0 0 0 .678 0L9.857.9C10.163.565 9.945 0 9.517 0Z",
    fill: "#111"
  })));
};

/* harmony default export */ const arrowDown = (SvgArrowDown);
;// CONCATENATED MODULE: ./public/icons/arrowUp.svg
var arrowUp_path;

function arrowUp_extends() { arrowUp_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrowUp_extends.apply(this, arguments); }



var SvgArrowUp = function SvgArrowUp(props) {
  return /*#__PURE__*/external_react_.createElement("svg", arrowUp_extends({
    width: 10,
    height: 7,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrowUp_path || (arrowUp_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.518 6.43H.482c-.427 0-.645-.564-.338-.899L4.66.597a.454.454 0 0 1 .678 0l4.518 4.934c.306.335.088.9-.34.9Z",
    fill: "#383838"
  })));
};

/* harmony default export */ const arrowUp = (SvgArrowUp);
// EXTERNAL MODULE: ./components/form/FieldContainer.js
var FieldContainer = __webpack_require__(4299);
;// CONCATENATED MODULE: ./components/form/SelectField.js






const CustomDropdownIndicator = (props, { innerRef , innerProps  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: innerRef,
        ...innerProps,
        className: "pl-2",
        children: props.selectProps.menuIsOpen ? /*#__PURE__*/ jsx_runtime_.jsx(arrowUp, {}) : /*#__PURE__*/ jsx_runtime_.jsx(arrowDown, {})
    }));
};
const CustomControl = (props, { innerRef , innerProps  })=>{
    console.log(props);
    const { menuIsOpen , onMenuOpen , onMenuClose  } = props.selectProps;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: menuIsOpen ? onMenuClose : onMenuOpen,
        className: "input form-input flex justify-between",
        ref: innerRef,
        ...innerProps,
        children: props.children
    }));
};
const MySelect = ({ options , field , form , placeholder  })=>{
    const customStyles = {
        container: (provided, state)=>({
                ...provided,
                height: '2.5rem',
                fontSize: '0.875rem',
                fontFamily: 'inherit',
                outline: 'none',
                paddingLeft: '0'
            })
        ,
        placeholder: (provided, state)=>({
                ...provided,
                color: 'rgb(107,114,128)'
            })
        ,
        valueContainer: (provided, state)=>({
                ...provided,
                border: 'none',
                padding: '0'
            })
        ,
        dropdownIndicator: (provided, state)=>({
                ...provided,
                padding: 0
            })
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
        components: {
            Control: CustomControl,
            DropdownIndicator: CustomDropdownIndicator,
            IndicatorSeparator: ()=>null
        },
        styles: customStyles,
        placeholder: placeholder,
        isSearchable: false,
        options: options,
        name: field.name,
        value: options ? options.find((option)=>option.value === field.value
        ) : '',
        onChange: (option)=>form.setFieldValue(field.name, option.value)
        ,
        onBlur: field.onBlur
    }));
};
const SelectField = ({ label , placeholder , name , options  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FieldContainer/* FieldContainer */.i, {
        label: label,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
            name: name,
            component: MySelect,
            options: options,
            placeholder: placeholder
        })
    }));
};


/***/ })

};
;