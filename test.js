

// const date = "2020-10-10"
// const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

//  if (date || datePattern.test(date)) {
//     console.log("Exist , Conform");
//  }


const response = 
[{
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 123,
         "_id": "61f1a3a58a2dfd0f31763ea5",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "1st commit",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 120,
         "_id": "61f1ba543b11f43a73ac06cc",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "fromage",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 120,
         "_id": "61f1ba983b11f43a73ac06cf",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "chaton",
         "__v": 0
      },
      {
         "date": "2018-05-18T00:00:00.000Z",
         "duration": 120,
         "_id": "61f1bb2e3b11f43a73ac06db",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "chaton",
         "__v": 0
      },
      {
         "date": "2019-05-18T00:00:00.000Z",
         "duration": 120,
         "_id": "61f1bb313b11f43a73ac06de",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "chaton",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 10,
         "_id": "61f1d716e78eb307a4424c8e",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "correct error",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 12,
         "_id": "61f1d76a95cec607fedb8c1e",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "first  commit",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 3,
         "_id": "61f1d8d49e34cc090b4c059c",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "Test final",
         "__v": 0
      },
      {
         "date": "2022-01-26T00:00:00.000Z",
         "duration": 123,
         "_id": "61f1dae7b1476c0954bc3afb",
         "username": "Daniel",
         "userId": "61f1a3868a2dfd0f31763ea2",
         "description": "rr\"r\"r",
         "__v": 0
      }
   ]

   const dateFormatedResponse = response.map(item => {
      return {
         ...item,
         date: new Date(item.date).toDateString()
      }
   })

   console.log(dateFormatedResponse)