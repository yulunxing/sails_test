/**
 * Created by Administrator on 2017/5/4.
 */
module.exports = {
  tableName: 'users',
  attributes: {
    id: {
      type: 'integer',
      required: true,
      primarykey: true
    },
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    class_id: {
      type: 'integer',
      required: true
    }
  }
};

