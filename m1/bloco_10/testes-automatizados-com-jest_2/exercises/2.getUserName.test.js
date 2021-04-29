const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

it('tests if the user id exists', () => {
  return getUserName(4).then((user) => {
    expect(user).toEqual('Mark');
  });
});

it('tests if the user id not exists', () => {
  return getUserName(2).catch((error) => {
    expect(error).toEqual({ error: 'User with 2 not found.' });
  });
});