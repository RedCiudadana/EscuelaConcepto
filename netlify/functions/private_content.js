exports.handler = async function(event, context) {
  const { identity, user } = context.clientContext;

  console.log(user);

  return {
    statusCode: 200,
    body: 'Private content'
  }
}