var express = require('express');
var router = express.Router();

var books = [];
var id = 1;

router.get('/',function(req,res,next){
    res.send(books);
});


router.post('/',function(req,res,next){
    var book = req.body;
    book.id = id;

    books.push(req.body);
    id += 1;
    res.sendStatus(200);

});

router.put('/:id',function(req,res,next){
    var index = books.findIndex(function(book){
        return book.id == req.params.id;
    });
    books.splice(index,1,req.body);
    res.sendStatus(200);
});

router.delete('/:id',function(req,res,next){
    var index = books.findIndex(function(book){
        return book.id == req.params.id;
    });
    books.splice(index,1);
    res.sendStatus(200);
});

module.exports = router;