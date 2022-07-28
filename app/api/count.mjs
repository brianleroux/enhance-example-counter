// handler for POST /count
// - increments req.session.count
// - if json is requested we'll return the json payload
// - otherwise we'll redirect back to /
export async function post (req) {
  let count = req.session.count || 0
  count += 1
  return {
    session: { count },
    json: { count },
    location: '/'
  }
}
