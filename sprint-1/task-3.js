function longestLogin(loginList) {
  return loginList.reduce((p, c, i) => {
      if(p.length < c.length) {
          return c
      } else if(p.length === c.length) {
          return c
      }
      return p
  }, ' ');
};

console.log(longestLogin(["maxxx", "NewUser", "admin111", "Administrator"]));
console.log(longestLogin(["User123", "Steven Dobson", "qwerty12345"]));
console.log(longestLogin(["Carl1999", "ivan@gmail.com", "nick-name"]));
console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));
console.log(longestLogin(["larian", "questttt", "longest_user_name", "Nick Nickson"]));
