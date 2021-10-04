import { Category } from "./Category";

/** Product GUID value. */
interface ProductId {
    value: string;
}

/** Product item extent DTO. */
export interface ProductDTO {
    productId: ProductId;
    name: string;
    upcCode?: string;
    price: number;
    description?: string;
    imageUrl?: string;
    stepSize?: number;
    unitType?: string;
    subtitle?: string;
    brand?: string;
    storeSource?: string;
    category?: Category,
    subcategory?: string,
    inventoryOnHand?: number,
    isEssential?: boolean;
    deliverableNextDay?: boolean;
    perHomeMaximum?: number;
    enabled?: boolean;
    inventoryHeld?: number;
    weeklyConsumptionQuantity?: number;
    subsubcategory?: string;
    defaultTrackedItemSectionType?: number;
    internalUnitQuantity?: number;
    internalUnitMeasure?: number;
    productUrl?: string;
    itemType?: string;
    perishabilityDays?: number;
    isExplicitCaseQuantityRequired?: boolean;
}