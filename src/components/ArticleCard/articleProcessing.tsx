import Typography from "@mui/material/Typography";

export const shortSummary = (text: string, filter: string) => {
  if (text.length > 100) {
    const shortText = text.slice(0, 100).concat("...");
    return filteredText(shortText, filter);
  }
  return filteredText(text, filter);
};

export const shortTitle = (title: string, filter: string) => {
  if (title.length > 100) {
    const shortTitle = title.slice(0, 100).concat("...");
    return filteredText(shortTitle, filter);
  }
  return filteredText(title, filter);
};

const filteredText = (title: string, filter: string) => {
  if (filter === "") {
    return title;
  }
  let textToSearch = filter;
  let textToMark = title;
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let pattern = new RegExp(`${textToSearch}`, "gi");
  textToMark = textToMark.replace(pattern, (match) => `<mark>${match}</mark>`);
  return textToMark;
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

interface TitleProps {
  title: string;
  filter: string;
}

interface TextProps {
  text: string;
  filter: string;
}

export const Title: React.FC<TitleProps> = ({ title, filter }) => {
  const markedTitle = shortTitle(title, filter);

  return (
    <Typography
      sx={{
        height: 117,
        fontFamily: "Montserrat",
        fontSize: 24,
        lineHeight: 1.2,
        marginBottom: "20px",
      }}
      gutterBottom
      variant="h5"
      component="div"
      dangerouslySetInnerHTML={{ __html: markedTitle }}
    ></Typography>
  );
};

export const Text: React.FC<TextProps> = ({ text, filter }) => {
  const markedText = shortSummary(text, filter);

  return (
    <Typography
      sx={{
        height: 72,
        fontFamily: "Montserrat",
        fontSize: 16,
        lineHeight: 1.5,
      }}
      variant="body2"
      color="text.secondary"
      dangerouslySetInnerHTML={{ __html: markedText }}
    ></Typography>
  );
};
