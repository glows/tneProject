"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./core/utils");
/**
 * main 入口
 *
 * 测试!
 */
function main() {
    var tester = new utils_1.NodeModuleTester("s1", 1);
    console.log(utils_1.NodeModuleTester.STATIC_VAR);
    console.log(utils_1.NodeModuleTester.testPath());
}
main();
