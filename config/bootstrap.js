/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 *
 这是什么？

 ＃
 sails.config.bootstrap 是一个可定制的异步引导功能，在您的Sails应用程序提升之前运行（即启动）。

 引导可以用于各种各样的东西，但这里有一些特别常见的用例：

 设置基准数据
 例如查找或创建管理员用户
 对数据库的状态进行健全性检查
 例如记录没有手指的手记录。如果发现有任何问题，则拒绝提起数据库，直到数据库被修复）
 使用存根数据种植您的数据库
 例如创建和关联一些假的“诊所”，“宠物”和“兽医”记录，以便更容易地测试您的动物收养应用程序）
 *
 *
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};

/*
* 应用例子
* 记住：由于引导是一个异步函数，所以在完成后触发此回调方法非常重要！（否则，您的服务器将永远不会提升，最终只会超时，因为它正在等待引导）
*
module.exports.bootstrap = function (done) {

 // Don't seed fake data when running in production.
 if (process.env.NODE_ENV === 'production') {
 return done();
 }

 //--•
 // Check to see if we already have a fake clinic in the database.
 Clinic.count({
 slug: 'lost-snakes'
 }).exec(function (err, existingFakeClinics) {
 if (err) { return done(err); }

 if (existingFakeClinics.length >= 2) {
 return done(new Error('Consistency violation: Database is in invalid state: There should never be more than one fake clinic!'));
 }

 if (existingFakeClinics.length === 1) {
 // If the clinic already exists, then we're done.
 // That means we must have already run the bootstrap and seeded the fake data.
 return done();
 }

 // --•
 // But otherwise, we'll seed some fake data.
 Clinic.create({
 friendlyName: 'Lost Snakes Clinic',
 slug: 'lost-snakes',
 address: '158 Lost Snakes Blvd\nAustin, TX  78759'
 }).exec(function (err){
 if (err) { return done(err); }

 // ...etc...
 return done();

 });//</Clinic.create()>
 });//</Clinic.count()>

 };
*
* */
