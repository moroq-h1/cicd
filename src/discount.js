function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Invalid discount percentage");
  }

  return total * (1 - percent / 100);
}

module.exports = {
  applyDiscount
};