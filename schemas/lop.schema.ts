import { connection, Schema } from "mongoose";

export const lopSchema = new Schema({
  maLop: { type: Schema.Types.String, required: true, unique: true },
  tenLop: { type: Schema.Types.String, required: true },
  khoaId: { type: Schema.Types.ObjectId, ref: "Khoa" },
});

export const LopModel = connection.model("Lop", lopSchema);
