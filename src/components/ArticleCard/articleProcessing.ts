export const shortSummary = (summary: string) => {
  if (summary.length > 100) {
    return summary.slice(0, 100).concat("...");
  } else return summary;
};

export const shortTitle = (title: string, filter?: string) => {
  if (title.length > 100) {
    const shortTitle = title.slice(0, 100).concat("...");
    if (filter) {
      const filteredTitle = shortTitle.replace(
        filter,
        `<mark>${filter}</mark>`
      );
      console.log(filteredTitle);
      return filteredTitle;
    }
    return shortTitle;
  } else if (filter) {
    const replaceText = `</p><mark>${filter}</mark><p>`;
    const filteredTitle = title.replace(filter, replaceText);
    console.log(filteredTitle);
    return filteredTitle;
  } else return title;
};

export const dateText = (publishedAt: string) => {
  const date: Date = new Date(publishedAt);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = () => {
    const day = date.getDate().toString();
    switch (day) {
      case "1":
        return day + "st";
      case "2":
        return day + "nd";
      case "3":
        return day + "rd";
      default:
        return day + "th";
    }
  };
  const newDate = `${month[date.getMonth()]} ${day()} ${date.getFullYear()}`;
  return newDate;
};
