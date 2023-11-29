/*
  add the user that just logged in to the user pool
  handling which users are online
    init
      1. we need to get all users
      2. we need to get all online users
    rolling
      3. rolling updates
  once a user clicks a channel
    init
      1. get the first couple
    rolling
      2. get messages and send messages
*/

export default function Home() {
  return (
    <div>
      <h1>You're logged in</h1>
    </div>
  );
}
