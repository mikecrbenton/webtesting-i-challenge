const enhancer = require('./enhancer.js');
// test away!

describe("testing enhancer.js", ()=> {


   test("repair method", ()=> {
      expect( enhancer.repair({
         name: "Mike Benton",
         durability: 20,
         enhancement: 20
      })).toEqual({
         name: "Mike Benton",
         durability: 100,
         enhancement: 20
      })
   })

   test("success method", ()=> {
      expect( enhancer.success({
         name: "Mike Benton",
         durability: 20,
         enhancement: 18
      })).toEqual({
         name: "Mike Benton",
         durability: 20,
         enhancement: 19
      })
   })

   test("fail method - enhancement under 15, durability under 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 4,
         enhancement: 12
      })).toEqual({
         name: "Mike Benton",
         durability: 0,
         enhancement: 12
      })
   })

   test("fail method - enhancement under 15, durability over 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 23,
         enhancement: 12
      })).toEqual({
         name: "Mike Benton",
         durability: 18,
         enhancement: 12
      })
   })

   test("fail method - enhancement equals 15, durability under 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 3,
         enhancement: 15
      })).toEqual({
         name: "Mike Benton",
         durability: 0,
         enhancement: 15
      })
   })

   test("fail method - enhancement equals 15, durability over 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 35,
         enhancement: 15
      })).toEqual({
         name: "Mike Benton",
         durability: 25,
         enhancement: 15
      })
   })

   test("fail method - enhancement over 15, durability under 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 3,
         enhancement: 16
      })).toEqual({
         name: "Mike Benton",
         durability: 0,
         enhancement: 15
      })
   })

   test("fail method - enhancement over 15, durability over 5", ()=> {
      expect( enhancer.fail({
         name: "Mike Benton",
         durability: 30,
         enhancement: 25
      })).toEqual({
         name: "Mike Benton",
         durability: 20,
         enhancement: 24
      })
   })

   test("get method - enhancement over 0 ", ()=> {
      expect( enhancer.get({
         name: "Mike Benton",
         durability: 30,
         enhancement: 25
      })).toEqual({
         name: "[+25] Mike Benton",
         durability: 30,
         enhancement: 25
      })
   })

   test("get method - enhancement equals 0 ", ()=> {
      expect( enhancer.get({
         name: "Mike Benton",
         durability: 30,
         enhancement: 0
      })).toEqual({
         name: "Mike Benton",
         durability: 30,
         enhancement: 0
      })
   })

}) // describe
