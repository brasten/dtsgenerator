declare namespace Components {
    namespace Schemas {
        export interface Nullable {
            field?: string | null;
        }
        export interface NullableAllOf {
            field?: {
                field?: string | null;
                id: string; // uuid
            } | null;
        }
        export interface NullableAnyOf {
            field?: string | boolean | null;
        }
        export interface NullableEnum {
            field?: "VALUE_ONE" | "VALUE_TWO" | null;
        }
    }
}
