const convertDuration = (durationMinutes) => {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = Math.floor(durationMinutes % 60);
  
  return `${hours}ч ${minutes}м`;
}

export default convertDuration;
