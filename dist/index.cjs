"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.setItem = exports.getItem = void 0;
const fs_1 = __importDefault(require("fs"));
function getItem(key) {
    let data = null;
    let status;
    function __fetch(index) {
        if (status === 0)
            return;
        let reg = new RegExp(`\"\<(?<key>${key}), (?<value>{.+?})>`);
        fs_1.default.createReadStream('./.133localStorage-vnoa4903cc/.local.x', 'utf8')
            .on('data', (ch) => {
            var _a;
            console.log(JSON.parse((_a = reg.exec(ch.toString()).groups) === null || _a === void 0 ? void 0 : _a.value.toString().replace(/[\\//]+/g, "")));
            status = 0;
            __fetch(++index);
        });
    }
    __fetch(0);
    return data;
}
exports.getItem = getItem;
function setItem(key, value) {
    //Check if record exist?
    fs_1.default.createReadStream('./.133localStorage-vnoa4903cc/.local.x')
        .on('data', (ch) => {
        let match;
        console.log(ch.toString().match(new RegExp(`\"\<${key},`)));
        if (match = new RegExp(`\"\<${key},`).exec(ch.toString())) {
            console.log("Exists...");
            let str = ch.toString().replace(/[\\//]+/g, "");
            console.log(str);
            // console.log(new RegExp(`\<${key}, (?<value>{.+?})\>`).exec(str))
            str = str.replace(new RegExp(`\<${key}, (?<value>{.+?})\>`), `<${key}, ${value}>`);
            fs_1.default.writeFile('./.133localStorage-vnoa4903cc/.local.x', str, (err) => {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile('./.133localStorage-vnoa4903cc/.local.x', JSON.stringify(`<${key}, ${value}>`), (error) => {
                if (error)
                    throw error;
            });
        }
    });
}
exports.setItem = setItem;
function log() {
    return '';
}
exports.log = log;
//# sourceMappingURL=index.js.map