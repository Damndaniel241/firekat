// utils/dateUtils.ts
export function formatPostedAt(datetime: string) {
    const date = new Date(datetime);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const time = date.toLocaleTimeString("en-US", options);
    const day = date.toLocaleString("en-US", { month: "short", day: "2-digit",year:"numeric" });
    return `${time.toLowerCase()} On ${day}`;
  }
  
