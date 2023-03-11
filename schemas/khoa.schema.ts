import { connection, Schema } from "mongoose";

export const khoaSchema = new Schema({
  maKhoa: { type: Schema.Types.String, required: true, unique: true },
  tenKhoa: { type: Schema.Types.String, required: true },
});

// khoaSchema.plugin(autoIncrement.plugin, { model: 'Khoa', field: 'maKhoa' });
export const KhoaModel = connection.model("Khoa", khoaSchema);
