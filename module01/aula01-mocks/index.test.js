const File = require("./src/file")
const { error } = require("./src/constants")
const assert = require('assert') // https://www.w3schools.com/nodejs/ref_assert.asp

// IFEE (auto executable fuction)
;(async () => {

  // variables inside curly braces block are only valid during it execution
  {
    const filePath = "./mocks/emptyFile-invalid.csv"
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = "./mocks/invalid-header.csv"
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = "./mocks/fiveItems-invalid.csv"
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = "./mocks/threeItems-valid.csv"
    const expected = [
      {
        id: 1,
        name: "xuxa da silva",
        profession: "developer",
        age: 120
      },
      {
        id: 2,
        name: "joao da silva",
        profession: "developer",
        age: 30
      },
      {
        id: 3,
        name: "pedro da silva",
        profession: "analyst",
        age: 20
      },
    ]
    const result = await File.csvToJSON(filePath)
    assert.deepEqual(result, expected)
  }

})()
