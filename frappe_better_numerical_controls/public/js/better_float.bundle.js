import {
    isVal,
    isDataObject
} from './utils/check.js';

frappe.ui.form.ControlFloat = class ControlFloat extends frappe.ui.form.ControlFloat {
   make_input() {
        super.make_input();
        if (this.df.fieldtype !== 'Float' && this.df.fieldtype !== 'Currency') return;
        if (frappe.utils.is_json(this.df.options)) {
            this.df.options = frappe.utils.parse_json(this.df.options);
        }
        if (isDataObject(this.df.options)) {
            let opts = this.df.options,
            me = this;
            ['min', 'max'].forEach(function(k) {
                if (isVal(opts[k])) me['_' + k] = flt(opts[k]);
            });
        }
    }
    parse(value) {
        value = super.parse(value);
        if (isVal(this._min) && this._min > value) return this._min;
        if (isVal(this._max) && this._max < value) return this._max;
        return value;
    }
};