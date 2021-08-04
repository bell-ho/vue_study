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
    productList2: {
        query:
            'SELECT\n' +
            '\tt3.* ,\n' +
            '\tt4.path\n' +
            'FROM\n' +
            '\t(\n' +
            '\tSELECT\n' +
            '\t\tt1.* , t2.category1 , t2.category2 , t2.category3\n' +
            '\tFROM\n' +
            '\t\tt_product t1 , t_category t2\n' +
            '\tWHERE\n' +
            '\t\tt1.category_id = t2.id) t3\n' +
            'LEFT JOIN (\n' +
            '\tSELECT\n' +
            '\t\t*\n' +
            '\tFROM\n' +
            '\t\tt_image ti\n' +
            '\tWHERE\n' +
            '\t\ttype = 1) t4 \n' +
            'ON\n' +
            '\tt3.id = t4.product_id'
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
        /*'INSERT INTO t_product (product_name , product_price , delivery_price , add_delivery_price , tags , outbound_days , seller_id , category_id) ' +
        'values(?,?,?,?,?,?,?,?)'*/

        // 객체 하나를 통으로 받음
            `INSERT INTO t_product
             set ?`
    },
    productImageInsert: {
        query:
            'insert into t_image (product_id , type , path) ' +
            'values(?,?,?)'
    },
    sellerList: {
        query: 'select * from t_seller'
    },
    signUp: {
        query: `insert into t_user
                set ?
                on duplicate key
        update ?`
    },
    productDelete: {
        query:
            'delete ' +
            'from t_product where id = ?'
    },
    categoryList:{
        query:
        `select *
         from t_category;
         `
    }
}
