const getMutualFriends = (user1, user2) => {
    const preResultArray = user1.friends.map((friend1) => {
      const equality = user2.friends.filter((friend2) => {
        if (friend1.id === friend2.id) {
          return friend2;
        }
      });
      return equality;
    });
    const result = preResultArray.filter((friend) => {
      if (friend.length > 0) {
        return friend;
      }
    });
    return result.flat();
  };
  
  export { getMutualFriends };