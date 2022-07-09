import request from "supertest";
// import fs from "fs";

import app from "../src/app";

// const testImage = fs.readFileSync(`${__dirname}/../uploads/screenshot.png`);
const imagePath = `${__dirname}/../uploads/screenshot.png`;
let image_id = "";

describe("Image-uploader-service", () => {
  it("Should upload image and return image_id", async () => {
    let response = await request(app).post("/images").set("content-type", "multipart/form-data").attach("image", imagePath);
    image_id = response.body.image_id;
    expect(response.status).toBe(200);
    expect(response.body.image_id).toBeDefined();
  });

  it("Should download image", async () => {
    let response = await request(app).get(`/images/${image_id}.jpg`);
    expect(response.status).toBe(200);
  });

  it("Should download image in .png format", async () => {
    let response = await request(app).get(`/images/${image_id}.png`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toEqual("image/png");
  });

  it("Should download image in .jpeg format", async () => {
    let response = await request(app).get(`/images/${image_id}.jpeg`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toEqual("image/jpeg");
  });

  it("Should download image in .gif format", async () => {
    let response = await request(app).get(`/images/${image_id}.gif`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toEqual("image/gif");
  });
});
