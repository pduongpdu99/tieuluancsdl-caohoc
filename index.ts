import {
  GiangVienModel,
  KetQuaModel,
  KhoaModel,
  LopModel,
  monHocModel,
  PhanCongModel,
  SinhVienModel,
} from "./schemas";
import * as conn from "./connection";
import {
  giangVienData,
  ketQuaData,
  khoaData,
  lopData,
  monHocData,
} from "./data-templates";
import { sinhVienData } from "./data-templates/sinh-vien.data";
import { KetQua, Lop, PhanCong, SinhVien } from "./models";

function lopParse(item: Lop, ids: string[]) {
  const randomValue = ids[Math.floor(Math.random() * ids.length)];
  item.khoaId = randomValue;
  return item;
}

function sinhVienParse(item: SinhVien, ids: string[]) {
  const randomValue = ids[Math.floor(Math.random() * ids.length)];
  item.lopId = randomValue;
  return item;
}

function ketQuaParse(item: KetQua, maSVs: string[], maMHs: string[]) {
  const randomValue1 = maSVs[Math.floor(Math.random() * maSVs.length)];
  const randomValue2 = maMHs[Math.floor(Math.random() * maMHs.length)];
  item.svId = randomValue1;
  item.mhId = randomValue2;
  return item;
}

function phanCongParse(
  item: PhanCong,
  lopIds: string[],
  mhIds: string[],
  gvIds: string[]
) {
  const randomValue1 = lopIds[Math.floor(Math.random() * lopIds.length)];
  const randomValue2 = mhIds[Math.floor(Math.random() * mhIds.length)];
  const randomValue3 = gvIds[Math.floor(Math.random() * gvIds.length)];
  item.lopId = randomValue1;
  item.mhId = randomValue2;
  item.gvId = randomValue3;
  return item;
}

async function init() {
  await KhoaModel.deleteMany({});
  await LopModel.deleteMany({});
  await SinhVienModel.deleteMany({});
  await GiangVienModel.deleteMany({});
  await KetQuaModel.deleteMany({});
  await monHocModel.deleteMany({});
  await SinhVienModel.deleteMany({});

  // TODO: Khoa creating
  await KhoaModel.create(khoaData);
  const khoas = await KhoaModel.find();
  const khoaIds = khoas.map((item) => item._id.toString());

  // TODO: lop creating
  // set maKhoa into lop
  const lopItems = lopData.map((item) => lopParse(item, khoaIds));

  // create lop and get ids from lops created
  await LopModel.create(lopItems);
  const lops = await LopModel.find();
  const lopIds = lops.map((item) => item._id.toString());

  // TODO: sinh vien creating
  // set maKhoa into lop
  const sinhVienItems = sinhVienData.map((item) => sinhVienParse(item, lopIds));

  // create lop and get ids from lops created
  await SinhVienModel.create(sinhVienItems);
  const sinhViens = await SinhVienModel.find();
  const sinhVienIds = sinhViens.map((item) => item._id.toString());

  // TODO: mon hoc creating
  await monHocModel.create(monHocData);
  const monHocs = await monHocModel.find();
  const monHocIds = monHocs.map((item) => item._id.toString());

  // TODO: giang vien creating
  await GiangVienModel.create(giangVienData);
  const giangViens = await GiangVienModel.find();
  const giangVienIds = giangViens.map((item) => item._id.toString());

  // TODO: ket qua creating
  const ketQuaItems = ketQuaData.map((item) =>
    ketQuaParse(item, sinhVienIds, monHocIds)
  );
  await KetQuaModel.create(ketQuaItems);

  // TODO: phan cong creating
  const phanCongItems = ketQuaData.map((item) =>
    phanCongParse(item, lopIds, monHocIds, giangVienIds)
  );
  await PhanCongModel.create(phanCongItems);
}

async function a() {
  const sinhVienDN = await SinhVienModel.find({
    noiSinh: "Đà nẵng",
  }).select({
    _id: 1,
    hoTenSV: 1,
    ngaySinh: 1,
    noiSinh: 1,
  });
  return sinhVienDN;
}

async function c() {
  const giangVienThacSi = await GiangVienModel.find({
    hocVi: "Thạc sĩ",
  }).select({
    _id: 1,
    hoTenGV: 1,
    chuyenNganh: 1,
  });
  return giangVienThacSi;
}

async function d() {
  let ketQuas = await KetQuaModel.aggregate([
    {
      $merge: {
        into: "monhocs",
        on: "maMH",
        whenMatched: "replace",
        whenNotMatched: insert,
      },
    },
  ]);

  return ketQuas;
}

async function e() {
  const giangVienThacSi = await GiangVienModel.find({
    hocVi: "Thạc sĩ",
  }).select({
    _id: 1,
    hoTenGV: 1,
    chuyenNganh: 1,
  });
  return giangVienThacSi;
}

async function f() {
  const giangVienThacSi = await GiangVienModel.find({
    hocVi: "Thạc sĩ",
  }).select({
    _id: 1,
    hoTenGV: 1,
    chuyenNganh: 1,
  });
  return giangVienThacSi;
}

async function g() {
  const giangVienThacSi = await GiangVienModel.find({
    hocVi: "Thạc sĩ",
  }).select({
    _id: 1,
    hoTenGV: 1,
    chuyenNganh: 1,
  });
  return giangVienThacSi;
}

async function h() {
  return [];
}

async function main() {
  const connection = await conn.default.run();

  // await init();

  console.log(await d());

  connection.disconnect();
}

main();
