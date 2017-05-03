/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.globals.html
 *
 * Sails暴露给其Node进程的全局变量的配置。这些选项通常在config/globals.js配置文件中指定。
 *
 *
 */
module.exports.globals = {

  /****************************************************************************
  *                                                                           *
  * Expose the lodash installed in Sails core as a global variable. If this   *
  * is disabled, like any other node module you can always run npm install    *
  * lodash --save, then var _ = require('lodash') at the top of any file.     *
  *                                                                           *
  ****************************************************************************/

	//默认值:  _: true,
  // 将lodash安装在Sails内核中的全局变量作为全局变量。
  // 如果这被禁用，就像任何其他节点模块一样，您可以随时运行npm install lodash --save，然后var _ = require('lodash')在任何文件的顶部。

  /****************************************************************************
  *                                                                           *
  * Expose the async installed in Sails core as a global variable. If this is *
  * disabled, like any other node module you can always run npm install async *
  * --save, then var async = require('async') at the top of any file.         *
  *                                                                           *
  ****************************************************************************/

	//默认值: async: true,
  // 将async安装在Sails内核中的全局变量作为全局变量。
  // 如果这被禁用，就像任何其他节点模块一样，您可以随时运行npm install async --save，然后var async = require('async')在任何文件的顶部。

  /****************************************************************************
  *                                                                           *
  * Expose the sails instance representing your app. If this is disabled, you *
  * can still get access via req._sails.                                      *
  *                                                                           *
  ****************************************************************************/

	//默认值: sails: true,
  // sails露出表示您的应用程序的实例。如果这被禁用，您仍然可以通过访问req._sails。

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's services as global variables (using their       *
  * "globalId"). E.g. a service defined in api/models/NaturalLanguage.js      *
  * would have a globalId of NaturalLanguage by default. If this is disabled, *
  * you can still access your services via sails.services.*                   *
  *                                                                           *
  ****************************************************************************/

	//默认值: services: true,
  // 将每个应用程序的服务公开为全局变量（使用“globalId”）。
  // 例如，定义的服务api/services/NaturalLanguage.js将NaturalLanguage默认为globalId 。
  // 如果这被禁用，您仍然可以通过访问您的服务sails.services.*。

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's models as global variables (using their         *
  * "globalId"). E.g. a model defined in api/models/User.js would have a      *
  * globalId of User by default. If this is disabled, you can still access    *
  * your models via sails.models.*.                                           *
  *                                                                           *
  ****************************************************************************/

	//默认值: models: true
  // 将每个应用程序的模型都显示为全局变量（使用“globalId”）。
  // 例如，定义的模型api/models/User.js将User默认为globalId 。
  // 如果这被禁用，您仍然可以访问您的模型sails.models.*。
};
