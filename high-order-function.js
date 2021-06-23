async function connect() {

  const
    connection = await asyncDBconnect('http://localhost:1234'),
    session = await asyncGetSession(connection),
    user = await asyncGetUser(session),
    log = await asyncLogAccess(user);

  return true;
}

// higher-order function to catch errors
function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch(err => {
      console.log('ERROR', err);
    });
  }
}

(async () => {
  await catchErrors(connect)();
})();
