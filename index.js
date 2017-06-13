require('dotenv').config();

const dateformat = require('dateformat');

const randomIntInc = (low, high) => Math.floor((Math.random() * ((high - low) + 1)) + low);

const firstHalfStartInMinutes = () => {
  const TenMinutesToEigthInMinutes = (7 * 60) + 50;
  const TenMinutesPastEigthInMinutes = (8 * 60) + 10;

  return randomIntInc(TenMinutesToEigthInMinutes, TenMinutesPastEigthInMinutes);
};

const secondHalfStartInMinutes = (endOfTheMorning) => {
  const OneHourFiftyMinutesInMinutes = 60 + 50;
  const TwoHoursInMinutes = 2 * 60;

  return endOfTheMorning + randomIntInc(OneHourFiftyMinutesInMinutes, TwoHoursInMinutes);
};

const halfEndInMinutes = (halfStart) => {
  const ThreeHoursFiftyFiveMinutesInMinutes = (3 * 60) + 55;
  const FourHoursFiveMinutesInMinutes = (4 * 60) + 5;

  return halfStart
    + randomIntInc(ThreeHoursFiftyFiveMinutesInMinutes, FourHoursFiveMinutesInMinutes);
};

const noWorkDays = process.env.NO_WORK_DAYS.split(',');

let day = 1;
while (day <= process.env.TOTAL_DAYS) {
  if (!noWorkDays.includes(day.toString())) {
    const date = new Date();
    date.setHours(0, 0, 0);

    const morningStart = firstHalfStartInMinutes();
    date.setHours(Math.floor(morningStart / 60), morningStart % 60);
    process.stdout.write(dateformat(date, 'HH:MM'));

    const morningEnd = halfEndInMinutes(morningStart);
    date.setHours(Math.floor(morningEnd / 60), morningEnd % 60);
    process.stdout.write(`\t${dateformat(date, 'HH:MM')}`);

    const afternoonStart = secondHalfStartInMinutes(morningEnd);
    date.setHours(Math.floor(afternoonStart / 60), afternoonStart % 60);
    process.stdout.write(`\t${dateformat(date, 'HH:MM')}`);

    const afternoonEnd = halfEndInMinutes(afternoonStart);
    date.setHours(Math.floor(afternoonEnd / 60), afternoonEnd % 60);
    process.stdout.write(`\t${dateformat(date, 'HH:MM')}`);
  }

  process.stdout.write('\n');
  day += 1;
}
