/*
*  Frappe Better Numerical Controls © 2022
*  Author:  Ameen Ahmed
*  Company: Level Up Marketing & Software Development Services
*  Licence: Please refer to LICENSE file
*/


// Helpers
function objectType(v) {
    if (v == null) return v === undefined ? 'Undefined' : 'Null';
    let t = Object.prototype.toString.call(v).slice(8, -1);
    return t === 'Number' && isNaN(v) ? 'NaN' : t;
}
function isString(v) {
    return v != null && objectType(v) === 'String';
}

// Checks
function isPlainObject(v) {
    return v != null && $.isPlainObject(v);
}
function isJson(v) {
    return isString(v) && parseJson(v) !== v;
}

// Json
function parseJson(v) {
    try {
        return JSON.parse(v);
    } catch(e) {
        return v;
    }
}
function toJson(v) {
    try {
        return JSON.stringify(v);
    } catch(e) {
        return '';
    }
}

// Field
function clear_options(field) {
    if (field._is_better == null) return;
    [
        'is_better', 'options',
        'min', 'max', 'divisible_by',
        'min_field', 'max_field'
    ].forEach(function(k) {
        field['_' + k] = undefined;
    });
}
export default function prepare_options(field, types, fn) {
    if (
        !field.df
        || !field.df.fieldtype
        || types.indexOf(field.df.fieldtype) < 0
        || !field.df.options
        || field.df.options === field._options
        || !isJson(field.df.options)
    ) {
        clear_options(field);
        return;
    }
    
    clear_options(field);
    
    field._is_better = toJson(types);
    field._options = field.df.options;
    
    var opts = parseJson(field.df.options);
    if (!isPlainObject(opts)) return;
    
    ['min', 'max', 'divisible_by'].forEach(function(k) {
        if (opts[k] != null) {
            let v = fn(opts[k]);
            if (!isNaN(v)) field['_' + k] = v;
        }
    });
    
    if (!field.frm) return;
    
    ['min_field', 'max_field'].forEach(function(k) {
        if (opts[k] != null) {
            let v = cstr(opts[k]);
            if (v.length) field['_' + k] = v;
        }
    });
}