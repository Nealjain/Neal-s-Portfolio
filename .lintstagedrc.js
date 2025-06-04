const path = require('path');

<<<<<<< HEAD
const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
=======
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
>>>>>>> 66fd0888dc65591b42090e4efd57ac33b3c89493
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,postcss}': 'stylelint --fix',
  '*.styled.{js,jsx}': 'stylelint --fix',
};
