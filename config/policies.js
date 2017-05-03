/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
	// RabbitController: {

		// Apply the `false` policy as the default for all of RabbitController's actions
		// (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
		// '*': false,

		// For the action `nurture`, apply the 'isRabbitMother' policy
		// (this overrides `false` above)
		// nurture	: 'isRabbitMother',

		// Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
		// before letting any users feed our rabbits
		// feed : ['isNiceToAnimals', 'hasRabbitFood']
	// }
};

/*
* 策略就像任何其他用于认证控制的系统。您可以通过策略允许或拒绝以细粒度访问。
* 描述
* 您的应用程序的ACL（访问控制列表）位于config / policies.js中。
*
* */
/*
* 例子
*
* // 默认所有行为需要登录
 // 若某些行为不需要，则在下面声明
 '*': 'isAuthenticated',

 // 验证逻辑都不需要登录
 // 用户创建后不再允许注册
 AuthController: {
 '*': true,
 toRegister: 'userNotCreated'
 },

 // 文章显示逻辑不需要登录
 ArticleController: {
 index: 'userCreated',
 show: 'userCreated'
 },

 CategoryController: {
 getArticles: true
 },

 TagsController: {
 getArticles: true
 }
*
* */
