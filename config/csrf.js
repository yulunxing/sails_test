/**
 * Cross-Site Request Forgery Protection Settings
 * (sails.config.csrf)
 *
 * CSRF tokens are like a tracking chip.  While a session tells the server that a user
 * "is who they say they are", a csrf token tells the server "you are where you say you are".
 *
 * When enabled, all non-GET requests to the Sails server must be accompanied by
 * a special token, identified as the '_csrf' parameter.
 *
 * This option protects your Sails app against cross-site request forgery (or CSRF) attacks.
 * A would-be attacker needs not only a user's session cookie, but also this timestamped,
 * secret CSRF token, which is refreshed/granted when the user visits a URL on your app's domain.
 *
 * This allows us to have certainty that our users' requests haven't been hijacked,
 * and that the requests they're making are intentional and legitimate.
 *
 * This token has a short-lived expiration timeline, and must be acquired by either:
 *
 * (a)		For traditional view-driven web apps:
 *			Fetching it from one of your views, where it may be accessed as
 *			a local variable, e.g.:
 *			<form>
 *				<input type="hidden" name="_csrf" value="<%= _csrf %>" />
 *			</form>
 *
 * or (b)	For AJAX/Socket-heavy and/or single-page apps:
 *			Sending a GET request to the `/csrfToken` route, where it will be returned
 *			as JSON, e.g.:
 *			{ _csrf: 'ajg4JD(JGdajhLJALHDa' }
 *
 *
 * Enabling this option requires managing the token in your front-end app.
 * For traditional web apps, it's as easy as passing the data from a view into a form action.
 * In AJAX/Socket-heavy apps, just send a GET request to the /csrfToken route to get a valid token.
 *
 * For more information on CSRF, check out:
 * http://en.wikipedia.org/wiki/Cross-site_request_forgery
 *
 * For more information on this configuration file, including info on CSRF + CORS, see:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.csrf.html
 *
 *
 Sails内置CSRF保护中间件的配置。这些选项通常在config/csrf.js配置文件中设置。有关详细的使用说明，请参阅安全性部分中的跨站点请求伪造文档。
 此选项可保护您的Sails应用免受跨站点请求伪造（或CSRF）攻击。
 一个潜在的攻击者不仅需要一个用户的会话cookie，而且还需要这个时间戳的秘密CSRF令牌，当用户访问您应用的域上的URL时，该密钥被刷新/授予。
 这样就可以确定你的用户的请求没有被劫持，而且他们的请求是有意的和合法的。
 *
 *
 */

/****************************************************************************
*                                                                           *
* Enabled CSRF protection for your site?                                    *
*                                                                           *
****************************************************************************/

//默认值: module.exports.csrf = false;
// 默认情况下，CSRF保护被禁用，以促进开发。
// 要打开它，只要设置sails.config.csrf为true，或者为了更大的灵活性，可以使用下面描述的任何属性来指定字典。

/****************************************************************************
*                                                                           *
* You may also specify more fine-grained settings for CSRF, including the   *
* domains which are allowed to request the CSRF token via AJAX. These       *
* settings override the general CORS settings in your config/cors.js file.  *
*                                                                           *
****************************************************************************/
// 默认值: grantTokenViaAjax: true,
// 是否激活/ csrfToken路由，这将返回当前的CSRF令牌值，然后可以在AJAX请求中使用。
// 默认值: origin: ''
// 以逗号分隔的起始列表，可以通过/ csrfToken影子路线访问CSRF令牌。
// 这是从其他独立CORS设置，这并不适用于/ csrfToken路线。
// module.exports.csrf = {
//    grantTokenViaAjax: true,
//    origin: ''
// }

//默认值: csrf.routesDisabled:""
// 禁用CSRF保护的路由数组或以逗号分隔的路由列表。
// 可以使用带有Express式通配符（例如'/foo/:id'）和正则表达式（例如 /user\/\d+/）的路由。
// 不要不包括HTTP动词（如POST或PUT与路线） -禁用CSRF的路线始终适用于该路由的地址的所有动词。
