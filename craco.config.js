

//此craco的js文件可以用来把文件路径进行别名


const path = require("path");
const resolve =  dir => path.resolve(__dirname,dir);
module.exports = {
    webpack: {
        alias: {
            //前缀使用@可以直接找到src目录
            "@": resolve("src"),
            "component": resolve("src/components")
        }
    }
}