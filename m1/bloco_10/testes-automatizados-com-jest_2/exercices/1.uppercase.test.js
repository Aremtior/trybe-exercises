const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testando uppercase', done => {
  uppercase('hello', (result) => {
    expect(result).toBe('HELLO');
    done();
  });
})