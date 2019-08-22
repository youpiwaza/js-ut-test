const {
	dest,
	parallel,
	series,
	src,
	task,
	watch
} = require('gulp'),
	colors = require('ansi-colors'),
	fancyLog = require('fancy-log'),
	//                              wtf ? wtv
	// jest = require('gulp-jest').default,
	jestcli = require('jest-cli')
// gulpjestcli   = require('gulp-jest-cli')
;



// ~KO / Execute l'ensemble des tests une fois par fichier..
// https://www.npmjs.com/package/gulp-jester

// console.log(jest);
// jest.default();

// task('ut-jest', function () {
//   return src('src/**/*.test.js')
//     .pipe( jest({
//         testPathIgnorePatterns: [
//             "node_modules"
//         ],
//         moduleFileExtensions: [
//             "js"
//         ]
//     }));
// });
// task('default', parallel('ut-jest'));

// OK
// http://tech-heap.blogspot.com/2018/03/jest-using-gulp-with-code-coverage.html
task('ut-jest2', () =>
	jestcli.runCLI(
    {
			config: {} // cf. jest.config.js
		},
		'.'
		// (done) => {
		// 	done();
		// }
	)
);

task('default', parallel('ut-jest2'));


// KO AF
// https://www.npmjs.com/package/gulp-jest-cli
// task('ut-jest3', () =>
//   /*
//    * Jest's `rootDir` will be set to the directory specified in `gulp.src`
//    * unless a `rootDir` is explicitly configured via configuration options
//    */
//   src('src')
//     .pipe(
//       gulpjestcli(
//         {
//           /* Configuration options */
//           config: {
//             coverageReporters: [
//               'text',
//               'text-summary',
//               'json',
//               'lcov',
//             ],
//             collectCoverageFrom: [
//               '**/*.js',
//               '!**/*test*',
//             ]
//           },
//         /* CLI options*/
//         coverage: true,
//         onlyChanged: true
//       },
//       )
//     )
// );
//
// task('default', parallel('ut-jest3'));
