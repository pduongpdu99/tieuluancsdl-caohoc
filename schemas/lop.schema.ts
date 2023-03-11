import { connection, Schema } from "mongoose";
import { khoaSchema } from "./khoa.schema";

export const lopSchema = new Schema({
  maLop: { type: Schema.Types.String, required: true, unique: true },
  tenLop: { type: Schema.Types.String, required: true },
  maKhoa: khoaSchema,
});

// lopSchema.plugin(autoIncrement.plugin, { model: 'Lop', field: 'maLop' });
export const LopModel = connection.model("Lop", lopSchema);
