/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 *
 *
 * 适配器是您的Sails应用程序和某种存储（通常是数据库）之间的中间人，

 全局连接在connections.js位于项目目录中的文件中config配置。您还可以指定你的连接config/local.js或特定的环境配置文件。

 Sails适配器已经为各种流行的数据库（如MySQL，Postgres和Mongo）编写。您可以在此处找到支持的适配器列表。
 *
 *
 *
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.
   *
   *
   * 要使用sails-memory适配器（仅适用于开发），请先安装模块npm install sails-memory，然后在connections.js以下位置中定义：

   以下是适配器配置文件示例

   myApp/config/connections.js
   * *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /*
  * 如果要设置memory为模型的默认适配器，则可以这样做。 myApp/config/models.js
  * */
  /*
  *
  * module.exports.models = {

   connection: 'memory'
   };
  * */

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/
  /*
  * 适配器的多个连接
   您可以使用相同的适配器设置多个连接。例如，如果您有两个mysql数据库，则可以将其配置为：
  *
  * */
  /*
  *
  * module.exports.connections = {
   localMysql: {
   adapter: 'sails-mysql',
   user: 'root',
   host: 'localhost',
   database: 'someDbase'
   },
   remoteMysql: {
   adapter: 'sails-mysql',
   user: 'remoteUser',
   password: 'remotePassword',
   host: 'http://remote-mysql-host.com',
   database: 'remoteDbase'
   }
   };
  * */
  /*
  * 注意如果模型使用与适配器的任何连接，则将加载到该适配器的所有连接sails.lift，无论模型是否实际使用它们。
  * 在上面的例子中，如果模型被配置成使用所述localMysql连接，则两个localMysql和remoteMysql将试图在运行时进行连接。
  * 因此，良好的做法是根据环境将连接配置分开，并将其保存到适当的环境特定配置文件中，否则请注释您不想活动的任何连接。
  * */


};
