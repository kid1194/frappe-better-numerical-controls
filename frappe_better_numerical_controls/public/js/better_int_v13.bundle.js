import {
    isDataObject
} from './utils/check.js';

frappe.ui.form.ControlInt = frappe.ui.form.ControlInt.extend({
    make_input: function() {
        this._super();
        if (this.df.fieldtype !== 'Int') return;
        if (frappe.utils.is_json(this.df.options)) {
            this.df.options = frappe.utils.parse_json(this.df.options);
        }
        if (isDataObject(this.df.options)) {
            let opts = this.df.options,
            me = this;
            ['min', 'max', 'divisible_by'].forEach(function(k) {
                if (opts[k] != null) me['_' + k] = cint(opts[k]);
            });
            if (!this.frm) return;
            ['min_field', 'max_field'].forEach(function(k) {
                if (opts[k] != null) me['_' + k] = String(opts[k]);
            });
        }
    },
    parse: function(value) {
        value = this._super(value);
        if (this._min != null && this._min > value) return this._min;
        if (this._max != null && this._max < value) return this._max;
        if (this._divisible_by != null && value % this._divisible_by !== 0) {
            return Math.round(value / this._divisible_by) * this._divisible_by;
        }
        if (this._min_field) {
            let field = this.frm.get_field(this._min_field),
            field_val = field ? cint(field.get_value()) : value;
            if (field_val > value) return field_val;
        }
        if (this._max_field) {
            let field = this.frm.get_field(this._max_field),
            field_val = field ? cint(field.get_value()) : value;
            if (field_val < value) return field_val;
        }
        return value;
    }
});
