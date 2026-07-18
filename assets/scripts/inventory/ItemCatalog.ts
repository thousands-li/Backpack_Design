import { _decorator, Enum, SpriteFrame } from 'cc';

const { ccclass, property } = _decorator;

export type InventoryCategory =
    | '全部'
    | '武器'
    | '防具'
    | '消耗品'
    | '材料'
    | '任务'
    | '其他';

export type ItemInventoryCategory = Exclude<InventoryCategory, '全部'>;

export const INVENTORY_CATEGORIES: readonly InventoryCategory[] = [
    '全部',
    '武器',
    '防具',
    '消耗品',
    '材料',
    '任务',
    '其他',
];

export const RARITY_NAMES = [
    '普通',
    '优秀',
    '稀有',
    '史诗',
    '传说',
    '特殊',
] as const;

export enum ItemRarity {
    普通 = 0,
    优秀 = 1,
    稀有 = 2,
    史诗 = 3,
    传说 = 4,
    特殊 = 5,
}

export type ItemRarityIndex = ItemRarity;

@ccclass('CraftIngredientConfig')
export class CraftIngredientConfig {
    @property({
        displayName: '材料物品 ID',
        tooltip: '所需材料的物品 ID，可使用不连续 ID。',
    })
    public itemId = -1;

    @property({
        displayName: '需要数量',
        min: 1,
        tooltip: '单次合成需要消耗的数量。',
    })
    public count = 1;

    @property({
        displayName: '是否消耗',
        tooltip: '关闭后，该材料只作为合成条件，不会被扣除。',
    })
    public consume = true;
}

@ccclass('ItemExtraAttributeConfig')
export class ItemExtraAttributeConfig {
    @property({
        displayName: '属性键',
        tooltip: '供游戏逻辑识别的稳定键名，例如 criticalRate。',
    })
    public key = '';

    @property({
        displayName: '显示名称',
        tooltip: '展示给玩家的属性名称。',
    })
    public displayName = '';

    @property({
        displayName: '数值',
        tooltip: '用于计算的数值；不需要数值时可保持为 0。',
    })
    public value = 0;

    @property({
        displayName: '文本值',
        tooltip: '用于无法用单一数字表达的属性。',
    })
    public textValue = '';

    @property({
        displayName: '百分比显示',
        tooltip: '开启后，界面可将数值按百分比展示。',
    })
    public isPercentage = false;
}

@ccclass('ItemEffectConfig')
export class ItemEffectConfig {
    @property({
        displayName: '效果类型',
        tooltip: '供效果系统识别的类型键，例如 restoreHealth。',
    })
    public effectType = '';

    @property({
        displayName: '作用目标',
        tooltip: '效果目标，例如 self、target 或 area。',
    })
    public target = 'self';

    @property({ displayName: '效果数值', tooltip: '效果的基础数值。' })
    public value = 0;

    @property({
        displayName: '持续时间（秒）',
        min: 0,
        tooltip: '0 表示立即生效。',
    })
    public duration = 0;

    @property({
        displayName: '触发概率',
        range: [0, 1, 0.01],
        slide: true,
        tooltip: '0 到 1，1 表示必定触发。',
    })
    public probability = 1;

    @property({
        displayName: '可叠加',
        tooltip: '相同效果是否允许叠加。',
    })
    public stackable = false;
}

@ccclass('ItemConfigBase')
export class ItemConfigBase {
    @property({
        displayName: '物品 ID',
        tooltip: '全表唯一的非负整数，可跳号但不可重复。',
    })
    public id = -1;

    @property({ displayName: '物品名称', tooltip: '展示给玩家的名称。' })
    public itemName = '';

    @property({
        type: Enum(ItemRarity),
        displayName: '稀有度',
        tooltip: '影响稀有度外框、筛选和排序。',
    })
    public rarity = ItemRarity.普通;

    @property({
        type: SpriteFrame,
        displayName: '物品图标',
        tooltip: '背包和详情界面使用的图标。',
    })
    public icon: SpriteFrame | null = null;

    @property({
        displayName: '物品类型',
        tooltip: '分类内的细分类型，例如长剑、头盔、药剂。',
    })
    public itemType = '';

    @property({
        displayName: '物品描述',
        multiline: true,
        tooltip: '物品背景或功能说明。',
    })
    public description = '';

    @property({
        displayName: '用途说明',
        multiline: true,
        tooltip: '物品的使用、装备或合成说明。',
    })
    public usage = '';

    @property({
        displayName: '最大堆叠数',
        min: 1,
        tooltip: '单个格子允许堆叠的最大数量。',
    })
    public maxStack = 1;

    @property({
        displayName: '单件重量',
        min: 0,
        tooltip: '单个物品占用的重量。',
    })
    public weight = 0;

    @property({
        displayName: '可使用',
        tooltip: '该物品是否能触发使用行为。',
    })
    public canUse = false;

    @property({
        displayName: '使用后消耗',
        tooltip: '成功使用后是否扣除一个物品。',
    })
    public consumeOnUse = false;

    @property({
        displayName: '可丢弃',
        tooltip: '是否允许玩家从背包丢弃。',
    })
    public canDiscard = true;

    @property({
        displayName: '可交易',
        tooltip: '是否允许出售、交换或转移。',
    })
    public canTrade = true;

    @property({
        displayName: '初始数量',
        min: 0,
        tooltip: '新存档首次创建时放入背包的数量。',
    })
    public initialCount = 0;

    @property({
        displayName: '初始额外堆叠数',
        min: 0,
        tooltip: '需要额外测试堆叠或跨格分配时追加的初始数量。',
    })
    public initialExtraStackCount = 0;

    @property({
        displayName: '单次合成产出',
        min: 1,
        tooltip: '完成一次配方后获得的物品数量。',
    })
    public craftOutputCount = 1;

    @property({
        type: [CraftIngredientConfig],
        displayName: '合成材料',
        tooltip: '留空表示该物品没有合成配方。',
    })
    public craftingIngredients: CraftIngredientConfig[] = [];

    @property({
        type: [ItemExtraAttributeConfig],
        displayName: '额外属性',
        tooltip: '配置该物品独有、但不值得新增字段的属性。',
    })
    public extraAttributes: ItemExtraAttributeConfig[] = [];

    @property({
        type: [ItemEffectConfig],
        displayName: '物品效果',
        tooltip: '配置使用、装备或持有时触发的效果。',
    })
    public effects: ItemEffectConfig[] = [];
}

@ccclass('EquipmentItemConfigBase')
export class EquipmentItemConfigBase extends ItemConfigBase {
    @property({
        displayName: '装备槽位',
        tooltip: '装备系统使用的槽位键，例如 mainHand、head。',
    })
    public equipmentSlot = '';

    @property({
        displayName: '需求等级',
        min: 0,
        tooltip: '0 表示没有等级要求。',
    })
    public requiredLevel = 0;

    @property({
        displayName: '最大耐久度',
        min: 0,
        tooltip: '0 表示不启用耐久度。',
    })
    public maxDurability = 0;

    @property({
        displayName: '装备后绑定',
        tooltip: '装备后是否禁止交易或转移。',
    })
    public bindOnEquip = false;
}

@ccclass('WeaponItemConfig')
export class WeaponItemConfig extends EquipmentItemConfigBase {
    @property({ displayName: '攻击力', tooltip: '武器提供的基础攻击力。' })
    public attackPower = 0;

    @property({
        displayName: '攻击速度',
        min: 0,
        tooltip: '武器的基础攻击速度系数。',
    })
    public attackSpeed = 1;

    @property({
        displayName: '攻击距离',
        min: 0,
        tooltip: '武器的有效攻击距离。',
    })
    public attackRange = 1;

    @property({
        displayName: '暴击率',
        range: [0, 1, 0.01],
        slide: true,
        tooltip: '0 到 1 的基础暴击概率。',
    })
    public criticalRate = 0;

    @property({
        displayName: '弹药物品 ID',
        tooltip: '-1 表示该武器不需要弹药。',
    })
    public ammoItemId = -1;
}

@ccclass('ArmorItemConfig')
export class ArmorItemConfig extends EquipmentItemConfigBase {
    @property({
        displayName: '防御力',
        tooltip: '防具提供的基础物理防御。',
    })
    public defense = 0;

    @property({
        displayName: '魔法抗性',
        tooltip: '防具提供的基础魔法抗性。',
    })
    public magicResistance = 0;

    @property({
        displayName: '移动速度修正',
        tooltip: '对移动速度的加减值，负数表示减速。',
    })
    public movementSpeedModifier = 0;
}

@ccclass('ConsumableItemConfig')
export class ConsumableItemConfig extends ItemConfigBase {
    @property({
        displayName: '冷却时间（秒）',
        min: 0,
        tooltip: '两次使用之间的最短间隔。',
    })
    public cooldown = 0;

    @property({
        displayName: '使用耗时（秒）',
        min: 0,
        tooltip: '0 表示立即使用。',
    })
    public useDuration = 0;

    @property({
        displayName: '单件可用次数',
        min: 1,
        tooltip: '单个物品可触发效果的次数。',
    })
    public charges = 1;
}

@ccclass('MaterialItemConfig')
export class MaterialItemConfig extends ItemConfigBase {
    @property({
        displayName: '材料等级',
        min: 0,
        tooltip: '用于配方或强化条件判断。',
    })
    public materialLevel = 0;

    @property({
        displayName: '材料品质',
        tooltip: '材料体系内部使用的品质标识。',
    })
    public materialQuality = '';

    @property({
        displayName: '作为货币',
        tooltip: '是否允许货币系统直接消费该材料。',
    })
    public isCurrency = false;
}

@ccclass('QuestItemConfig')
export class QuestItemConfig extends ItemConfigBase {
    @property({
        displayName: '关联任务 ID',
        tooltip: '关联的任务标识，留空表示由其他逻辑决定。',
    })
    public questId = '';

    @property({
        displayName: '任务阶段',
        min: 0,
        tooltip: '该物品对应的任务阶段。',
    })
    public questStage = 0;

    @property({
        displayName: '关键任务物品',
        tooltip: '关键物品通常不可丢弃、不可交易。',
    })
    public isKeyItem = true;

    @property({
        displayName: '完成后移除',
        tooltip: '关联任务完成时是否自动从背包移除。',
    })
    public removeOnQuestComplete = true;
}

@ccclass('OtherItemConfig')
export class OtherItemConfig extends ItemConfigBase {
    @property({
        displayName: '自定义分类',
        tooltip: '“其他”背包内进一步区分物品的分类键。',
    })
    public customCategory = '';

    @property({
        displayName: '交互动作',
        tooltip: '供交互系统识别的动作键，留空表示无专用动作。',
    })
    public interactionAction = '';

    @property({
        displayName: '最大耐久度',
        min: 0,
        tooltip: '工具类物品可使用；0 表示不启用耐久度。',
    })
    public maxDurability = 0;
}

export interface ItemConfigGroups {
    weapons?: readonly WeaponItemConfig[];
    armors?: readonly ArmorItemConfig[];
    consumables?: readonly ConsumableItemConfig[];
    materials?: readonly MaterialItemConfig[];
    quests?: readonly QuestItemConfig[];
    others?: readonly OtherItemConfig[];
}

/**
 * 由 Inspector 配置构建的运行时索引。物品 ID 只要求唯一、非负，允许任意跳号。
 */
export class ItemConfigCatalog {
    private readonly itemsById = new Map<number, ItemConfigBase>();
    private readonly categoryById = new Map<number, ItemInventoryCategory>();
    private readonly itemsByCategory = new Map<
        ItemInventoryCategory,
        Map<number, ItemConfigBase>
    >();

    public constructor(groups: ItemConfigGroups = {}) {
        this.registerGroup('武器', groups.weapons ?? []);
        this.registerGroup('防具', groups.armors ?? []);
        this.registerGroup('消耗品', groups.consumables ?? []);
        this.registerGroup('材料', groups.materials ?? []);
        this.registerGroup('任务', groups.quests ?? []);
        this.registerGroup('其他', groups.others ?? []);
    }

    public get<T extends ItemConfigBase = ItemConfigBase>(
        itemId: number,
    ): T | undefined {
        return this.itemsById.get(itemId) as T | undefined;
    }

    public getAll<T extends ItemConfigBase = ItemConfigBase>(
        category: InventoryCategory = '全部',
    ): readonly T[] {
        const source = category === '全部'
            ? this.itemsById
            : this.itemsByCategory.get(category);
        return source ? Array.from(source.values()) as T[] : [];
    }

    public getCategory(itemId: number): ItemInventoryCategory | undefined {
        return this.categoryById.get(itemId);
    }

    public get size(): number {
        return this.itemsById.size;
    }

    private registerGroup(
        category: ItemInventoryCategory,
        items: readonly ItemConfigBase[],
    ): void {
        const group = new Map<number, ItemConfigBase>();
        this.itemsByCategory.set(category, group);

        items.forEach((item, index) => {
            if (!item) {
                throw new Error(
                    `[ItemConfigCatalog] ${category}配置第 ${index + 1} 项为空。`,
                );
            }
            if (!Number.isSafeInteger(item.id) || item.id < 0) {
                throw new Error(
                    `[ItemConfigCatalog] ${category}物品“${item.itemName || index + 1}”的 ID ${item.id} 非法；ID 必须是非负安全整数。`,
                );
            }

            const duplicate = this.itemsById.get(item.id);
            if (duplicate) {
                const duplicateCategory = this.categoryById.get(item.id);
                throw new Error(
                    `[ItemConfigCatalog] 物品 ID ${item.id} 重复：“${duplicate.itemName}”(${duplicateCategory}) 与“${item.itemName}”(${category})。`,
                );
            }

            group.set(item.id, item);
            this.itemsById.set(item.id, item);
            this.categoryById.set(item.id, category);
        });
    }
}
