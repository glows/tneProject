"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeModuleTester = void 0;
var path = __importStar(require("path")); // 测试能否正常使用 Node 的内置模块
/**
 * 一个正常的class
 *
 * 不得不说, TS 使用起来真是舒服,各种该有的东西都替你考虑到了
 * 很舒心
 */
var NodeModuleTester = /** @class */ (function () {
    function NodeModuleTester(// 测试构造方法
    f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    NodeModuleTester.testPath = function () {
        var curdir = './';
        console.log(path.resolve(curdir));
    };
    NodeModuleTester.STATIC_VAR = 'STATIC'; // 测试static变量
    return NodeModuleTester;
}());
exports.NodeModuleTester = NodeModuleTester;
