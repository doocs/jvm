---
layout: home

hero:
  name: "jvm"
  text: "JVM 底层原理最全知识总结"
  tagline: Doocs 技术社区出品
  actions:
    - theme: alt
      text: 作者主页
      link: https://github.com/yanglbme
    - theme: brand
      text: 开始学习
      link: /00-quickstart

features:
  - title: "JVM 内存结构 🧠"
    details: 程序计数器、Java 虚拟机栈、本地方法栈、堆、方法区...
    link: /01-jvm-memory-structure
  - title: "HotSpot 虚拟机对象探秘 🔍"
    details: 对象内存布局、创建过程、访问方式
    link: /02-hotspot-jvm-object
  - title: "垃圾收集策略与算法 ♻️"
    details: 判断对象是否存活、引用种类、垃圾收集算法
    link: /03-gc-algorithms
  - title: "HotSpot 垃圾收集器 🔥"
    details: 新生代、老年代、G1 通用垃圾收集器
    link: /04-hotspot-gc
  - title: "内存分配与回收策略 💡"
    details: 对象分配、大对象、动态对象年龄判定、空间分配担保
    link: /05-memory-allocation-gc
  - title: "JVM 性能调优 🚀"
    details: 使用 64 位 JDK 管理大内存、使用 32 位 JVM 建立逻辑集群
    link: /06-jvm-performance-tuning
  - title: "类文件结构 📑"
    details: 魔数、版本信息、常量池、访问标志、类索引、字段表、方法表...
    link: /07-class-structure
  - title: "类加载的时机 ⏳"
    details: 类的生命周期、类加载过程初始化时机、接口加载过程
    link: /08-load-class-time
  - title: "类加载的过程 ⚙️"
    details: 加载、验证、准备、解析、初始化
    link: /09-load-class-process
  - title: "类加载器 🛠️"
    details: 类与类加载器、双亲委派模型工作过程
    link: /10-class-loader
---