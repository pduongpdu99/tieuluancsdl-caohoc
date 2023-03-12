import { connection, Schema } from "mongoose";

export const sinhVienSchema = new Schema({
  hoTenSV: { type: Schema.Types.String, required: true, min: 5, max: 30 },
  nu: { type: Schema.Types.Boolean, default: false, required: false },
  ngaySinh: { type: Schema.Types.Date, required: false },
  noiSinh: { type: Schema.Types.String, required: false },
  maLop: { type: Schema.Types.ObjectId, ref: "Lop" },
});

export const SinhVienModel = connection.model("SinhVien", sinhVienSchema);
