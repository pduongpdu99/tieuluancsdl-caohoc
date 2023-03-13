import { connection, Schema } from "mongoose";

export const PhanCongSchema = new Schema({
  lopId: { type: Schema.Types.ObjectId, ref: "Lop" },
  mhId: { type: Schema.Types.ObjectId, ref: "MonHoc" },
  gvId: { type: Schema.Types.ObjectId, ref: "GiangVien" },
});

export const PhanCongModel = connection.model("PhanCong", PhanCongSchema);
