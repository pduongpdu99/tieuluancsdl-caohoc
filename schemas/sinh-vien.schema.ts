import { connection, Schema } from "mongoose";
import { lopSchema } from "./lop.schema";

export const sinhVienSchema = new Schema({
  maSV: { type: Schema.Types.String, required: true, unique: true },
  hoTenSV: { type: Schema.Types.String, required: true, min: 5, max: 30 },
  nu: { type: Schema.Types.Boolean, default: false, required: false },
  ngaySinh: { type: Schema.Types.Date, required: false },
  noiSinh: { type: Schema.Types.String, required: false },
  maLop: lopSchema,
});

// sinhVienSchema.plugin(autoIncrement.plugin,  { model: 'SinhVien', field: 'maSV' });
export const SinhVienModel = connection.model("SinhVien", sinhVienSchema);
