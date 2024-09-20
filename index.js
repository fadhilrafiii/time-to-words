const HOURS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
]

const MINUTES = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
]

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  try {
    // TODO: real code goes here!
    const [_hour, _minute] = time.split(':');
    const hour = parseInt(_hour);
    const minute = parseInt(_minute);
    console.log('hour', hour)
    console.log('minute', minute)
    if (isNaN(hour) || isNaN(minute)) throw new Error('Not valid hour or minute');

    if (minute === 0 && hour === 0) return 'midnight';
    if (minute === 0 && hour === 12) return 'midday';
    if (minute === 0) return `${HOURS[hour]} o'clock`;

    let minuteStr = MINUTES[minute];
    if (minute === 30) minuteStr = 'half';
    if (minute === 15 || minute === 45) minuteStr = 'quarter';

    const hourStr = minute > 30 ? HOURS[(hour + 1) % 12] :  HOURS[(hour) % 12];
    const between = minute <= 30 ? 'past' : 'to';
    return `${minuteStr} ${between} ${hourStr}`;
  } catch (error) {
    console.error(error);
  }
}

convertTimeToWords('2:15');

module.exports = { convertTimeToWords };