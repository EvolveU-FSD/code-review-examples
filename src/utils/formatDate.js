export function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTime(date) {
  return date.toLocaleDateString('en-US' , {
    hour: 'numeric',
    minute: 'numeric'
  })
}

console.log(formatDate(new Date('2025-05-15'))); //May 15, 2025
console.log(formatDate(new Date('2022-12-25'))); //December 25, 2022

console.log(formatTime(new Date('2025-05-15:22:05')));// 5/15/2025, 10:05 PM
console.log(formatTime(new Date('2022-12-25:3:05'))); // 12/25/2022, 3:05 AM