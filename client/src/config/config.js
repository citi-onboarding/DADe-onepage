const prod = process.env.NODE_ENV === "production";

export default {
  url: prod ? 'https://dade-onepage.herokuapp.com' : 'http://localhost:3001',
}