suite('"About" Page Tests',function(){
    test('page shoud contain link to contact page',function(){
        assert($('a[href="/contact"]').length)
    })
})