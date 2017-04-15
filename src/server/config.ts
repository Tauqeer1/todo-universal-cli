let config = {
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/todo',
    options: {
      db: {
        safe: true
      }
    }
  },
  salt: 'DJEW*324KNAScsafAwe987y2e@#RWoihwefn98!',
};

export default config;