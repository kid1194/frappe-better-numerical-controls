/*
*  Frappe Better Numerical Controls © 2022
*  Author:  Ameen Ahmed
*  Company: Level Up Marketing & Software Development Services
*  Licence: Please refer to LICENSE file
*/


import prepare_options from './utils';


frappe.ui.form.ControlInt = frappe.ui.form.ControlInt.extend({
    make_input: function() {
        this._super();
        prepare_options(this, ['Int'], cint);
    },
    parse: function(value) {
        value = this._super(value);
        if ((this.df || {}).fieldtype !== 'Int') return value;
        value = cint(value);
        if (this._max_field) {
            let max_value = this.frm.doc[this._max_field];
            if (max_value != null) {
                max_value = cint(max_value);
                if (max_value < value) value = max_value;
            }
        }
        if (this._min_field) {
            let min_value = this.frm.doc[this._min_field];
            if (min_value != null) {
                min_value = cint(min_value);
                if (min_value > value) value = min_value;
            }
        }
        if (this._divisible_by != null && (value % this._divisible_by) !== 0) {
            value = Math.round(((value / this._divisible_by) + 1) * this._divisible_by);
        }
        if (this._max != null && this._max < value) value = this._max;
        if (this._min != null && this._min > value) value = this._min;
        return value;
    }
});