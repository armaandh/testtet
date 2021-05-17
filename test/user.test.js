const { prisma, app } = require("../app");
const request = require("supertest");

// beforeAll((done) => {
//   done();
// });

// afterAll(async (done) => {
//   await prisma.user.deleteMany();
//   await prisma.$disconnect();
//   app.close();
//   done();
// });

// const user1 = {
//   name: "user1",
//   email: "user1@gmail.com",
// };

// const user2 = {
//   name: "user2",
//   email: "user2@gmail.com",
// };

// const users = [user1, user2];

function addTwoPlusTwo() {
  // this should fail
  // this shouldn't be merged 2 + 50
  return 2 + 50;
}

function multiplyTwoNum(num1, num2) {
  return num1 * num2;
}

it("prints 4 when adding 2 + 2", () => {
  const result = addTwoPlusTwo();
  expect(result).toEqual(4);
});

it("prints 56 when multiplying 8 * 7", () => {
  const result = multiplyTwoNum(8, 7);
  expect(result).toEqual(56);
});

// ===================== Get All Users From DB Test==========================

// it("returns all users with empty array", async () => {
//   await request(app)
//     .get("/users")
//     .expect((response) => {
//       expect(response.body).toEqual([]);
//     });
// });

// it("returns all users", async () => {
//   await request(app)
//     .post("/users")
//     .send(user1)
//     .set("Accept", "application/json");

//   await request(app)
//     .post("/users")
//     .send(user2)
//     .set("Accept", "application/json");

//   await request(app)
//     .get("/users")
//     .expect((response) => {
//       // expect(response.body).toEqual(users);
//       expect(response.body).toMatchObject(users);
//     });
// });

// ===================== Create A User In The DB Test ==========================

/*
it("creates a user", async () => {
  const response = await request(app)
    .post("/users")
    .send(user1)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);

  expect(response.body.id).toBeDefined();
});
*/

// ===================== Reject A User That Already Exists Test==========================

/*
it("rejects a user with the same email", async () => {
  const expectedResponse = { Error: "User already exist" };
  await request(app)
    .post("/users")
    .send(user1)
    .set("Accept", "application/json");

  const response = await request(app)
    .post("/users")
    .send(user1)
    .set("Accept", "application/json");

  expect(response.body).toEqual(expectedResponse);
});
*/
