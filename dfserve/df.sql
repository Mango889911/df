SET NAMES UTF8;
DROP DATABASE IF EXISTS df;
CREATE DATABASE df CHARSET=UTF8;
USE df;
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(64),
  upwd VARCHAR(64),
  email VARCHAR(64),
  tel VARCHAR(11)
);
INSERT INTO user VALUES(
  1,'admin','123456','admin@qq.com','15677789021'),
(DEFAULT,'lily','123456','lily@qq.com','13477789021'),
(DEFAULT,'luly','123456','luly@qq.com','17977789021'),
(DEFAULT,'admin','123456','admin@qq.com','12345678911');

CREATE TABLE df_cooker(
  kid INT PRIMARY KEY AUTO_INCREMENT,
  kname VARCHAR(64),
  k_family VARCHAR(64),
  img VARCHAR(256),
  kintr VARCHAR(256),
  href VARCHAR(64),
  comment int
);

INSERT INTO `df_cooker` (`kid`,`k_family`,`kname`,`img`, `kintr`, `href`,`comment`) VALUES
(1,'法国菜','安托万·卡雷姆','img/cooker/c1.jpg','安托万·卡雷姆被誉为“厨师之王和国王之王”,卡雷姆成为“高级烹饪”之父，卡雷姆是这些世界领袖和贵族的厨师','page?kid=1',258),
(2,'意大利菜','Joris Bijdendijk','img/cooker/c2.jpg','Joris有着许多奇思妙想，加入芝士的浓汤或许你已经喝过不少，但与水芹搭配而成的凉菜汤，却让人充满了好奇。香浓配料与新鲜扇贝的结合，一种新奇的味蕾体验油然而生','product_details.html?lid=19',112),
(3,'中国菜','Bo Innovation','img/cooker/c3.jpeg', '业内同行公认Alvin是亚洲最具创意的天才厨师,经典菜肴是分子小笼包','lookforward.html',139),
(4,'泰国菜','Angela May','img/cooker/c4.jpeg','来自新加坡Angela在成长过程中，遍尝美味的泰式料理和正宗的西方美食，造就融贯东西且适应性强的个人特点','lookforward.html',56);
CREATE TABLE `df_carousel` (
  `cid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL);

INSERT INTO `df_carousel` (`cid`, `img`, `title`, `href`) VALUES
(1, 'img/index/p1.jpg', '轮播广告商品1', 'product_details.html?lid=28'),
(2, 'img/index/p2.jpg', '轮播广告商品2', 'product_details.html?lid=19'),
(3, 'img/index/p3.jpg', '轮播广告商品3', 'lookforward.html'),
(4, 'img/index/p4.jpg', '轮播广告商品4', 'lookforward.html'),
(5, 'img/index/p5.jpg', '轮播广告商品5', 'lookforward.html'),
(6, 'img/index/p6.jpg', '轮播广告商品6', 'lookforward.html');

CREATE TABLE `df_food` (
  `fid` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL,
  `family` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `comment` int
);

INSERT INTO `df_food` (`fid`, `title`, `family`,`details`, `pic`, `price`, `href`,`comment`) VALUES
(1, '法国鹅肝','法国菜','法国鹅肝是鹅肝和无花果混合使用，后来这种吃法传到了阿尔萨斯和法国西部乡村，和法国面包搭配使用', 'img/food/f2.jpg', '6988.00', 'product_details.html?lid=1',233),
(2, '鱼子酱','法国菜','鱼子酱是盐渍的鳍鱼鱼卵，还有鲟鱼、鳟鱼等也可以用来做鱼子酱的材料，鲟鱼俄乌交界的黑海质量为最佳', 'img/food/f1.jpg', '3488.00', 'product_details.html?lid=5',165),
(3, '洋葱汤','意大利菜','洋葱汤覆盖了芝士的法棍面包搭配，吃着法棍面包，面包里透着洋葱汁的汤味，真是让人回味无穷', 'img/food/f3.jpg', '5399.00', 'product_details.html?lid=9',175),
(4, '法式烩土豆','法国菜','法式烩土豆是法国的特色菜，味道味道鲜美，软嫩适口', 'img/food/f4.jpg', '4966.00', 'product_details.html?lid=13',23),
(5, '冬荫功汤','泰国菜','东荫是泰国的一个地名。这道汤的口味十分浓重，非常典型地体现出了泰国菜的酸辣特色，主要的材料是大头虾和蘑菇', 'img/food/f5.jpg', '6299.00', 'product_details.html?lid=17',142),
(6, '辣的青木瓜沙拉','泰国菜','大蒜，辣椒，青豆，圣女果和切碎的生木瓜，拥有甜、酸、辣的味道,有清理肠道的功效', 'img/food/f6.jpg', '5199.00', 'product_details.html?lid=19',57),
(7, '汤豆腐','中国菜','汤豆腐只是用煮了昆布高汤的热锅将豆腐加热，然后淋上高汤酱油或橙汁醋酱油就可品尝的一道相当简单的食物，但这样纤细的风味，是素食主义的最爱', 'img/food/f7.jpg', '5799.00', 'product_details.html?lid=38',39);

CREATE TABLE `df_food_family` (
  `fid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `fname` varchar(32) DEFAULT NULL
);

INSERT INTO `df_food_family` (`fid`, `fname`) VALUES
(1, '法国菜'),
(2, '泰国菜'),
(3, '日本菜'),
(4, '意大利菜'),
(5, '中国菜');
CREATE TABLE `book` (
  `bid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `phone` varchar(32) NULL,
  `bdate` varchar(32) NULL,
  `pnumber` int(11)
);
CREATE TABLE `comment` (
  `rid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `fid` int(32) NULL,
  `rdate` varchar(128) NULL,
  `rphone` int(11),
  `rtext` varchar(256)
);