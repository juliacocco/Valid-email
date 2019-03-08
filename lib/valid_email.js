const valid = (email) => {
  if (email.match(/.+@.+\.\w{2,3}/)) {
    return true;
  }
  return false;
};

module.exports = valid; // Do not remove.
