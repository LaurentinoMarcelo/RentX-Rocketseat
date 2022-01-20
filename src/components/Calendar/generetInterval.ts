import { eachDayOfInterval, format } from "date-fns";

import { MarkedDateProps, DayProps } from ".";
import { getPlataformDate } from "../../utils/getPlatformDate";
import theme from "../../styles/theme";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlataformDate(item), "yyyy-MM-dd");

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
