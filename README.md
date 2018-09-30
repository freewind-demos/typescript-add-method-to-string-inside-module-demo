TypeScript Add Method to String Inside Module Demo
==================================================

这个Demo花了很多时间，终于弄明白了一些事情。

首先要注意的是，WebStorm在这个过程中的编译提示（不论成功还是错误），都是不可信的，我被它偶然出现的错误误导了很久。
能够相信的，只有`ts-node`和`tsc`可以相信。可以使用`package.json`定义的相关scripts:

```
npm run tsc:hello
npm run tsc:hello-global
npm run run:hello
npm run run:hello-global
```

做实验或者修改了代码，最好使用上面的命令看效果。

最终发现：

- 如果某个ts文件不是module（没有`import/export`），那么就不能`declare global`，因为`global`必须存在于某个module中。
该ts文件可以直接`declare interface String`，就可以向String类型添加方法了，见`hello.ts`。

- 如果某个ts文件是module（有`import/export`），它就必须使用`global`，否则同样会出现编译错误。而在`hello-global.ts`中，
为了使它成为一个module，最后写了一个没什么用的`export default ''`

在`tsconfig.json`中，当前`module`设的是`commonjs`，可以换成别的，效果一样。

还有另外一点，注意`tsconfig.json`中，如果设置了自己的`lib`，要注意里面是不是有`ES5/6/...`等，如果没有的话，会提示`String`找不到。
如果没有写`lib`，则typescript会自动设置正确的lib依赖。

Resources
---------
- tsconfig详解：<https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
