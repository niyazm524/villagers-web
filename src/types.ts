export interface Villager {
    Brain:               Brain;
    HurtByTimestamp:     FieldValue;
    FoodLevel:           FieldValue;
    Invulnerable:        FieldValue;
    FallFlying:          FieldValue;
    ForcedAge:           FieldValue;
    Gossips:             Gossip[];
    PortalCooldown:      FieldValue;
    AbsorptionAmount:    FieldValue;
    LastRestock:         number;
    FallDistance:        FieldValue;
    CanUpdate:           FieldValue;
    DeathTime:           FieldValue;
    Xp:                  FieldValue;
    LastGossipDecay:     number;
    HandDropChances:     FieldValue[];
    PersistenceRequired: FieldValue;
    UUID:                { [key: string]: number };
    Age:                 FieldValue;
    BalmData:            BalmData;
    Motion:              Array<number | string>;
    Health:              FieldValue;
    Silent?:             FieldValue;
    LeftHanded:          FieldValue;
    Air:                 FieldValue;
    OnGround:            FieldValue;
    Offers?:             Offers;
    Rotation:            FieldValue[];
    HandItems:           BalmData[];
    RestocksToday:       FieldValue;
    ArmorDropChances:    FieldValue[];
    Pos:                 number[];
    Fire:                FieldValue;
    ArmorItems:          BalmData[];
    CanPickUpLoot:       FieldValue;
    VillagerData:        VillagerData;
    attributes:          Attribute[];
    HurtTime:            FieldValue;
    "forge:spawn_type":  ForgeSpawnType;
    Inventory:           Inventory[];
}

export interface FieldValue {
    value: number;
}

export interface BalmData {
}

export interface Brain {
    memories: Memories;
}

export interface Memories {
    "minecraft:last_worked_at_poi"?: FieldValue;
    "minecraft:job_site"?:           Minecraft;
    "minecraft:last_slept"?:         FieldValue;
    "minecraft:last_woken"?:         FieldValue;
    "minecraft:meeting_point"?:      Minecraft;
    "minecraft:home"?:               Minecraft;
}

export interface Minecraft {
    value: Value;
}

export interface Value {
    pos:       { [key: string]: number };
    dimension: Dimension;
}

export enum Dimension {
    MinecraftOverworld = "minecraft:overworld",
}

export interface Gossip {
    Target: { [key: string]: number };
    Type:   Type;
    Value:  FieldValue;
}

export enum Type {
    Trading = "trading",
}

export interface Inventory {
    count: FieldValue;
    id:    string;
}

export interface Offers {
    Recipes: Recipe[];
}

export interface Recipe {
    maxUses:         FieldValue;
    sell:            Sell;
    buy:             Inventory;
    priceMultiplier: FieldValue;
    demand?:         FieldValue;
    xp?:             FieldValue;
    buyB?:           Inventory;
}

export interface Sell {
    count:       FieldValue;
    id:          string;
    components?: Components;
}

export interface Components {
    "minecraft:enchantments"?:            MinecraftEnchantments;
    "minecraft:potion_contents"?:         MinecraftPotionContents;
    "minecraft:map_decorations"?:         MinecraftMapDecorations;
    "minecraft:item_name"?:               string;
    "minecraft:map_id"?:                  FieldValue;
    "minecraft:map_color"?:               FieldValue;
    "minecraft:stored_enchantments"?:     MinecraftEnchantments;
    "minecraft:suspicious_stew_effects"?: MinecraftSuspiciousStewEffect[];
}

export interface MinecraftEnchantments {
    levels: { [key: string]: FieldValue };
}

export interface MinecraftMapDecorations {
    "+": Empty;
}

export interface Empty {
    x:        number;
    z:        number;
    type:     string;
    rotation: FieldValue;
}

export interface MinecraftPotionContents {
    potion: string;
}

export interface MinecraftSuspiciousStewEffect {
    duration: FieldValue;
    id:       string;
}

export interface VillagerData {
    profession: string;
    level:      FieldValue;
    type:       TypeEnum;
}

export enum TypeEnum {
    MinecraftTaiga = "minecraft:taiga",
}

export interface Attribute {
    id:         AttributeID;
    modifiers?: Modifier[];
    base:       number;
}

export enum AttributeID {
    MinecraftGenericFollowRange = "minecraft:generic.follow_range",
    MinecraftGenericMovementSpeed = "minecraft:generic.movement_speed",
    MinecraftGenericOxygenBonus = "minecraft:generic.oxygen_bonus",
}

export interface Modifier {
    amount:    number;
    id:        ModifierID;
    operation: Operation;
}

export enum ModifierID {
    MinecraftRandomSpawnBonus = "minecraft:random_spawn_bonus",
}

export enum Operation {
    AddMultipliedBase = "add_multiplied_base",
}

export enum ForgeSpawnType {
    Breeding = "BREEDING",
    Structure = "STRUCTURE",
}
