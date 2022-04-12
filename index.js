/* eslint-disable semi */
const strictEqual = (par1, par2) => {
  // eslint-disable-next-line eqeqeq
  if (par1 == par2) {
    // eslint-disable-next-line eqeqeq
    if (typeof par1 == typeof par2) {
      return true;
    }
  }

  return false;
};

module.exports = strictEqual;
