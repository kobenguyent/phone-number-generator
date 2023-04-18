export const countries = ["DE" , "SA" , "AE" , "KW" , "BH" , "QA" , "OM" , "VN"] as const
export type supportedCountry = typeof countries[number]

