export default class React {
    constructor(target, cb = null) {
        return new Proxy(target, {
            get(target, prop) {
                return prop in target ? target[prop]: null;
            },

            set(target, prop, value) {
                target[prop] = value;

                if (typeof cb == 'function') {
                    cb.apply(target, [prop, value]);
                }

                return true;
            }
        })
    }
}
