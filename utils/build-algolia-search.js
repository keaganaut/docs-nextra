const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const fs = require("fs");
const matter = require("gray-matter");
const { cwd } = require("process");
const globby = require("globby");

try {
  dotenv.config();

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  }

  if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

const CONTENT_PATH = "./pages";

const pages = await globby([CONTENT_PATH]);

// const contentFilePaths = function (dirPath, arrayOfFiles) {
//   files = fs.readdirSync(dirPath);
//   arrayOfFiles = arrayOfFiles || [];

//   files.forEach(function (file) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = contentFilePaths(dirPath + "/" + file, arrayOfFiles);
//     } else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
//     }
//   });

//   //   const foo = arrayOfFiles.filter((path) => /\.mdx$/.test(path));
//   //   //   return arrayOfFiles.filter((path) => /\.mdx$/.test(path));

//   //   const articles = foo.map((filePath) => {
//   //     console.log(filePath);
//   //     const source = fs.readFileSync(filePath);
//   //   });
//   //   return articles;
//   return arrayOfFiles.filter((path) => /\.mdx$/.test(path));
// };

// console.log(contentFilePaths(CONTENT_PATH));

// // const allFiles = glob(targetDir + "/**/*.mdx", (err, files) => {
// //   if (err) {
// //     console.log("Error", err);
// //   }
// // });

// // const getAll = function () {
// //   return allFiles.map((filePath) => {
// //     const source = fs.readFileSync(filePath);
// //     return source;
// //   });
// // };

// // console.log(allFiles);
// // function getFiles(err, res) {
// //   if (err) {
// //     console.log("Error", err);
// //   } else {
// //     return res;
// //   }
// // }

// // const files = glob(targetDir + "/**/*.mdx", getFiles);

// // console.log(files.minimatch.se);
