<template>
    <div>
        <h1>加入我们</h1>
        <div>您至少满足
            <span class="red">以下条件&nbsp;</span>之一即可加入我们：
            <ul>
                <li>您是一名
                    <span class="red">高中生</span>&nbsp;或
                    <span class="red">处于以上学历</span>；
                </li>
                <li>您熟悉
                    <span class="red">Java</span>、
                    <span class="red">Python</span>、
                    <span class="red">C++</span>、
                    <span class="red">C#</span>、
                    <span class="red">JavaScript</span>、
                    <span class="red">PHP</span>、
                    <span class="red">C</span>、
                    <span class="red">Vue</span>
                    包括但不限于上述的一种或多种编程语言；
                </li>
                <li>您熟悉
                    <span class="red">插图设计</span>、
                    <span class="red">Logo设计</span>、
                    <span class="red">视频剪辑</span>、
                    <span class="red">音频剪辑</span>
                    等技能；
                </li>
                <li>您熟悉软件方面的
                    <span class="red">测试</span>、
                    <span class="red">运维</span>、
                    <span class="red">安全</span>
                    等技能；
                </li>
                <li>若您有意向加入我们，请点击旁边的带框框的链接
                    <a class="link" target="_blank" href="https://docs.qq.com/form/page/DZnhUWG5NTHpYelBV">申请链接</a>
                </li>
            </ul>
        </div>
        <h1>联系我们</h1>
        <ul>
            <li>邮箱：coolers@ecanse.com
            </li>
        </ul>
    </div>
</template>

<style scoped>
p {
    border: 3px solid #000;
    padding: 0 10px;
    top: -1px;
    letter-spacing: 2px;
    line-height: 30px;
}

ul li {
    line-height: 30px;
}

p:hover {
    background-color: #000;
    color: #fff;
    transition: color 1s;
    transition: background-color 1s;
}

.red {
    font-weight: bold;
    font-style: italic;
}

.link {
    color: #000;
    border: 3px solid #000;
    text-decoration: none;
    padding: 0 10px;
}

.link:hover {
    background-color: #000;
    color: #fff;
    transition: color 1s;
    transition: background-color 1s;
}
</style>