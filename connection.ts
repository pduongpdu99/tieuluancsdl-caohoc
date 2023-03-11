import { connect } from "mongoose";
import * as dotenv from "dotenv";

export default {
  run: async () => {
    const config: { MONGODB_URL: string } = dotenv.config().parsed as any;
    return await connect(config.MONGODB_URL);
    // autoIncrement.initialize(connection);
  },
};
