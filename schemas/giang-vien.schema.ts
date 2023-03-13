import { connection, Schema } from "mongoose";

export const GiangVienSchema = new Schema({
  maGV: { type: Schema.Types.String, required: true },
  hoTenGV: { type: Schema.Types.String, required: true },
  hocVi: { type: Schema.Types.String, required: true },
  chuyenNganh: { type: Schema.Types.String, required: true },
  khoaId: { type: Schema.Types.ObjectId, ref: "Khoa" },
});

export const GiangVienModel = connection.model("GiangVien", GiangVienSchema);
