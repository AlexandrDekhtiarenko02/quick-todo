import { ILANGUAGES_ITEM } from '../language'

export const getCurrentLanguageTranslation = (translation: ILANGUAGES_ITEM, lang: string) => translation[lang as keyof ILANGUAGES_ITEM]
