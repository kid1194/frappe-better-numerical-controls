
function isVal(v) { return v != null; }

function getType(v) {
    if (!isVal(v)) return v === undefined ? 'Undefined' : 'Null';
    var type = Object.prototype.toString.call(v).slice(8, -1);
    return type === 'Number' && isNaN(v) ? 'NaN' : type;
}

function ucFirst(v) {
    v = String(v);
    return v.charAt(0).toUpperCase() + v.slice(1);
}

function ofType(v, type) { return getType(v) === ucFirst(type); }

function getProtoOf(v) { return Object.getPrototypeOf(Object(v)); }

function isOwnProp(v, key) { return Object.prototype.hasOwnProperty.call(v, key); }

function isFunction(v) { return /(Function|^Proxy)$/.test(getType(v)); }

function isDataObject(v) {
    if (!ofType(v, 'Object')) return false;
    var p = getProtoOf(v), k = 'constructor';
    return !p || (isOwnProp(p, k) && p[k] && isFunction(p[k])
    && Function.prototype.toString.call(p[k]) === Function.prototype.toString.call(Object));
}

export {
    isVal,
    isDataObject
};
