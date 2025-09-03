export const countries = ["DE" , "SA" , "AE" , "KW" , "BH" , "QA" , "OM" , "VN" , "US" , "UK" , "FR" , "IN" , "AU" , "CA" , "JP" , "IT" , "ES"] as const
export type supportedCountry = typeof countries[number]

