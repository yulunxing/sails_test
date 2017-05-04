/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

/*
*
* 您的默认项目范围的模型设置。也可以在每个模型的基础上通过在该模型定义中提供相同名称的顶级属性来覆盖。
* 有关更多详细信息，请参阅模型设置中的概念文档。这些选项通常在config / models.js配置文件中指定。
* */

module.exports.models = {

  connection: 'someMysqlServer',
  migrate: 'safe',
  autoPK: false,// 当你在api/models的文件中,对某个字段设为primarykey: true 自增主键时,需要把autoPK 设为false
  autoCreatedAt: true,//设为true时,需要在每个表中增加一个字段: createdAt sails.js在插入数据时,自动添加插入时间
  autoUpdatedAt: true//设为true时,需要在每个表中增加一个字段: updatedAt sails.js修改数据时,自动添加修改时间

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  //默认值: connection: 'localDiskDb',
  // 任何给定模型将使用的默认数据库连接，而没有配置的覆盖

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  //默认值: migrate: 'alter'
  //Sails将如何尝试自动重建表/集合等。在你的架构

  /*
  * 模型属性是关于模型的基本信息。所谓的模型Person可能有属性叫firstName，lastName，phoneNumber，age，birthDate和emailAddress。
  *
  * */
  //默认值: attributes: {}
  // 关于模型的基本信息存储。请参阅属性。

  /*
   默认值: autoPK: true

  * 例子
  *
  attributes: {
   uuid: {
   type: 'string',
   primaryKey: true,
   required: true
   }
   }
  * */
  //使用此属性作为记录的主键。每个模型只能有一个属性primaryKey。注意：除非autoPK设置为false ，否则不应该使用它。

  //默认值: autoCreatedAt: true
  // 在模型中切换属性createdAt的自动定义

  //默认值: autoUpdatedAt: true
  // 在模型中切换属性updatedAt的自动定义

  //默认值: tableName: identity
  //用于指定模型的数据库表名

  //默认值: dynamicFinders: true
  //切换动态查找器的自动创建


};
