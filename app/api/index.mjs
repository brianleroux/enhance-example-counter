// initial state for the GET / aka index.html route
export async function get (req) {
  let count = req.session.count || 0
  return {
    json: { count }
  }
}
