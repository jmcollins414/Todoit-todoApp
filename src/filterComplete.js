export default function filterComplete(item, filter) {
  if (filter === 'Incomplete') {
    if (item.complete === false) {
      return item;
    }
  } else if (filter === 'Complete') {
    if (item.complete === true) {
      return item;
    }
  } else if (filter === 'All') {
    if (item.complete === true || item.complete === false) {
      return item;
    }
  }
}
