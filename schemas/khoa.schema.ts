import { connection, Schema } from "mongoose";

export const khoaSchema = new Schema({
  tenKhoa: { type: Schema.Types.String, required: true },
});

export const KhoaModel = connection.model("Khoa", khoaSchema);
