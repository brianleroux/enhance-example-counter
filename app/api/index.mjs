// initial state for the GET / aka index.html route
// - making a request w accept: application/json will work!
export async function get (req) {
  let count = req.session.count || 0
  return {
    json: { count }
  }
}
