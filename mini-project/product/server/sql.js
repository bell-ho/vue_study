module.exports = {
  productList: {
    query:
      'SELECT\n' +
      '\tt1.* ,\n' +
      '\tt2.`path` ,\n' +
      '\tt3.category1 ,\n' +
      '\tt3.category2 ,\n' +
      '\tt3.category3\n' +
      'from\n' +
      '\tt_product t1 ,\n' +
      '\tt_image t2 ,\n' +
      '\tt_category t3\n' +
      'where\n' +
      '\tt1.id = t2.product_id\n' +
      '\tand t2.`type` = 1\n' +
      '\tand t1.category_id = t3.id'
  },
  productDetail: {
    query:
      'SELECT\n' +
      '\tt1.* ,\n' +
      '\tt2.`path` ,\n' +
      '\tt3.category1 ,\n' +
      '\tt3.category2 ,\n' +
      '\tt3.category3\n' +
      'FROM\n' +
      '\tt_product t1 ,\n' +
      '\tt_image t2 ,\n' +
      '\tt_category t3\n' +
      'WHERE\n' +
      '\tt1.id = ?\n' +
      '\tAND t1.id = t2.product_id\n' +
      '\tAND t2.`type` = 3\n' +
      '\tAND t1.category_id = t3.id'
  },
  productMainImages: {
    query:
      'SELECT\n' +
      '\t*\n' +
      'FROM\n' +
      '\tt_image ti\n' +
      'WHERE\n' +
      '\tproduct_id = ?\n' +
      '\tAND ti.`type` = 2'
  },
  productInsert: {
    query:
      'INSERT INTO t_product (product_name , product_price , delivery_price , add_delivery_price , tags , outbound_days , seller_id , category_id) ' +
      'values(?,?,?,?,?,?,?,?)'
  },
  productImageInsert: {
    query:
      'insert into t_image (product_id , type , path) ' +
      'values(?,?,?)'
  },
  sellerList: {
    query: 'select * from t_seller'
  }
}
