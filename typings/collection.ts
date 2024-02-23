export interface CollectionData {
    id: number
    type: string
    code: string
    title: string
    subtitle: string
    description: string
    trialPeriod: string | null
    installmentPrice: string | null
    installmentPeriod: string | null
    rating: number
    startDate: null
    endDate: null
    viewType: string
    createdAt: string
    media: any[]
    taggings: any[]
    singleCollections: any[]
    items: Item[]
}

export interface Item {
    createdAt: string
    updatedAt: string
    deletedAt: string | null
    uuid: string
    name: string
    body: string | null
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey: number | null
    prdType: number
    publication: Publication
}

export interface Publication {
    "id": number,
    "title": string
    "code": string
    "productId": number,
    "prdType": number,
    "detailEntity": string
    "offeringType": string
    "rating": number,
    "isExistResidual": boolean,
    "isAdult": number,
    "preface": string
    "prefaceIconUrl": string
    "productName": string
    "brandName": string
    "media": Media[],
    "isTrial": boolean,
    "tagsOnImage": string[],
    "tagsOnDesc": string[],
    "priceInfo": PriceInfo,
    "discounts": Discount[],
    "applyCoupon": boolean
}

export interface Media {
    "seq": number,
    "type": string
    "uri": string
    "mimeType": string
    "deviceType": string | null
}

export interface PriceInfo {
    "price": number
    "discountPrice": number
    "discountRate": number
    "couponDiscountPrice": number
    "couponDiscountRate": number
}

export interface Discount {
    "id": number,
    "name": string | null,
    "type": string
    "calcMethod": string
    "value": number,
    "activeFrom": string | null,
    "activeTo": string | null,
    "qty": number,
    "remain": number | null
}