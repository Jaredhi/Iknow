(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{487:function(s,t,a){"use strict";a.r(t);var r=a(15),_=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、本地事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、本地事务"}},[s._v("#")]),s._v(" 一、本地事务")]),s._v(" "),a("h3",{attrs:{id:"_1、事务的基本性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、事务的基本性质"}},[s._v("#")]),s._v(" 1、事务的基本性质")]),s._v(" "),a("p",[s._v("数据库事务的几个特性∶")]),s._v(" "),a("p",[a("strong",[s._v("原子性")]),s._v("（Atomicity）、"),a("strong",[s._v("一致性")]),s._v("（Consistency）"),a("strong",[s._v("隔离性或独立性")]),s._v("（Isolation）和"),a("strong",[s._v("持久性")]),s._v("（Durabilily），简称就是 "),a("strong",[s._v("ACID")]),s._v(";")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("原子性")]),s._v(" ∶ 一系列的操作整体不可拆分，要么同时成功，要么同时失败")]),s._v(" "),a("li",[a("strong",[s._v("一致性")]),s._v("∶ 数据在事务的前后，业务整体一致。")]),s._v(" "),a("li",[s._v("转账 A∶1000; B∶1000;   转200  事务成功; A∶ 800 B∶1200")]),s._v(" "),a("li",[a("strong",[s._v("隔离性")]),s._v("∶ 事务之间互相隔离。")]),s._v(" "),a("li",[a("strong",[s._v("持久性")]),s._v("∶ 一旦事务成功，数据一定会落盘在数据库。")])]),s._v(" "),a("p",[s._v("在以往的单体应用中，我们多个业务操作使用同一条连接操作不同的数据表，一旦有异常，我们可以很容易的整体回滚;")]),s._v(" "),a("p",[s._v("比如买东西业务，扣库存，下订单，账户扣款，是一个整体，必须同时成功或者失败。\n一个事务开始，代表以下的所有操作都在同一个连接里面;")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://jinterest.oss-cn-shenzhen.aliyuncs.com/img/gomall/%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%80%A7%E8%B4%A8.jpg"}}),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Business∶我们具体的业务代码 \nStorage∶ 库存业务代码;扣库存 \nOrder∶订单业务代码;保存订单 \nAccount∶账号业务代码;减账户余额\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2、事务的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、事务的隔离级别"}},[s._v("#")]),s._v(" 2、事务的隔离级别")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("READ UNCOMMITTED（读未提交）")])])]),s._v(" "),a("p",[s._v("该隔离级别的事务会读到其它未提交事务的数据，此现象也称之为脏读。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("READ COMMITTED（读已提交）")])]),s._v(" "),a("p",[s._v("一个事务可以读取另一个已提交的事务，多次读取会造成不一样的结果，此现象称为不可重复读问题，Oracle 和 SQL Server 的默认隔离级别。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("REPEATABLE READ（可重复读）")])]),s._v(" "),a("p",[s._v('该隔离级别是 MvsQL 默认的隔离级别，在同一个事务里，selet的结果是事务开始时时间点的状态，因此，同样的 select 操作读到的结果会是一致的，但是，会有幻读现象。MySQL的 InoDB 引擎可以通过 next-keylocks 机制（参考"行锁的算法"）来避免幻读。')])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("SERIALIZABLE（序列化）")])]),s._v(" "),a("p",[s._v("在该隔离级别下事务都是串行顺序执行的，MySQL 数据库的 InnoDB 引擎会给读操作隐式加一把读共享锁，从而避免了脏读、不可重读复读和幻读问题。")])])]),s._v(" "),a("h3",{attrs:{id:"_3、事务的传播行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、事务的传播行为"}},[s._v("#")]),s._v(" 3、事务的传播行为")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("1、PROPAGATION_REQUIRED∶")])]),s._v(" "),a("p",[s._v("如果当前没有事务，就创建一个新事务，如果当前存在事务，就加入该事务，该设置是最常用的设置。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("2、PROPAGATION_SUPPORTS∶")])]),s._v(" "),a("p",[s._v("支持当前事务，如果当前存在事务，就加入该事务，如果当前不存在事务，就以非事务执行。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("3、PROPAGATION_MANDATORY∶")])]),s._v(" "),a("p",[s._v("支持当前事务，如果当前存在事务，就加入该事务，如果当前不存在事务，就抛出异常。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("4、PROPAGATION_REQUIRES_NEW∶")])]),s._v(" "),a("p",[s._v("创建新事务，无论当前存不存在事务，都创建新事务。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("5、PROPAGATION_NOT_SUPPORTED∶")])])])]),s._v(" "),a("p",[s._v("以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("6、PROPAGATION_NEVER∶")])]),s._v(" "),a("p",[s._v("以非事务方式执行，如果当前存在事务，则抛出异常。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("7、PROPAGATION_NESTED∶")])]),s._v(" "),a("p",[s._v("如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与 PROPAGATION_REQUIRED 类似的操作。")])])]),s._v(" "),a("h3",{attrs:{id:"_4、springboot事务的关键点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、springboot事务的关键点"}},[s._v("#")]),s._v(" 4、SpringBoot事务的关键点")]),s._v(" "),a("h4",{attrs:{id:"_1、事务的自动配置-todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、事务的自动配置-todo"}},[s._v("#")]),s._v(" 1、事务的自动配置 TODO")]),s._v(" "),a("p",[a("strong",[s._v("TransactionAutoConfiguration")])]),s._v(" "),a("h4",{attrs:{id:"_2、事务的坑-todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、事务的坑-todo"}},[s._v("#")]),s._v(" 2、事务的坑 TODO")]),s._v(" "),a("p",[s._v("在同一个类里面，编写两个方法，内部调用的时候，会导致事务设置失效。原因是没有用到代理对象的缘故。")]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("ol",[a("li",[s._v("导入 spring-boot-starter-aop")]),s._v(" "),a("li",[s._v("@EnableTransactionManagement(proxyTargetCass= true)")]),s._v(" "),a("li",[s._v("@EnableAspectJAutoProxy(exposeProxy=true)")]),s._v(" "),a("li",[s._v("使用AopContextcurrentProxy() 去调用同一类中的方法")])]),s._v(" "),a("h2",{attrs:{id:"二、分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分布式事务"}},[s._v("#")]),s._v(" 二、分布式事务")]),s._v(" "),a("h3",{attrs:{id:"_1、为什么有分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、为什么有分布式事务"}},[s._v("#")]),s._v(" 1、为什么有分布式事务")]),s._v(" "),a("p",[s._v("分布式系统经常出现的异常")]),s._v(" "),a("ul",[a("li",[s._v("机器宕机、网络异常、消息丢失、消息乱序、数据错误、不可靠的TCP、存储数据丢失…")])]),s._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://jinterest.oss-cn-shenzhen.aliyuncs.com/img/gomall/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A101.jpg"}}),s._v(" "),a("p",[s._v("分布式事务在微服务架构中，几平可以说是无法避免。")]),s._v(" "),a("h3",{attrs:{id:"_2、cap定理与base理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、cap定理与base理论"}},[s._v("#")]),s._v(" 2、CAP定理与BASE理论")]),s._v(" "),a("h4",{attrs:{id:"_1、cap定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、cap定理"}},[s._v("#")]),s._v(" 1、CAP定理")]),s._v(" "),a("p",[s._v("CAP 原则又称 CAP定理，指的是在一个分布式系统中")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("一致性（Consistency）∶")])]),s._v(" "),a("ul",[a("li",[s._v("在分布式系统中的所有数据备份，在同一时刻是否同样的值。（所有节点在同一时间的数据完全一致，越多节点，数据同步越耗时）")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("可用性（Availability）：")])]),s._v(" "),a("ul",[a("li",[s._v("负载过大后，集群整体是否还能响应客户端的读写请求。（服务一直可用，而且是正常响应时间）")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("分区容错性（Partition tolerance）")])]),s._v(" "),a("ul",[a("li",[s._v("分区容错性，就是高可用性，一个节点崩了，并不影响其它的节点（100个节点，挂了几个，不影响服务，越多机器越好）")])])])]),s._v(" "),a("p",[a("strong",[s._v("CA 满足的情况下，P不能满足的原因：")])]),s._v(" "),a("p",[s._v("数据同步(C)需要时间，也要正常的时间内响应(A)，那么机器数量就要少，所以P就不满足")]),s._v(" "),a("p",[a("strong",[s._v("CP 满足的情况下，A不能满足的原因：")])]),s._v(" "),a("p",[s._v("数据同步(C)需要时间, 机器数量也多(P)，但是同步数据需要时间，所以不能再正常时间内响应，所以A就不满足")]),s._v(" "),a("p",[a("strong",[s._v("AP 满足的情况下，C不能满足的原因：")])]),s._v(" "),a("p",[s._v("机器数量也多(P)，正常的时间内响应(A)，那么数据就不能及时同步到其他节点，所以C不满足")]),s._v(" "),a("p",[a("strong",[s._v("这三个要素最多只能同时实现两点，不可能三者兼顾。")])]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://jinterest.oss-cn-shenzhen.aliyuncs.com/img/gomall/CAP.png"}}),s._v(" "),a("p",[s._v("一般来说，分区容错无法避免，因此可以认为 CAP的P总是成立，剩下的 C 和 A 无法同时做到。")]),s._v(" "),a("p",[s._v("分布式系统使用中实现一致性的 raft 算法 "),a("code",[s._v("http:/thesecretlivesofdata.com/raft/")])]),s._v(" "),a("h4",{attrs:{id:"_2、面临的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、面临的问题"}},[s._v("#")]),s._v(" 2、面临的问题")]),s._v(" "),a("p",[s._v("对于多数大型互联网应用的场景，主机众多、部署分散，而且现在的集群规模越来越大，所以节点故障、网络故障是常态，而且要保证服务可用性达到99.999%（N个9），"),a("strong",[s._v("即保证 P和A，舍弃C。")])]),s._v(" "),a("h4",{attrs:{id:"_3、base理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、base理论"}},[s._v("#")]),s._v(" 3、BASE理论")]),s._v(" "),a("p",[s._v("是对CAP理论的延伸，思想是即使无法做到强一致性（CAP的一致性就是强一致性），但可以采用适当的采取弱一致性，即"),a("strong",[s._v("最终一致性")]),s._v("。\u2029BASE 是指")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("基本可用（BasicallyAvailable）")])]),s._v(" "),a("li",[s._v("基本可用是指分布式系统在出现故障的时候，允许损失部分可用性（例如响应时间、\u2029功能上的可用性），"),a("strong",[s._v("允许损失部分可用性")]),s._v("。需要注意的是，基本可用绝不等价于系统不可用。")]),s._v(" "),a("li",[a("strong",[s._v("响应时间上的损失：")]),s._v(" 正常情况下搜索引擎需要在0.5 秒之内返回给用户相应的\u2029查询结果，但由于出现故障（比如系统部分机房发生断电或断网故障），查询结果的响应时间增加到了 1~2秒。")]),s._v(" "),a("li",[a("strong",[s._v("功能上的损失：")]),s._v(" 购物网站在购物高峰（如双十一）时，为了保护系统的稳定性，\u2029部分消费者可能会被引导到一个降级页面。")]),s._v(" "),a("li",[a("strong",[s._v("软状态（ Soft State）")]),s._v(" "),a("ul",[a("li",[s._v("软状态是指允许系统存在中间状态，而该中间状态不会影响系统整体可用性。分布\u2029式存储中一般一份数据会有多个副本，允许不同副本同步的延时就是软状态的体现。mysql replication 的异步复制也是一种体现。")])])]),s._v(" "),a("li",[a("strong",[s._v("最终一致性（ Eventual Consistency）")])]),s._v(" "),a("li",[s._v("最终一致性是指系统中的所有数据副本经过一定时间后，最终能够达到一致的状\u2029态。弱一致性和强一致性相反，最终一致性是弱一致性的一种特殊情况。")])]),s._v(" "),a("h4",{attrs:{id:"_4、强一致性-弱一致性-最终一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、强一致性-弱一致性-最终一致性"}},[s._v("#")]),s._v(" 4、强一致性，弱一致性，最终一致性")]),s._v(" "),a("p",[s._v("从客户端角度，多进程并发访问时，更新过的数据在不同进程如何获取的不同策略，决定了不同的一致性。对于关系型数据库，要求更新过的数据能被后续的访问都能看到，这是"),a("strong",[s._v("强一致性")]),s._v("。如果能容忍后续的部分或者全部访问不到，则是"),a("strong",[s._v("弱一致性")]),s._v("。如果经过一段时间后要求能访问到更新后的数据，则是"),a("strong",[s._v("最终一致性")])]),s._v(" "),a("h3",{attrs:{id:"_3、分布式事务几种方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、分布式事务几种方案"}},[s._v("#")]),s._v(" 3、分布式事务几种方案")]),s._v(" "),a("h4",{attrs:{id:"_1、2pc模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、2pc模式"}},[s._v("#")]),s._v(" 1、2PC模式")]),s._v(" "),a("p",[s._v("数据库支持的2PC【2 phase commit二阶提交】，又叫做"),a("strong",[s._v("XA Transactions")]),s._v("\u2029 。\nMYSQL从5.5版本开始支持,SQL Server 2005开始支持，Orade7开始支持。\n\u2029其中，XA是一个"),a("strong",[s._v("两阶段提交协议")]),s._v("，该协议分为以下两个阶段：")]),s._v(" "),a("p",[a("strong",[s._v("第一阶段")]),s._v("：事务协调器要求每个涉及到事务的数据库预提交precommit此操作，并反映是\u2029否可以提交.\u2029\n"),a("strong",[s._v("第二阶段")]),s._v("：事务协调器要求每个数据库提交数据。\u2029其中，如果有任何一个数据库否决此次提交，那么所有数据库都会被要求回滾它们在此事务\u2029中的那部分信息。")]),s._v(" "),a("img",{staticStyle:{zoom:"30%"},attrs:{src:"https://jinterest.oss-cn-shenzhen.aliyuncs.com/img/gomall/%E4%B8%A4%E9%98%B6%E6%AE%B5%E6%8F%90%E4%BA%A4%E5%8D%8F%E8%AE%AE.jpg"}}),s._v(" "),a("ul",[a("li",[s._v("XA协议比较简单，而且一旦商业数据库实现了XA协议，使用分布式事务的成本也比较低。")]),s._v(" "),a("li",[s._v("XA 性能不理想，特别是在交易下单链路，往往并发量很高，XA 无法满足高并发场景")]),s._v(" "),a("li",[s._v("XA目前在商业数据库支持的比较理想，在mysql 数据库中支持的不太理想，mysql 的XA实现，没有记录 prepare 阶段日志，主备切换回导致主库与备库数据不一致。")]),s._v(" "),a("li",[s._v("许多 nosql也没有支持XA，这让XA的应用场景变得非常狭隘。")]),s._v(" "),a("li",[s._v("也有3PC，引入了超时机制（无论协调者还是参与者，在向对方发送请求后，若长时间未收到回应则做出相应处理）")])]),s._v(" "),a("h4",{attrs:{id:"_2、柔性事务-tcc-事务补偿型方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、柔性事务-tcc-事务补偿型方案"}},[s._v("#")]),s._v(" 2、柔性事务-TCC 事务补偿型方案")]),s._v(" "),a("p",[a("strong",[s._v("刚性事务")]),s._v("∶遵循 ACID 原则，强一致性。\n"),a("strong",[s._v("柔性事务")]),s._v("∶遵循 BASE 理论，最终一致性;与刚性事务不同，柔性事务允许一定时间内，不同节点的数据不一致，但要求最终一致。")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://jinterest.oss-cn-shenzhen.aliyuncs.com/img/gomall/%E6%9F%94%E6%80%A7%E4%BA%8B%E5%8A%A1.png"}}),s._v(" "),a("p",[a("strong",[s._v("一阶段 prepare 行为：")]),s._v(" 调用自定义的 prepare 逻辑。\n"),a("strong",[s._v("一阶段 commit 行为：")]),s._v(" 调用自定义的 commit 逻辑。\n"),a("strong",[s._v("一阶段 rollback 行为：")]),s._v(" 调用自定义的 rollback 逻辑。\n所谓 TCC 模式：是指支持把自定义的分支事务纳入到全局的管理中。")]),s._v(" "),a("h4",{attrs:{id:"_3、柔性事务-最大努力通知方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、柔性事务-最大努力通知方案"}},[s._v("#")]),s._v(" 3、柔性事务-最大努力通知方案")]),s._v(" "),a("p",[s._v("按规律进行通知，"),a("strong",[s._v("不保证数据一定能通知成功，但会提供可查询操作接口进行核对")]),s._v("。这种方案主要用在与第三方系统通讯时，比如∶调用微信或支付宝支付后的支付结果通知。这种方案也是结合 MQ进行实现，例如∶通过MQ发送 http请求，设置最大通知次数。达到通知次数后即不再通知。")]),s._v(" "),a("p",[s._v("案例∶银行通知、商户通知等（各大交易业务平台间的商户通知∶多次通知、查询校对、对账文件），支付宝的支付成功异步回调")]),s._v(" "),a("h4",{attrs:{id:"_4、柔性事务-可靠消息-最终一致性方案-异步确保型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、柔性事务-可靠消息-最终一致性方案-异步确保型"}},[s._v("#")]),s._v(" 4、柔性事务-可靠消息+最终一致性方案（异步确保型）")]),s._v(" "),a("p",[a("strong",[s._v("实现")]),s._v("∶业务处理服务在业务事务提交之前，向实时消息服务请求发送消息，实时消息服务只记录消息数据，而不是真正的发送。业务处理服务在业务事务提交之后，向实时消息服务确认发送。只有在得到确认发送指令后，实时消息服务才会真正发送。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("确保每个消息发送成功，给每个消息做好日志记录，保存每个消息的详细信息\n定期扫描数据库，重新发送失败的消息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mq_message'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message_id'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'content'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'to_exchane'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'routing key'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class_type'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message_statusint'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DEFAULIT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0新建1-已发送 2-错误抵达 3-已抵达'")]),s._v("，\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'create_time'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NUll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'update_time'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PRIMARY KEY'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("InoDB DEFAUITCHARSET"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=_.exports}}]);