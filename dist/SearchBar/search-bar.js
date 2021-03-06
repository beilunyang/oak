"use strict";
Component({
    properties: {
        cancelText: {
            type: String,
            value: '取消'
        },
        placeholder: {
            type: String,
            value: ''
        },
        placeholderStyle: {
            type: String,
            value: ''
        },
        placeholderClass: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number,
            value: 140
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: 'search'
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        inputFocus: {
            type: Boolean,
            value: false
        },
        cursor: {
            type: Number,
            value: 0
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        holdKeyboard: {
            type: Boolean,
            value: false
        }
    },
    data: {
        inputValue: '',
        defaultValue: ''
    },
    methods: {
        updated(e) {
            this.data.inputValue !== e && this.setData({
                inputValue: e
            });
        },
        onChange(e) {
            this.data.controlled || this.updated(e.detail.value),
                this.data.inputFocus || this.setData({
                    inputFocus: true
                }),
                this.triggerEvent('change', e.detail);
        },
        onFocus(e) {
            this.setData({
                inputFocus: true
            }),
                this.triggerEvent('focus', e.detail);
        },
        onBlur(e) {
            this.setData({
                inputFocus: false
            }),
                this.triggerEvent('blur', e.detail);
        },
        onConfirm(e) {
            this.triggerEvent('confirm', e.detail);
        },
        onClear() {
            const e = this.data;
            const t = e.controlled;
            const a = e.inputValue;
            this.setData({
                inputValue: t ? a : '',
                inputFocus: true
            }),
                this.triggerEvent('clear', {
                    value: ''
                });
        },
        onCancel() {
            this.triggerEvent('cancel', {
                value: this.data.inputValue
            });
        },
        onClick() {
            this.data.disabled || this.setData({
                inputFocus: true
            });
        },
        onKeyboardheightchange(e) {
            this.triggerEvent('keyboardheightchange', {
                value: e.detail
            });
        }
    },
    attached() {
        const e = this.data;
        const t = e.defaultValue;
        const a = e.value;
        const n = e.controlled ? a : t;
        this.updated(n);
    },
    externalClasses: ['wrap-class', 'input-class', 'cancel-class']
});
