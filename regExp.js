// 正则表达式
// RegExp()中的参数为正则表达式，判断是否字符串中是否有相对应的匹配。
// 有test()方法，可以测试当前字符串中是否存在该正则表达式，有为true，无为false。
// 有exec()方法，可以检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
// 有compile()方法，可以用来改变正则表达式。传入的值为新的正则表达式。
// RegExp()中可以传第二参数。i 执行对大小写不敏感的匹配。g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。m 执行多行匹配。


// word为全字符串   key为关键字，格式为正则表达式
function regTestIfWord(word, key) {
    var regTest = new RegExp(key);
    if (regTest.test(word)) {
        return true;
    }
    return false;
}
function regTestIfPhone(phone) {
    // var regTest = new RegExp("1[34578][0-9]{9}");
    var regTest = new RegExp("1[34578]\\d{9}");
    if (regTest.test(phone)) {
        return true;
    }
    return false;
}
function regTestIfMailSimple(mail) {
    var regTest = new RegExp("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*");
    if (regTest.test(mail)) {
        return true;
    }
    return false;
}