import{_ as e,c as r,o as a,ag as n}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"内存分配与回收策略","description":"","frontmatter":{},"headers":[],"relativePath":"05-memory-allocation-gc.md","filePath":"05-memory-allocation-gc.md","lastUpdated":1652175101000}'),l={name:"05-memory-allocation-gc.md"};function t(i,o,d,c,s,p){return a(),r("div",null,o[0]||(o[0]=[n('<h1 id="内存分配与回收策略" tabindex="-1">内存分配与回收策略 <a class="header-anchor" href="#内存分配与回收策略" aria-label="Permalink to &quot;内存分配与回收策略&quot;">​</a></h1><p>对象的内存分配，就是在堆上分配（也可能经过 JIT 编译后被拆散为标量类型并间接在栈上分配），对象主要分配在新生代的 Eden 区上，少数情况下可能直接分配在老年代，<strong>分配规则不固定</strong>，取决于当前使用的垃圾收集器组合以及相关的参数配置。</p><p>以下列举几条最普遍的内存分配规则，供大家学习。</p><h2 id="对象优先在-eden-分配" tabindex="-1">对象优先在 Eden 分配 <a class="header-anchor" href="#对象优先在-eden-分配" aria-label="Permalink to &quot;对象优先在 Eden 分配&quot;">​</a></h2><p>大多数情况下，对象在新生代 Eden 区中分配。当 Eden 区没有足够空间进行分配时，虚拟机将发起一次 Minor GC。</p><p>👇<strong>Minor GC</strong> vs <strong>Major GC</strong>/<strong>Full GC</strong>：</p><ul><li>Minor GC：回收新生代（包括 Eden 和 Survivor 区域），因为 Java 对象大多都具备朝生夕灭的特性，所以 Minor GC 非常频繁，一般回收速度也比较快。</li><li>Major GC / Full GC：回收老年代，出现了 Major GC，经常会伴随至少一次的 Minor GC，但这并非绝对。Major GC 的速度一般会比 Minor GC 慢 10 倍 以上。</li></ul><blockquote><p>在 JVM 规范中，Major GC 和 Full GC 都没有一个正式的定义，所以有人也简单地认为 Major GC 清理老年代，而 Full GC 清理整个内存堆。</p></blockquote><h2 id="大对象直接进入老年代" tabindex="-1">大对象直接进入老年代 <a class="header-anchor" href="#大对象直接进入老年代" aria-label="Permalink to &quot;大对象直接进入老年代&quot;">​</a></h2><p>大对象是指需要大量连续内存空间的 Java 对象，如很长的字符串或数据。</p><p>一个大对象能够存入 Eden 区的概率比较小，发生分配担保的概率比较大，而分配担保需要涉及大量的复制，就会造成效率低下。</p><p>虚拟机提供了一个 -XX:PretenureSizeThreshold 参数，令大于这个设置值的对象直接在老年代分配，这样做的目的是避免在 Eden 区及两个 Survivor 区之间发生大量的内存复制。（还记得吗，新生代采用复制算法回收垃圾）</p><h2 id="长期存活的对象将进入老年代" tabindex="-1">长期存活的对象将进入老年代 <a class="header-anchor" href="#长期存活的对象将进入老年代" aria-label="Permalink to &quot;长期存活的对象将进入老年代&quot;">​</a></h2><p>JVM 给每个对象定义了一个对象年龄计数器。当新生代发生一次 Minor GC 后，存活下来的对象年龄 +1，当年龄超过一定值时，就将超过该值的所有对象转移到老年代中去。</p><p>使用 <code>-XXMaxTenuringThreshold</code> 设置新生代的最大年龄，只要超过该参数的新生代对象都会被转移到老年代中去。</p><h2 id="动态对象年龄判定" tabindex="-1">动态对象年龄判定 <a class="header-anchor" href="#动态对象年龄判定" aria-label="Permalink to &quot;动态对象年龄判定&quot;">​</a></h2><p>如果当前新生代的 Survivor 中，相同年龄所有对象大小的总和大于 Survivor 空间的一半，年龄 &gt;= 该年龄的对象就可以直接进入老年代，无须等到 <code>MaxTenuringThreshold</code> 中要求的年龄。</p><h2 id="空间分配担保" tabindex="-1">空间分配担保 <a class="header-anchor" href="#空间分配担保" aria-label="Permalink to &quot;空间分配担保&quot;">​</a></h2><p>JDK 6 Update 24 之前的规则是这样的：</p><p>在发生 Minor GC 之前，虚拟机会先检查<strong>老年代最大可用的连续空间是否大于新生代所有对象总空间</strong>， 如果这个条件成立，Minor GC 可以确保是安全的； 如果不成立，则虚拟机会查看 <code>HandlePromotionFailure</code> 值是否设置为允许担保失败， 如果是，那么会继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小， 如果大于，将尝试进行一次 Minor GC，尽管这次 Minor GC 是有风险的； 如果小于，或者 <code>HandlePromotionFailure</code> 设置不允许冒险，那此时也要改为进行一次 Full GC。</p><p>JDK 6 Update 24 之后的规则变为：</p><p>只要老年代的连续空间大于新生代对象总大小或者历次晋升的平均大小，就会进行 Minor GC，否则将进行 Full GC。</p><p>通过清除老年代中的废弃数据来扩大老年代空闲空间，以便给新生代作担保。</p><p>这个过程就是分配担保。</p><hr><p>👇 总结一下有哪些情况可能会触发 JVM 进行 Full GC。</p><ol><li><strong><code>System.gc()</code> 方法的调用</strong> 此方法的调用是建议 JVM 进行 Full GC，注意这<strong>只是建议而非一定</strong>，但在很多情况下它会触发 Full GC，从而增加 Full GC 的频率。通常情况下我们只需要让虚拟机自己去管理内存即可，我们可以通过 -XX:+ DisableExplicitGC 来禁止调用 <code>System.gc()</code>。</li><li><strong>老年代空间不足</strong> 老年代空间不足会触发 Full GC 操作，若进行该操作后空间依然不足，则会抛出如下错误：<code>java.lang.OutOfMemoryError: Java heap space</code></li><li><strong>永久代空间不足</strong> JVM 规范中运行时数据区域中的方法区，在 HotSpot 虚拟机中也称为永久代（Permanet Generation），存放一些类信息、常量、静态变量等数据，当系统要加载的类、反射的类和调用的方法较多时，永久代可能会被占满，会触发 Full GC。如果经过 Full GC 仍然回收不了，那么 JVM 会抛出如下错误信息：<code>java.lang.OutOfMemoryError: PermGen space </code></li><li><strong>CMS GC 时出现 <code>promotion failed</code> 和 <code>concurrent mode failure</code></strong> promotion failed，就是上文所说的担保失败，而 concurrent mode failure 是在执行 CMS GC 的过程中同时有对象要放入老年代，而此时老年代空间不足造成的。</li><li><strong>统计得到的 Minor GC 晋升到旧生代的平均大小大于老年代的剩余空间。</strong></li></ol>',27)]))}const C=e(l,[["render",t]]);export{h as __pageData,C as default};
