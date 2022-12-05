/*
*  Frappe Better Numerical Controls © 2022
*  Author:  Ameen Ahmed
*  Company: Level Up Marketing & Software Development Services
*  Licence: Please refer to LICENSE file
*/


import prepare_options from './utils';


frappe.ui.form.ControlFloat = class ControlFloat extends frappe.ui.form.ControlFloat {
   make_input() {
        super.make_input();
        prepare_options(this, ['Float', 'Currency'], flt);
    }
    parse(value) {
        value = super.parse(value);
        if (['Float', 'Currency'].indexOf((this.df || {}).fieldtype) < 0) return value;
        value = flt(value);
        if (this._max_field) {
            let max_value = this.frm.doc[this._max_field];
            if (max_value != null) {
                max_value = flt(max_value);
                if (max_value < value) value = max_value;
            }
        }
        if (this._min_field) {
            let min_value = this.frm.doc[this._min_field];
            if (min_value != null) {
                min_value = flt(min_value);
                if (min_value > value) value = min_value;
            }
        }
        if (this._max != null && this._max < value) value = this._max;
        if (this._min != null && this._min > value) value = this._min;
        return value;
    }
};