import {NodeModuleTester} from './core/utils';

/**
 * main 入口
 * 
 * 测试!
 */

function main(){

    const tester = new NodeModuleTester("s1", 1);

  console.log(NodeModuleTester.STATIC_VAR);

  console.log(NodeModuleTester.testPath());

}



main()