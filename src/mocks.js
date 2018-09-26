export const TIME = 400;

export const MOCK = true;

export const MOCK_TOKEN = {
  success: true,
  message: "Token created",
  token: "string.token"
};

export const MOCK_TOTAL = {
  brokers: { total: 281 },
  customers: { total: 71024 },
  enterprises: { total: 2355, accepted: 2355 },
  enterprisesPhotos: { total: 0 },
  enterprisesArchives: { total: 0 },
  properties: { total: 28785, accepted: 18086 },
  propertiesPhotos: { total: 305410 },
  propertiesArchives: { total: 0 }
};

export const MOCK_STATUS = {
  name: "Fulano Imóveis",
  status_id: 1,
  status: "analysis_finished",
  text:
    "Ao clicar em confirmar, criaremos um ambiente para você conferir os seus dados, e em breve, você receberá um e-mail com mais informações.",
  post: true
};

export const MOCK_PROPERTIES = {
  properties: {
    noBroker: 3788,
    noOwners: 30,
    noZipcode: 8496,
    noType: 8,
    noUsage: 8,
    noPretension: 411,
    noPrice: 101,
    noReference: 0,
    noPhoto: 6845,
    noWebDescription: 10832,
    noAreaUseful: 7519,
    noAreaCommon: 28547,
    noAreaPrivate: 28785,
    noAreaBuilt: 9389,
    verticalWithoutEnterprise: 3005,
    verticalWithoutAddOnAddress: 254,
    propertiesWithPhotos: 21940,
    propertiesWithArchives: 0,
    totalPhoto: 305410,
    averagePhotos: 13
  },
  download: { noZipcode: "1", verticalWithoutEnterprise: "2" }
};
export const MOCK_USERS = { brokers: { noEmail: 0, noProfile: 0 } };

export const MOCK_CUSTOMERS = {
  customers: {
    noEmails: 33254,
    noPhones: 2244,
    noName: 0,
    noMedia: 0,
    noBroker: 71024,
    owners: 18153,
    interested: 52871
  }
};

export const MOCK_ENTERPRISES = {
  enterprises: {
    noZipcode: 0,
    noPhoto: 2355,
    onlyBasicInformations: 0,
    enterpriseWithPhotos: 0,
    enterpriseWithArchives: 0,
    averagePhotos: 0
  }
};
