import { addDays, eachDayOfInterval, format } from "date-fns";

import { MarkedDateProps, DayProps } from ".";
import { getPlataformDate } from "../../utils/getPlatformDate";
import theme from "../../styles/theme";

export function generateInterval(
  start: DayProps, 
  end: DayProps,
  ): MarkedDateProps{
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((value) => {
    const date = format(addDays(value, 1), "yyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.color.main
            : theme.color.main_light,

        textColor:
          start.dateString === date || end.dateString === date
            ? theme.color.main_light
            : theme.color.main,
      },
    };
  });
  return interval;
}
