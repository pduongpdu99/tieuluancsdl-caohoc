import { connection, Schema } from "mongoose";

export const KetQuaSchema = new Schema({
  svId: { type: Schema.Types.ObjectId, ref: "SinhVien" },
  mhId: { type: Schema.Types.ObjectId, ref: "MonHoc" },
  lanThi: { type: Schema.Types.Number, required: true },
  diemThi: { type: Schema.Types.Number, required: true },
});

export const KetQuaModel = connection.model("KetQua", KetQuaSchema);
