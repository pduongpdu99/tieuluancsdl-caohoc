import { connection, Schema } from "mongoose";

export const monHocSchema = new Schema({
  maMH: { type: Schema.Types.String, unique: true, require: true },
  tenMH: { type: Schema.Types.String, required: true },
  soTC: { type: Schema.Types.Number, required: true },
});

export const monHocModel = connection.model("MonHoc", monHocSchema);
