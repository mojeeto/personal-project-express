import { IsProduction } from "./helper";

enum LogPriority {
  low = 0,
  thread = 1,
  high = 2,
}
type LogTypes = "WARNING" | "ERROR" | "INFO";
type LogDataObject = {
  subject: string;
  message: string;
  code?: number;
  priority?: LogPriority;
};

function LogTime() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const logTime = `[${date}, ${time}]`;
  return { time, date, logTime };
}

export default function Log(as: LogTypes, data: LogDataObject) {
  if (!data.priority) data.priority = LogPriority.low;
  // if isProduction was false, that means is development.
  console.log(IsProduction);
  if (!IsProduction) {
    const { logTime } = LogTime();
    const message = `${as}::[${data.subject}]: ${data.message} ${logTime}`;
    if (as === "INFO") console.info("\x1b[34m" + message + "\x1b[0m");
    if (as === "WARNING") console.warn("\x1b[33m" + message + "\x1b[0m");
    if (as === "ERROR")
      console.error(`\x1b[31m[${data.code}]` + message + "\x1b[0m");
  }
}
