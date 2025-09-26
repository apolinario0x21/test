const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/invalid-header.csv";
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        name: "admin",
        id: 1,
        profession: "admin",
        birthDay: 2005,
      },
      {
        name: "user",
        id: 2,
        profession: "user",
        birthDay: 2000,
      },
      {
        name: "tester",
        id: 3,
        profession: "tester",
        birthDay: 1995,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
