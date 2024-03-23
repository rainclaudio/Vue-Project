import { DateTime } from "luxon";

let now = DateTime.now();
let pastTime = now.minus({ hours: 2 });
console.log(pastTime.toRelative()); // "2 hours ago"
