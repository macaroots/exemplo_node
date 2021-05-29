import assert from 'assert';
describe('Agenda', function () {
  describe('insert()', function () {
    it('should insert and callback the id', function (done) {
		agenda.insert({nome: 'Ana'}).then(function (id) {
			assert.equal(id, 1);
			done();
		});
    });
    it('should callback a list', async function () {
		agenda.list().then(function (lista) {
			assert.equal(lista.length, 1);
			done();
		});
    });
  });
});
