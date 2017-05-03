/**
 * Internationalization / Localization Settings
 * (sails.config.i18n)
 *
 * If your app will touch people from all over the world, i18n (or internationalization)
 * may be an important part of your international strategy.
 *
 *
 * For more informationom i18n in Sails, check out:
 * http://sailsjs.org/#!/documentation/concepts/Internationalization
 *
 * For a complete list of i18n options, see:
 * https://github.com/mashpie/i18n-node#list-of-configuration-options
 *
 * Sails的内置国际化和本地化功能的配置。有关更多信息，请参阅国际化概念部分。
 * 详细说明: https://github.com/linxiaowu66/sails-docs-zh-cn/blob/master/concepts/Internationalization/Locales.md
 */

module.exports.i18n = {

  /***************************************************************************
  *                                                                          *
  * Which locales are supported?                                             *
  *                                                                          *
  ***************************************************************************/

  //默认值: locales: ['en', 'es', 'fr', 'de'],
  // 支持的区域代码列表

  /****************************************************************************
  *                                                                           *
  * What is the default locale for the site? Note that this setting will be   *
  * overridden for any request that sends an "Accept-Language" header (i.e.   *
  * most browsers), but it's still useful if you need to localize the         *
  * response for requests made by non-browser clients (e.g. cURL).            *
  *                                                                           *
  ****************************************************************************/

  //默认值: defaultLocale: 'en',
  // 网站的默认区域设置。
  // 请注意，对于发送“接受语言”标题（即大多数浏览器）的任何请求，此设置将被覆盖，
  // 但如果需要本地化非浏览器客户端（例如cURL）的请求的响应，则此设置仍然有用。

  /****************************************************************************
  *                                                                           *
  * Automatically add new keys to locale (translation) files when they are    *
  * encountered during a request?                                             *
  *                                                                           *
  ****************************************************************************/

  //默认值: updateFiles: false,
  //是否在请求期间遇到文件时自动将新的密钥添加到语言环境（翻译）文件中

  /****************************************************************************
  *                                                                           *
  * Path (relative to app root) of directory to store locale (translation)    *
  * files in.                                                                 *
  *                                                                           *
  ****************************************************************************/

  //默认值:  localesDirectory: '/config/locales'
  // 与包含您的区域翻译（即stringfiles）的文件夹的项目相对路径

};
