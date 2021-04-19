const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Concert = require("../../../models/concert.model");

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;
describe("GET /api/concerts", () => {
  beforeEach(async () => {
    const testConOne = new Concert({
      _id: "5d9f1140f10a81216cfd4408",
      day: 1,
      performer: "John Mayer",
      genre: "Pop",
      price: "28",
      image: "test.jpg",
    });
    await testConOne.save();

    const testConTwo = new Concert({
      _id: "5d9f1159f81ce8d1ef2bee48",
      day: 1,
      performer: "Jennifer Dias",
      genre: "Rock",
      price: "38",
      image: "test.jpg",
    });
    await testConTwo.save();
  });

  afterEach(async () => {
    await Concert.deleteMany();
  });
  it("/should return all concerts", async () => {
    const res = await request(server).get("/api/concerts");
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.be.equal(2);
  });

  it("/:id should return one Concert by :id ", async () => {
    const res = await request(server).get(
      "/api/Concerts/5d9f1140f10a81216cfd4408"
    );
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body).to.not.be.null;
  });

  it("/random should return one random Concert", async () => {
    const res = await request(server).get("/api/Concerts/random");
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body).to.not.be.null;
  });
});
