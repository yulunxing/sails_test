/**
 * Created by Administrator on 2017/5/3.
 */
/*
* 测试
* */
module.exports = {
  /*
  * 显示测试页面
  * */
  index : function(req, res) {
    /*return res.view('temp/index');*/

    console.log('aassbb22');

    User.find({name: 'hank'}).exec(function(err, userinfo){
      if(err){
        res.notFound();
      } else {
        console.log('mysql');
        console.log(JSON.stringify(userinfo));
        return res.view('temp/index');
      }
    });
  }
};
