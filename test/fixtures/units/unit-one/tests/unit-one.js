casper.test.begin('Visual regression test for the unit-one unit.', function(test) {

  casper.loadPath('units/unit-one')

  .loadFixture('unit-one')

  .then(function () {
    phantomcss.screenshot('.unit-one', 'unit-one unit');
  })

  .run(function () {
    test.done();
  });

});
