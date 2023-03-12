import { connection, Schema } from "mongoose";

export const PhanCongSchema = new Schema({
  maLop: { type: Schema.Types.ObjectId, ref: "Lop" },
  maMH: { type: Schema.Types.ObjectId, ref: "MonHoc" },
  maGV: { type: Schema.Types.ObjectId, ref: "GiangVien" },
});

export const PhanCongModel = connection.model("PhanCong", PhanCongSchema);
