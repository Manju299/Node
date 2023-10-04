const { readFile, writeFile } = require("fs");

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./Content/result-Asynch.txt",
      `Here is the restult:${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(result);
      }
    );
  });
});
