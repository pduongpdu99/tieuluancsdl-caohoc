import { KhoaModel } from "./schemas";
import * as conn from "./connection";

async function main() {
  const connection = await conn.default.run();
  console.log(await KhoaModel.find({}));

  connection.disconnect();
}

main();
