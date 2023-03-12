import { connection, Schema } from "mongoose";

export const lopSchema = new Schema({
  tenLop: { type: Schema.Types.String, required: true },
  maKhoa: { type: Schema.Types.ObjectId, ref: "Khoa" },
});

export const LopModel = connection.model("Lop", lopSchema);
