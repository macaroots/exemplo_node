const mysql = require('mysql');

const FabricaMysql = function (options) {
	const pool = mysql.createPool(options);
    this.connect = function () {
		let p = new Promise((resolve, reject) => {
			pool.getConnection((err, con) => {
				if (err) {
					return reject(err);
				}
				resolve(con);
			});
		});
		return p;
	}
}
module.exports = FabricaMysql;
