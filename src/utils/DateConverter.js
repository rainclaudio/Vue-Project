import { DateTime } from 'luxon';

export function formatDateToLocal(dateString) {
  const localDate = DateTime.fromISO(dateString).toLocal();

  const formattedDate = localDate.toFormat('MMMM dd, yyyy HH:mm');

  return formattedDate;
}