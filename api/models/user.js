/**
 * Created by Administrator on 2017/5/4.
 */
module.exports = {
  tableName: 'user',
  attributes: {
    id: {
      type: 'integer',
      required: true,
      primarykey: true
    },
    name: {
      type: 'String',
      required: true,
      maxLength: 255
    },
    email: {
      type: 'String',
      required: true,
      maxLength: 128
    },
    password: {
      type: 'String',
      required: true,
      maxLength: 128
    },
    class_id: {
      type: 'integer',
      required: true
    }
  }
};

