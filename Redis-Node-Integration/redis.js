const Redis = require("ioredis");

const redis = new Redis({
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

//testing connection
redis.set("myKey", "myValue", (error, result) => {
  if (error) {
    console.error("Error setting value : ", error);
  } else {
    console.log("Value is set successfully : ", result);
  }
});

redis.get("myKey", (error, result) => {
  if (error) {
    console.log("Error while retrieving value : ", error);
  } else {
    console.log("Retrieved value : ", result);
  }
});
