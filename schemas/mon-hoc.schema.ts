import { connection, Schema } from "mongoose";

export const monHocSchema = new Schema({
  tenMH: { type: Schema.Types.String, required: true },
  soTC: { type: Schema.Types.Number, required: true },
});

export const monHocModel = connection.model("MonHoc", monHocSchema);
