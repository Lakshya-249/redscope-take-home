import fs from "fs";

const directoryPath = "./resources/data_files";

// A fucntion to count the number of files existing in a the resources/data_files folder...
const filecount = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(files.length);
    });
  });
};

export default filecount;
