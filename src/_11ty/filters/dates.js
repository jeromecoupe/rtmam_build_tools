const { DateTime } = require("luxon");

/**
 *
 * @param {date} jsDate - date string or object
 * @returns formatted date using Luxon
 */
const dateISO = function (jsDate) {
  const date = new Date(jsDate);
  const formattedDate = DateTime.fromJSDate(date).toISODate();
  return formattedDate;
};

/**
 *
 * @param {date} jsDate - date object or string
 * @param {string} locale - locale for output
 * @returns Formatted Date
 */
function dateFull(jsDate, locale = "en") {
  const date = new Date(jsDate);
  const formattedDate = DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(DateTime.DATE_FULL);
  return formattedDate;
}

module.exports = { dateISO, dateFull };
