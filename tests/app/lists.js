/*jshint expr:true*/
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    'app/lists'
], function(sumLists) {
    describe('List Sum', function(){
        it('[10,20,30,40] should return 100', function() {
            var val = sumLists([10,20,30,40]);
            expect(val).to.eql(100);
        });

        it('[a,b,c] should return abc', function() {
            var val = sumLists(['a','b','c']);
            expect(val).to.eql('abc');
        });

    });
});