/*
Navicat MySQL Data Transfer

Source Server         : jk
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : maizuo

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2020-04-11 18:43:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'zs', '123456');
INSERT INTO `users` VALUES ('2', 'admin', 'admin');
INSERT INTO `users` VALUES ('3', 'laowang', '123456');
INSERT INTO `users` VALUES ('4', 'lw', '12345');
INSERT INTO `users` VALUES ('5', 'lwsa', '12356');
INSERT INTO `users` VALUES ('6', 'laozhang', 'laozhang');
INSERT INTO `users` VALUES ('7', 'laowan', '123456');
INSERT INTO `users` VALUES ('8', 'laoxie', '123456');
