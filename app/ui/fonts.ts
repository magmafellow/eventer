import { Roboto_Mono } from "next/font/google";
import { Roboto } from "next/font/google";

export const robotoMono = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext']
})

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext']
})

