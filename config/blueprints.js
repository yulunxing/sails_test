/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * These settings are for the global configuration of blueprint routes and
 * request options (which impact the behavior of blueprint actions).
 *
 * You may also override any of these settings on a per-controller basis
 * by defining a '_config' key in your controller defintion, and assigning it
 * a configuration object with overrides for the settings in this file.
 * A lot of the configuration options below affect so-called "CRUD methods",
 * or your controllers' `find`, `create`, `update`, and `destroy` actions.
 *
 * It's important to realize that, even if you haven't defined these yourself, as long as
 * a model exists with the same name as the controller, Sails will respond with built-in CRUD
 * logic in the form of a JSON API, including support for sort, pagination, and filtering.
 *
 * For more information on the blueprint API, check out:
 * http://sailsjs.org/#!/documentation/reference/blueprint-api
 *
 * For more information on the settings in this file, see:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.blueprints.html
 *
 */

module.exports.blueprints = {

  /***************************************************************************
   *                                                                          *
   * Action routes speed up the backend development workflow by               *
   * eliminating the need to manually bind routes. When enabled, GET, POST,   *
   * PUT, and DELETE routes will be generated for every one of a controller's *
   * actions.                                                                 *
   *                                                                          *
   * If an `index` action exists, additional naked routes will be created for *
   * it. Finally, all `actions` blueprints support an optional path           *
   * parameter, `id`, for convenience.                                        *
   *                                                                          *
   * `actions` are enabled by default, and can be OK for production--         *
   * however, if you'd like to continue to use controller/action autorouting  *
   * in a production deployment, you must take great care not to              *
   * inadvertently expose unsafe/unintentional controller logic to GET        *
   * requests.                                                                *
   *                                                                          *
   ***************************************************************************/

  //默认值:  actions: true,
  // 是否自动为控制器中的每个操作生成路由（也映射index到/:controller）'/：controller'，'/：controller / index'和'/：controller /：action'

  /***************************************************************************
   *                                                                          *
   * RESTful routes (`sails.config.blueprints.rest`)                          *
   *                                                                          *
   * REST blueprints are the automatically generated routes Sails uses to     *
   * expose a conventional REST API on top of a controller's `find`,          *
   * `create`, `update`, and `destroy` actions.                               *
   *                                                                          *
   * For example, a BoatController with `rest` enabled generates the          *
   * following routes:                                                        *
   * :::::::::::::::::::::::::::::::::::::::::::::::::::::::                  *
   *  GET /boat -> BoatController.find                                        *
   *  GET /boat/:id -> BoatController.findOne                                 *
   *  POST /boat -> BoatController.create                                     *
   *  PUT /boat/:id -> BoatController.update                                  *
   *  DELETE /boat/:id -> BoatController.destroy                              *
   *                                                                          *
   * `rest` blueprint routes are enabled by default, and are suitable for use *
   * in a production scenario, as long you take standard security precautions *
   * (combine w/ policies, etc.)                                              *
   *                                                                          *
   ***************************************************************************/

  //默认值: rest: true,
  // 启用自动REST蓝图？例如'get /:controller/:id?' 'post /:controller' 'put /:controller/:id' 'delete /:controller/:id'

  /***************************************************************************
   *                                                                          *
   * Shortcut routes are simple helpers to provide access to a                *
   * controller's CRUD methods from your browser's URL bar. When enabled,     *
   * GET, POST, PUT, and DELETE routes will be generated for the              *
   * controller's`find`, `create`, `update`, and `destroy` actions.           *
   *                                                                          *
   * `shortcuts` are enabled by default, but should be disabled in            *
   * production.                                                              *
   *                                                                          *
   ***************************************************************************/

  //默认值: shortcuts: true,
  // 这些CRUD快捷方式在开发过程中方便起见存在，但你要在生产中禁用它们：'/:controller/find/:id?'，'/:controller/create'，'/:controller/update/:id'，和'/:controller/destroy/:id'

  /***************************************************************************
   *                                                                          *
   * An optional mount path for all blueprint routes on a controller,         *
   * including `rest`, `actions`, and `shortcuts`. This allows you to take    *
   * advantage of blueprint routing, even if you need to namespace your API   *
   * methods.                                                                 *
   *                                                                          *
   * (NOTE: This only applies to blueprint autoroutes, not manual routes from *
   * `sails.config.routes`)                                                   *
   *                                                                          *
   ***************************************************************************/

  //默认值: prefix: '',
  // 蓝图的可选挂载路径前缀（控制器中自动绑定的路由），例如'/ api / v2'

  /***************************************************************************
   *                                                                          *
   * An optional mount path for all REST blueprint routes on a controller.    *
   * And it do not include `actions` and `shortcuts` routes.                  *
   * This allows you to take advantage of REST blueprint routing,             *
   * even if you need to namespace your RESTful API methods                   *
   *                                                                          *
   ***************************************************************************/

  //默认值: restPrefix: '',
  // RESTful蓝图的可选挂载路径前缀（控制器和模型的自动绑定RESTful路由），例如'/ api / v2'。将加入你的prefix配置。如prefix: '/api'和restPrefix: '/rest'，REST风格的行动将是下可用/api/rest

  /***************************************************************************
   *                                                                          *
   * Whether to pluralize controller names in blueprint routes.               *
   *                                                                          *
   * (NOTE: This only applies to blueprint autoroutes, not manual routes from *
   * `sails.config.routes`)                                                   *
   *                                                                          *
   * For example, REST blueprints for `FooController` with `pluralize`        *
   * enabled:                                                                 *
   * GET /foos/:id?                                                           *
   * POST /foos                                                               *
   * PUT /foos/:id?                                                           *
   * DELETE /foos/:id?                                                        *
   *                                                                          *
   ***************************************************************************/

  //默认值: pluralize: false,
  // 有选择地使用在蓝图途径，例如多控制器名称/users为api/controllers/UserController.js。

  /***************************************************************************
   *                                                                          *
   * Whether the blueprint controllers should populate model fetches with     *
   * data from other models which are linked by associations                  *
   *                                                                          *
   * If you have a lot of data in one-to-many associations, leaving this on   *
   * may result in very heavy api calls                                       *
   *                                                                          *
   ***************************************************************************/

  //默认值:  populate: true,
  // 蓝图控制器是否应该使用由关联链接的其他模型的数据填充模型提取。如果您在一对多关联中拥有大量数据，则可能会导致非常重的api呼叫。

  /****************************************************************************
   *                                                                           *
   * Whether to run Model.watch() in the find and findOne blueprint actions.   *
   * Can be overridden on a per-model basis.                                   *
   *                                                                           *
   ****************************************************************************/

  // autoWatch: true,
  // 无论是运行Model.watch()在find和findOne蓝图行动。可以在每个模型的基础上被覆盖。

  /****************************************************************************
   *                                                                           *
   * The default number of records to show in the response from a "find"       *
   * action. Doubles as the default size of populated arrays if populate is    *
   * true.                                                                     *
   *                                                                           *
   ****************************************************************************/

  //默认值: defaultLimit: 30
  // 在“查找”操作的响应中显示的默认记录数。作为填充数组的默认大小，如果populate是true。

  //默认值: jsonp: false
  // 可以使用res.jsonp()Express 3 在JSONP回调中包装蓝图JSON响应。

};
