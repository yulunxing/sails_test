/**
 * Created by Administrator on 2017/5/4.
 */
module.exports = {
  tableName: 'classes',
  attributes: {
    id: {
      type: 'integer',
      required: true,
      primaryKey: true
    },
    name: {
      type: 'string',
      required: true
    }
  }
};


