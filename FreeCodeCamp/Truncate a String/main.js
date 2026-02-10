const truncateString = (string, number) => {
  if(string.length > number) {
    return string.substring(0, number) + '...';
  } else {
    return string;
  }
}

let res = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(res);