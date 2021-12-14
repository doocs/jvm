# Java 虚拟机底层原理知识总结

<a href="https://github.com/doocs/jvm/actions?query=workflow%3ASync"><img src="https://github.com/doocs/jvm/workflows/Sync/badge.svg"></a>
<a href="https://github.com/doocs/jvm/blob/main/LICENSE"><img src="https://badgen.net/github/license/doocs/jvm?color=green" alt="license"></a>
<a href="https://github.com/doocs/jvm/issues"><img src="https://badgen.net/github/open-issues/doocs/jvm" alt="issues"></a>
<a href="https://github.com/doocs/jvm/stargazers"><img src="https://badgen.net/github/stars/doocs/jvm" alt="stars"></a>
<a href="https://github.com/doocs/jvm"><img src="https://badgen.net/badge/⭐/GitHub/blue" alt="github"></a>
<a href="https://gitee.com/doocs/jvm"><img src="https://badgen.net/badge/⭐/Gitee/blue" alt="gitee"></a>
<a href="http://makeapullrequest.com"><img src="https://badgen.net/badge/PRs/welcome/cyan" alt="PRs Welcome"></a>
<a href="https://github.com/doocs/doocs.github.io"><img src="https://badgen.net/badge/organization/join%20us/cyan" alt="open-source-organization"></a>

这里仅仅记录了一些笔者认为需要重点掌握的 JVM 知识点，如果你想更加全面地了解 JVM 底层原理，可以阅读周志明老师《深入理解 Java 虚拟机——JVM 高级特性与最佳实践(第 2/3 版)》全书。

## 清单

- [JVM 内存结构](/docs/01-jvm-memory-structure.md)
- [HotSpot 虚拟机对象探秘](/docs/02-hotspot-jvm-object.md)
- [垃圾收集策略与算法](/docs/03-gc-algorithms.md)
- [HotSpot 垃圾收集器](/docs/04-hotspot-gc.md)
- [内存分配与回收策略](/docs/05-memory-allocation-gc.md)
- [JVM 性能调优](/docs/06-jvm-performance-tuning.md)
- [类文件结构](/docs/07-class-structure.md)
- [类加载的时机](/docs/08-load-class-time.md)
- [类加载的过程](/docs/09-load-class-process.md)
- [类加载器](/docs/10-class-loader.md)

## 站点

本项目使用开源小工具 [Gitee Pages Actions](https://github.com/yanglbme/gitee-pages-action) 实现站点的自动部署更新。

目前支持以下两个站点访问：

- Gitee Pages: https://doocs.gitee.io/jvm
- GitHub Pages: https://doocs.github.io/jvm

## 写作规范

参考《[中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)》

## 许可证

[知识共享 版权归属-相同方式共享 4.0 国际 公共许可证](http://creativecommons.org/licenses/by-sa/4.0/)

---

## Doocs 社区优质项目

Doocs 技术社区，致力于打造一个内容完整、持续成长的互联网开发者学习生态圈！以下是 Doocs 旗下的一些优秀项目，欢迎各位开发者朋友持续保持关注。

| #   | 项目                                                              | 描述                                                                                             | 热度                                                                                                                            |
| --- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [advanced-java](https://github.com/doocs/advanced-java)           | 互联网 Java 工程师进阶知识完全扫盲：涵盖高并发、分布式、高可用、微服务、海量数据处理等领域知识。 | ![](https://badgen.net/github/stars/doocs/advanced-java) <br>![](https://badgen.net/github/forks/doocs/advanced-java)           |
| 2   | [leetcode](https://github.com/doocs/leetcode)                     | 多种编程语言实现 LeetCode、《剑指 Offer（第 2 版）》、《程序员面试金典（第 6 版）》题解。        | ![](https://badgen.net/github/stars/doocs/leetcode) <br>![](https://badgen.net/github/forks/doocs/leetcode)                     |
| 3   | [source-code-hunter](https://github.com/doocs/source-code-hunter) | 互联网常用组件框架源码分析。                                                                     | ![](https://badgen.net/github/stars/doocs/source-code-hunter) <br>![](https://badgen.net/github/forks/doocs/source-code-hunter) |
| 4   | [jvm](https://github.com/doocs/jvm)                               | Java 虚拟机底层原理知识总结。                                                                    | ![](https://badgen.net/github/stars/doocs/jvm) <br>![](https://badgen.net/github/forks/doocs/jvm)                               |
| 5   | [coding-interview](https://github.com/doocs/coding-interview)     | 代码面试题集，包括《剑指 Offer》、《编程之美》等。                                               | ![](https://badgen.net/github/stars/doocs/coding-interview) <br>![](https://badgen.net/github/forks/doocs/coding-interview)     |
| 6   | [md](https://github.com/doocs/md)                                 | 一款高度简洁的微信 Markdown 编辑器。                                                             | ![](https://badgen.net/github/stars/doocs/md) <br>![](https://badgen.net/github/forks/doocs/md)                                 |
| 7   | [technical-books](https://github.com/doocs/technical-books)       | 值得一看的技术书籍列表。                                                                         | ![](https://badgen.net/github/stars/doocs/technical-books) <br>![](https://badgen.net/github/forks/doocs/technical-books)       |

## 贡献者

感谢以下所有朋友对 [Doocs 技术社区](https://github.com/doocs) 所做出的贡献，[参与项目维护请戳这儿](https://doocs.github.io/#/?id=how-to-join)。

<!-- ALL-CONTRIBUTORS-LIST: START - Do not remove or modify this section -->

<a href="https://opencollective.com/doocs/contributors.svg?width=890&button=true"><img src="https://opencollective.com/doocs/contributors.svg?width=890&button=false" /></a>

<!-- ALL-CONTRIBUTORS-LIST: END -->

## 公众号

[Doocs](https://github.com/doocs) 技术社区旗下唯一公众号「**Doocs 开源社区**」​，欢迎扫码关注，**专注分享技术领域相关知识及行业最新资讯**。当然，也可以加我个人微信（备注：GitHub），拉你进技术交流群。

<table>
  <tr>
    <td align="center" style="width: 200px;">
      <a href="https://github.com/doocs">
        <img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/qrcode-for-doocs.jpg" style="width: 400px;"><br>
        <sub>公众平台</sub>
      </a><br>
    </td>
    <td align="center" style="width: 200px;">
      <a href="https://github.com/yanglbme">
        <img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/qrcode-for-yanglbme.jpg" style="width: 400px;"><br>
        <sub>个人微信</sub>
      </a><br>
    </td>
  </tr>
</table>

关注「**Doocs 开源社区**」公众号，回复 **JVM**，即可获取本项目离线 PDF 文档，学习更加方便！

![](https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/jvm-pdf.png)
