import express  from "express";
let router = express.Router();

let userDataList = [
  {
      userName: "Mohamed Ali",
      weight: 380,
      date: "2022-03-01"
  },
  
  {
      userName: "Mohamed Ali",
      weight: 355,
      date: "2022-05-25"
  },
  
  {
      userName: "Mohamed Ali",
      weight: 350,
      date: "2022-06-1"
  },
  {
      userName: "Mohamed Ali",
      weight: 345,
      date: "2022-06-7"
  },
  {
      userName: "Mohamed Ali",
      weight: 340,
      date: "2022-06-14"
  },
  {
      userName: "Mohamed Ali",
      weight: 335,
      date: "2022-06-21"
  }
];

/* GET ALL USER DATA */

router.get('/', function(req, res) {
  res.json(userDataList);
});

/* ADD USER DATA */

router.post('/', function(req, res) {
    
  });

/* UPDATE USER DATA */

router.put('/', function(req, res) {
    
});

/* DELETE USER DATA */

router.delete('/', function(req, res) {
    
});
  
export default router;


