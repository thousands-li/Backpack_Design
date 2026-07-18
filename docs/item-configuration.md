# 物品属性配置说明

物品数据的唯一来源是场景中 `BackpackController` 的六组 Inspector 配置：

- 武器物品配置
- 防具物品配置
- 消耗品配置
- 材料物品配置
- 任务物品配置
- 其他物品配置

具体物品不再写在 TypeScript 常量中，图标也不再依赖“数组下标等于物品 ID”。运行时会根据全部配置建立 `Map<number, ItemConfigBase>` 索引，因此 ID 可以跳号，但必须是唯一的非负整数。

## 配置继承关系

```text
ItemConfigBase
├─ EquipmentItemConfigBase
│  ├─ WeaponItemConfig
│  └─ ArmorItemConfig
├─ ConsumableItemConfig
├─ MaterialItemConfig
├─ QuestItemConfig
└─ OtherItemConfig
```

`ItemConfigBase` 保存所有物品共有的字段：ID、名称、稀有度、图标、细分类型、描述、用途、堆叠上限、重量、使用/丢弃/交易规则、背包与场景初始数量、合成配方、额外属性和效果。

分类子类只增加该分类共有的字段，例如：

- 武器：攻击力、攻击速度、攻击距离、暴击率、弹药 ID。
- 防具：防御力、魔法抗性、移动速度修正。
- 消耗品：冷却时间、使用耗时、可用次数。
- 材料：材料等级、材料品质、是否作为货币。
- 任务物品：任务 ID、任务阶段、关键物品规则。
- 其他物品：自定义分类、交互动作、耐久度。

## 新增物品

1. 在层级管理器中选中挂有 `BackpackController` 的节点。
2. 在对应分类数组中增加一项。
3. 填写唯一 ID、名称、稀有度和图标。
4. 配置通用背包规则和该分类的专属属性。
5. 如需合成，在该物品的“合成材料”数组中填写材料 ID、数量和是否消耗。
6. 如需独特属性或效果，添加“额外属性”或“物品效果”，无需为每个物品新写一份数据常量。

启动时会校验非法 ID、重复 ID、空名称、缺少图标和无效堆叠上限。删除或修改已有物品时应保持旧 ID 稳定，因为存档只保存 `itemId + count`，其余静态属性会从最新配置重新读取。

## 效果接入

使用物品时，`BackpackController` 会从配置读取 `ItemEffectConfig[]`，并在自身节点派发：

- `inventory-item-used`：一次物品使用行为。
- `inventory-item-effect`：数组中的每一条具体效果。

战斗、角色属性或任务系统可监听这些事件，并按 `effectType`、`target`、`value`、`duration`、`probability` 和 `stackable` 执行实际效果。这样效果参数留在 Inspector 中，业务系统只负责解释效果类型。
