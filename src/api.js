import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8080/api/v1/users" });

export const findAllWithIncomeLessThen5AndBWAndMercedes = async (
  page,
  limit
) => {
  try {
    const res = await api.post("/findAllWithIncomeLessThen5AndBWAndMercedes", {
      page: page,
      limit: limit,
      sort: "first_name",
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Something went wrong!!");
  }
};

export const findAllMaleUsersWithPhonePriceMoreThen10000 = async (
  page,
  limit
) => {
  try {
    const res = await api.post("/findAllMaleUsersWithPhonePriceMoreThen10000", {
      page: page,
      limit: limit,
      sort: "first_name",
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Something went wrong!!");
  }
};
export const findAllUsersLastNameWithMQouteLenthGT15EmailIncludesLastName =
  async (page, limit) => {
    try {
      const res = await api.post(
        "/findAllUsersLastNameWithMQouteLenthGT15EmailIncludesLastName",
        {
          page: page,
          limit: limit,
          sort: "first_name",
        }
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log("Something went wrong!!", err);
    }
  };
export const findAllUsersWhoseCarAreBMQMercedesAudiAndEmailDoesntIncludeDigits =
  async (page, limit) => {
    try {
      const res = await api.post(
        "/findAllUsersWhoseCarAreBMQMercedesAudiAndEmailDoesntIncludeDigits",
        {
          page: page,
          limit: limit,
          sort: "first_name",
        }
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log("Something went wrong!!");
    }
  };
export const showTheDataOfTheTop10CitiesWithTheHighestNumberOfUsersAndTheirAverageIncome =
  async () => {
    try {
      const res = await api.post(
        "/showTheDataOfTheTop10CitiesWithTheHighestNumberOfUsersAndTheirAverageIncome"
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log("Something went wrong!!");
    }
  };
