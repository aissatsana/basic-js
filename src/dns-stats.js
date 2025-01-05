const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 * делаем для каждой строки свои днс начиная посл
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((domain) => {
    const subDomains = domain.split(".");
    for (let i = 0; i < subDomains.length; i++) {
      const currDNS =
        "." +
        domain
          .split(".")
          .reverse()
          .splice(0, subDomains.length - i)
          .join(".");
      if (obj[currDNS]) {
        obj[currDNS]++;
      } else {
        obj[currDNS] = 1;
      }
    }
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
