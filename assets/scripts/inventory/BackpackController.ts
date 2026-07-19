import {
    _decorator,
    AudioClip,
    AudioSource,
    BlockInputEvents,
    Button,
    Color,
    Component,
    EditBox,
    EventMouse,
    EventTouch,
    Graphics,
    instantiate,
    Label,
    LabelOutline,
    Layout,
    Node,
    ResolutionPolicy,
    Sprite,
    SpriteFrame,
    Slider,
    sys,
    tween,
    Tween,
    UIOpacity,
    UITransform,
    Vec2,
    Vec3,
    view,
} from 'cc';
import { ItemSlot } from './ItemSlot';
import {
    ArmorItemConfig,
    ConsumableItemConfig,
    INVENTORY_CATEGORIES,
    InventoryCategory,
    ItemConfigBase,
    ItemConfigCatalog,
    MaterialItemConfig,
    OtherItemConfig,
    QuestItemConfig,
    RARITY_NAMES,
    WeaponItemConfig,
} from './ItemCatalog';

const { ccclass, property } = _decorator;

@ccclass('DragFeelInspectorConfig')
export class DragFeelInspectorConfig {
    @property({
        displayName: '拖动触发距离',
        range: [1, 30, 1],
        slide: true,
    })
    public triggerDistance = 8;

    @property({
        displayName: '跟随强度',
        range: [30, 300, 1],
        slide: true,
    })
    public followStiffness = 150;

    @property({
        displayName: '跟随阻尼',
        range: [1, 40, 0.5],
        slide: true,
    })
    public followDamping = 19;

    @property({
        displayName: '最大倾斜角度',
        range: [0, 20, 0.5],
        slide: true,
    })
    public maximumTilt = 7;

    @property({
        displayName: '倾斜灵敏度',
        range: [0, 0.05, 0.001],
        slide: true,
    })
    public tiltSensitivity = 0.018;

    @property({
        displayName: '指针偏移 X',
        range: [-40, 40, 1],
        slide: true,
    })
    public pointerOffsetX = 14;

    @property({
        displayName: '指针偏移 Y',
        range: [-40, 40, 1],
        slide: true,
    })
    public pointerOffsetY = -14;

    @property({
        displayName: '拾取起始缩放',
        range: [0.4, 1.2, 0.01],
        slide: true,
    })
    public pickupStartScale = 0.76;

    @property({
        displayName: '拾取峰值缩放',
        range: [0.8, 1.5, 0.01],
        slide: true,
    })
    public pickupPeakScale = 1.14;

    @property({
        displayName: '拖拽保持缩放',
        range: [0.7, 1.3, 0.01],
        slide: true,
    })
    public draggingScale = 1.04;

    @property({
        displayName: '拾取动画时间',
        range: [0.03, 0.4, 0.01],
        slide: true,
    })
    public pickupDuration = 0.1;

    @property({
        displayName: '拾取回弹时间',
        range: [0.03, 0.4, 0.01],
        slide: true,
    })
    public pickupSettleDuration = 0.12;

    @property({
        displayName: '拖拽透明度',
        range: [80, 255, 1],
        slide: true,
    })
    public draggingOpacity = 245;

    @property({
        displayName: '目标格缩放',
        range: [1, 1.2, 0.005],
        slide: true,
    })
    public targetHoverScale = 1.045;

    @property({
        displayName: '目标格响应时间',
        range: [0.02, 0.3, 0.01],
        slide: true,
    })
    public targetHoverDuration = 0.08;

    @property({
        displayName: '落格缩放',
        range: [0.4, 1, 0.01],
        slide: true,
    })
    public dropScale = 0.72;

    @property({
        displayName: '落格动画时间',
        range: [0.05, 0.5, 0.01],
        slide: true,
    })
    public dropDuration = 0.16;

    @property({
        displayName: '落格淡出延迟',
        range: [0, 0.3, 0.01],
        slide: true,
    })
    public dropFadeDelay = 0.06;

    @property({
        displayName: '落格淡出时间',
        range: [0.03, 0.4, 0.01],
        slide: true,
    })
    public dropFadeDuration = 0.1;
}

@ccclass('BackpackButtonTextInspectorEntry')
export class BackpackButtonTextInspectorEntry {
    @property({ displayName: '按钮下方文字' })
    public label = '';

    @property({ displayName: '提示框标题' })
    public title = '';

    @property({
        displayName: '提示框说明',
        multiline: true,
    })
    public description = '';
}

@ccclass('BackpackButtonTextInspectorConfig')
export class BackpackButtonTextInspectorConfig {
    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '背包按钮',
    })
    public backpack = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '关闭按钮',
    })
    public close = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '堆叠按钮',
    })
    public stack = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '交换按钮',
    })
    public swap = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '合成按钮',
    })
    public craft = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '整理按钮',
        tooltip: '文字中的 {direction} 会在运行时替换为 ↑ 或 ↓。',
    })
    public sort = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '上一页按钮',
    })
    public previous = new BackpackButtonTextInspectorEntry();

    @property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '下一页按钮',
    })
    public next = new BackpackButtonTextInspectorEntry();

    @property({
        displayName: '按钮不可用提示',
        multiline: true,
        tooltip: '按钮不可点击时追加在提示框末尾；留空则不显示。',
    })
    public unavailableHint = '';
}

@ccclass('ItemTooltipTextInspectorConfig')
export class ItemTooltipTextInspectorConfig {
    @property({
        displayName: '详情框总模板',
        multiline: true,
        tooltip: '支持 {name}、{rarity}、{type}、{category}、{count}、{maxStack}、{weight}、{specificDetails}、{description}、{usage}、{useAction}、{discardAction}。',
    })
    public tooltipTemplate = '{name}  [{rarity}]\n'
        + '类型：{type} / 背包分类：{category}\n'
        + '数量：{count} / {maxStack} / 单件重量：{weight}\n'
        + '{specificDetails}\n'
        + '{description}\n'
        + '用途：{usage}\n'
        + '右键：{useAction} / {discardAction}';

    @property({
        displayName: '武器属性模板',
        tooltip: '支持 {attack}、{speed}、{range}。',
    })
    public weaponDetailTemplate =
        '武器属性：攻击 {attack} / 攻速 {speed} / 距离 {range}';

    @property({
        displayName: '防具属性模板',
        tooltip: '支持 {defense}、{magicResistance}。',
    })
    public armorDetailTemplate =
        '防具属性：防御 {defense} / 魔抗 {magicResistance}';

    @property({
        displayName: '消耗品属性模板',
        tooltip: '支持 {cooldown}、{useDuration}、{charges}。',
    })
    public consumableDetailTemplate =
        '使用属性：冷却 {cooldown}秒 / 耗时 {useDuration}秒 / 次数 {charges}';

    @property({
        displayName: '材料属性模板',
        tooltip: '支持 {level}、{quality}。',
    })
    public materialDetailTemplate = '材料属性：等级 {level} / 品质 {quality}';

    @property({
        displayName: '任务物品属性模板',
        tooltip: '支持 {quest}、{stage}。',
    })
    public questDetailTemplate = '任务属性：{quest} / 阶段 {stage}';

    @property({
        displayName: '其他物品属性模板',
        tooltip: '支持 {customCategory}、{action}。',
    })
    public otherDetailTemplate = '自定义属性：{customCategory} / {action}';

    @property({
        displayName: '额外属性整行模板',
        tooltip: '支持 {attributes}。',
    })
    public extraAttributesTemplate = '额外属性：{attributes}';

    @property({
        displayName: '单项额外属性模板',
        tooltip: '支持 {name}、{value}。',
    })
    public extraAttributeEntryTemplate = '{name} {value}';

    @property({
        displayName: '效果整行模板',
        tooltip: '支持 {effects}。',
    })
    public effectsTemplate = '效果：{effects}';

    @property({
        displayName: '单项效果模板',
        tooltip: '支持 {type}、{value}。',
    })
    public effectEntryTemplate = '{type} {value}';

    @property({ displayName: '多项内容分隔符' })
    public listSeparator = ' / ';

    @property({
        displayName: '百分比数值模板',
        tooltip: '支持 {value}。',
    })
    public percentageValueTemplate = '{value}%';

    @property({
        type: [String],
        displayName: '稀有度显示名称',
        tooltip: '索引依次对应普通、优秀、稀有、史诗、传说、特殊。',
    })
    public rarityNames: string[] = [
        '普通',
        '优秀',
        '稀有',
        '史诗',
        '传说',
        '特殊',
    ];

    @property({ displayName: '未知稀有度文字' })
    public unknownRarityText = '未知';

    @property({ displayName: '未分类文字' })
    public uncategorizedText = '未分类';

    @property({ displayName: '无用途说明文字' })
    public noUsageText = '暂无说明';

    @property({ displayName: '可使用文字' })
    public useActionText = '使用';

    @property({ displayName: '不可使用文字' })
    public cannotUseActionText = '不可使用';

    @property({ displayName: '可丢弃文字' })
    public discardActionText = '丢弃';

    @property({ displayName: '不可丢弃文字' })
    public cannotDiscardActionText = '不可丢弃';

    @property({ displayName: '未设置文字' })
    public unsetText = '未设置';

    @property({ displayName: '未绑定任务文字' })
    public unboundQuestText = '未绑定任务';

    @property({ displayName: '其他分类文字' })
    public otherCategoryText = '其他';

    @property({ displayName: '无专用动作文字' })
    public noDedicatedActionText = '无专用动作';
}

@ccclass('WorldInitialItemConfig')
export class WorldInitialItemConfig {
    @property({
        displayName: '物品 ID',
        min: 0,
        tooltip: '填写物品配置表中的 ID。无效 ID 会被跳过。',
    })
    public itemId = 0;

    @property({
        displayName: '生成数量',
        min: 1,
        tooltip: '进入场景时，这一组常驻测试物品包含的数量。',
    })
    public count = 1;
}

@ccclass('WorldItemScenarioConfig')
export class WorldItemScenarioConfig {
    @property({
        displayName: '启用测试',
        tooltip: '关闭后不创建测试区和场景物品；背包丢弃会直接移除物品。',
    })
    public enabled = true;

    @property({
        displayName: '生成初始物品',
        tooltip: '关闭后仍可把背包物品丢到场景，但进入场景时不会预放物品。',
    })
    public spawnInitialItems = true;

    @property({
        type: [WorldInitialItemConfig],
        displayName: '初始场景物品',
        tooltip: '按物品 ID 和数量配置进入场景时预放的常驻测试物品。',
    })
    public initialItems: WorldInitialItemConfig[] = [];

    @property({
        displayName: '掉落物存活时间（秒）',
        min: 0.1,
        tooltip: '从背包丢到场景中的物品，超过该时间后永久消失。',
    })
    public discardLifetime = 5;

    @property({
        displayName: '场景物品数量上限',
        min: 1,
        tooltip: '测试区同时允许存在的物品格数量，初始物品也计入上限。',
    })
    public maximumWorldItemCount = 8;

    @property({
        type: Vec2,
        displayName: '测试区位置',
        tooltip: '相对 Canvas 中心的位置。',
    })
    public areaPosition = new Vec2(-525, 0);

    @property({ displayName: '测试区宽度', min: 100 })
    public areaWidth = 220;

    @property({ displayName: '测试区高度', min: 180 })
    public areaHeight = 690;

    @property({ displayName: '每行列数', min: 1 })
    public columnCount = 2;

    @property({ displayName: '列间距', min: 1 })
    public columnSpacing = 104;

    @property({ displayName: '行间距', min: 1 })
    public rowSpacing = 118;

    @property({
        displayName: '首行 Y 坐标',
        tooltip: '第一行场景物品相对测试区中心的 Y 坐标。',
    })
    public firstRowY = 112;

    @property({
        displayName: '物品显示缩放',
        range: [0.2, 1.5, 0.01],
        slide: true,
    })
    public itemScale = 0.82;

    @property({ displayName: '测试区标题' })
    public title = '场景物品测试区';

    @property({
        displayName: '操作说明',
        multiline: true,
        tooltip: '可使用 {lifetime} 占位符，运行时会替换为掉落物存活秒数。',
    })
    public instructions = '点击物品：拾取到背包\n右键背包：选择数量丢弃\n掉落物 {lifetime} 秒后永久消失';
}

interface InventoryEntry {
    itemId: number;
    count: number;
}

interface WorldItemEntry {
    id: number;
    node: Node;
    slot: ItemSlot;
    itemId: number;
    count: number;
    remainingLifetime: number | null;
    totalLifetime: number | null;
    captionLabel: Label;
    opacity: UIOpacity;
    pickupLocked: boolean;
}

interface SavedInventoryEntry {
    itemId: number;
    count: number;
}

interface BackpackSaveData {
    version: number;
    currentPage: number;
    inventory: Array<SavedInventoryEntry | null>;
}

interface ButtonHelpDefinition {
    button: Button | null;
    label: string;
    title: string;
    description: string;
}

@ccclass('BackpackController')
export class BackpackController extends Component {
    private static readonly DESIGN_RESOLUTION_WIDTH = 1280;
    private static readonly DESIGN_RESOLUTION_HEIGHT = 720;
    private static readonly WORLD_SCENARIO_DEFAULTS = new WorldItemScenarioConfig();

    @property(Node)
    public slotGrid: Node | null = null;

    @property(Button)
    public backpackButton: Button | null = null;

    @property(Button)
    public closeButton: Button | null = null;

    @property({
        type: Node,
        displayName: '背包背景遮罩',
        tooltip: '背包打开时显示、关闭时隐藏的全屏遮罩节点。',
    })
    public backgroundDimmer: Node | null = null;

    @property(Button)
    public stackButton: Button | null = null;

    @property(Button)
    public swapButton: Button | null = null;

    @property(Button)
    public craftButton: Button | null = null;

    @property(Button)
    public previousButton: Button | null = null;

    @property(Button)
    public nextButton: Button | null = null;

    @property({
        type: BackpackButtonTextInspectorConfig,
        displayName: '按钮文字与提示框配置',
        tooltip: '统一调整按钮下方文字、鼠标悬停标题和说明。整理按钮支持 {direction} 占位符。',
    })
    public buttonTextConfig = new BackpackButtonTextInspectorConfig();

    @property({
        type: AudioClip,
        displayName: '背包翻页音效',
        tooltip: '上一页、下一页、页码圆点和拖拽越页时播放。',
    })
    public pageTurnSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '切换背包音效',
        tooltip: '切换背包分类时播放。',
    })
    public backpackSwitchSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '点击物品音效',
        tooltip: '点击或右键选中背包物品时播放。',
    })
    public itemClickSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '交换物品音效',
        tooltip: '拖拽或交换模式成功交换物品时播放。',
    })
    public itemSwapSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '关闭背包音效',
    })
    public backpackCloseSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '打开背包音效',
    })
    public backpackOpenSound: AudioClip | null = null;

    @property({
        type: AudioClip,
        displayName: '整理背包音效',
    })
    public backpackSortSound: AudioClip | null = null;

    @property({
        displayName: '背包音效音量',
        range: [0, 1, 0.05],
        slide: true,
    })
    public soundVolume = 0.85;

    @property([SpriteFrame])
    public rarityFrames: SpriteFrame[] = [];

    @property({
        type: [WeaponItemConfig],
        displayName: '武器物品配置',
        tooltip: '武器共有属性由装备/武器配置父类提供，具体数值都在此编辑。',
    })
    public weaponItems: WeaponItemConfig[] = [];

    @property({
        type: [ArmorItemConfig],
        displayName: '防具物品配置',
        tooltip: '防具共有属性由装备/防具配置父类提供，具体数值都在此编辑。',
    })
    public armorItems: ArmorItemConfig[] = [];

    @property({
        type: [ConsumableItemConfig],
        displayName: '消耗品配置',
        tooltip: '药剂、食物、卷轴等可使用物品的配置表。',
    })
    public consumableItems: ConsumableItemConfig[] = [];

    @property({
        type: [MaterialItemConfig],
        displayName: '材料物品配置',
        tooltip: '制作材料、货币等可堆叠资源的配置表。',
    })
    public materialItems: MaterialItemConfig[] = [];

    @property({
        type: [QuestItemConfig],
        displayName: '任务物品配置',
        tooltip: '任务关联、关键物品和任务完成处理均在此配置。',
    })
    public questItems: QuestItemConfig[] = [];

    @property({
        type: [OtherItemConfig],
        displayName: '其他物品配置',
        tooltip: '工具等不属于前述分类的物品配置表。',
    })
    public otherItems: OtherItemConfig[] = [];

    @property({
        type: DragFeelInspectorConfig,
        displayName: '拖拽手感配置',
        tooltip: '所有拖拽跟手、回弹、倾斜和落格参数都可在这里调整。',
    })
    public dragFeel: DragFeelInspectorConfig = new DragFeelInspectorConfig();

    @property({
        type: WorldItemScenarioConfig,
        displayName: '场景物品测试配置',
        tooltip: '统一配置测试开关、初始物品、掉落寿命和测试区布局。',
    })
    public worldScenario = new WorldItemScenarioConfig();

    private slots: ItemSlot[] = [];
    private inventory: Array<InventoryEntry | null> = [];
    private panelNode: Node | null = null;
    private inventoryBackdropNode: Node | null = null;
    private backpackVisible = true;
    private selectedLocalIndex = -1;
    private currentPage = 0;
    private readonly pageSize = 16;

    private swapMode = false;
    private swapSourceInventoryIndex = -1;

    private activeTouchLocalIndex = -1;
    private dragCandidate = false;
    private dragging = false;
    private dragSourceInventoryIndex = -1;
    private dragSourcePage = -1;
    private dragSourceLocalIndex = -1;
    private readonly dragStartLocation = new Vec2();
    private readonly lastDragLocation = new Vec2();
    private readonly lastDragScreenLocation = new Vec2();
    private dragIconNode: Node | null = null;
    private dragIconSprite: Sprite | null = null;
    private dragRaritySprite: Sprite | null = null;
    private dragCountLabel: Label | null = null;
    private dragIconOpacity: UIOpacity | null = null;
    private readonly dragTargetPosition = new Vec3();
    private readonly dragVelocity = new Vec3();
    private dragDropAnimating = false;
    private dragHoverLocalIndex = -1;
    private previousPageSwitchArmed = true;
    private nextPageSwitchArmed = true;
    private readonly saveVersion = 1;
    private readonly saveKey = 'backpack-design.inventory.v1';
    private readonly buttonHelpByNode = new Map<Node, ButtonHelpDefinition>();
    private tooltipNode: Node | null = null;
    private tooltipLabel: Label | null = null;
    private itemTooltipNode: Node | null = null;
    private itemTooltipLabel: Label | null = null;
    private contextMenuNode: Node | null = null;
    private contextUseButton: Button | null = null;
    private contextDiscardButton: Button | null = null;
    private sortButton: Button | null = null;
    private sortDirectionLabel: Label | null = null;
    private sortAscending = true;
    private uiAudioSource: AudioSource | null = null;
    private filterBarNode: Node | null = null;
    private searchEditBox: EditBox | null = null;
    private rarityFilterButton: Button | null = null;
    private rarityMenuNode: Node | null = null;
    private filterStatusLabel: Label | null = null;
    private categorySelectionIndicator: Node | null = null;
    private categoryTransitioning = false;
    private pendingInventoryCategory: InventoryCategory | null = null;
    private slotGridRestPosition: Vec3 | null = null;
    private pageIndicatorNode: Node | null = null;
    private readonly pageDotNodes: Node[] = [];
    private readonly pageDotPageIndices: number[] = [];
    private readonly maxVisiblePageDots = 5;
    private lastPageIndicatorPage = -1;
    private capacityControlNode: Node | null = null;
    private capacityLabel: Label | null = null;
    private capacityExpansionOverlay: Node | null = null;
    private readonly categoryButtons = new Map<InventoryCategory, Button>();
    private readonly rarityOptionButtons = new Map<number | null, Button>();
    private viewInventoryIndices: number[] = [];
    private filteredItemCount = 0;
    private activeCategory: InventoryCategory = '全部';
    private activeRarityIndex: number | null = null;
    private searchQuery = '';
    private quantityDialogNode: Node | null = null;
    private quantityDialogLabel: Label | null = null;
    private quantitySlider: Slider | null = null;
    private quantityEditBox: EditBox | null = null;
    private quantityConfirmButton: Button | null = null;
    private pendingQuantityOperation: 'use' | 'discard' | null = null;
    private pendingQuantityIndex = -1;
    private pendingQuantityMaximum = 1;
    private pendingQuantity = 1;
    private worldItemLayer: Node | null = null;
    private worldItemArea: Node | null = null;
    private worldStatusLabel: Label | null = null;
    private readonly worldItems: WorldItemEntry[] = [];
    private nextWorldItemId = 1;
    private itemCatalog = new ItemConfigCatalog();

    protected onLoad(): void {
        this.lockDesignResolution();
    }

    protected start(): void {
        if (!this.slotGrid) {
            console.error('BackpackController: SlotGrid 未绑定');
            return;
        }

        this.uiAudioSource = this.getComponent(AudioSource)
            ?? this.node.addComponent(AudioSource);
        this.slots = this.slotGrid.children
            .map((node) => node.getComponent(ItemSlot))
            .filter((slot): slot is ItemSlot => slot !== null);
        this.panelNode = this.node.getChildByName('Panel');
        this.backgroundDimmer ??=
            this.node.parent?.getChildByName('BackgroundDimmer') ?? null;
        this.dragFeel ??= new DragFeelInspectorConfig();
        this.normalizeWorldScenarioConfig();
        this.normalizeButtonTextConfig();
        this.rebuildItemCatalog();

        this.slots.forEach((slot) => this.bindSlotTouchEvents(slot));

        if (!this.loadInventory()) {
            this.createDemoInventory();
            this.saveInventory();
        }
        this.ensureSortButton();
        this.ensurePreviousButton();
        this.ensureFilterControls();
        this.ensureInventoryBackdrop();
        this.ensurePageIndicator();
        this.ensureCapacityControl();
        if (this.worldScenario.enabled) {
            this.ensureWorldItemTestArea();
            this.spawnInitialWorldItems();
        }
        this.bindButtons();
        this.setupButtonHelp();
        this.renderCurrentPage();
        this.setBackpackVisible(true);
    }

    private lockDesignResolution(): void {
        const width = BackpackController.DESIGN_RESOLUTION_WIDTH;
        const height = BackpackController.DESIGN_RESOLUTION_HEIGHT;

        view.setDesignResolutionSize(width, height, ResolutionPolicy.FIXED_WIDTH);
    }

    private normalizeButtonTextConfig(): void {
        const defaults = new BackpackButtonTextInspectorConfig();
        this.buttonTextConfig ??= defaults;
        this.buttonTextConfig.backpack = this.normalizeButtonTextEntry(
            this.buttonTextConfig.backpack,
            defaults.backpack,
        );
        this.buttonTextConfig.close = this.normalizeButtonTextEntry(
            this.buttonTextConfig.close,
            defaults.close,
        );
        this.buttonTextConfig.stack = this.normalizeButtonTextEntry(
            this.buttonTextConfig.stack,
            defaults.stack,
        );
        this.buttonTextConfig.swap = this.normalizeButtonTextEntry(
            this.buttonTextConfig.swap,
            defaults.swap,
        );
        this.buttonTextConfig.craft = this.normalizeButtonTextEntry(
            this.buttonTextConfig.craft,
            defaults.craft,
        );
        this.buttonTextConfig.sort = this.normalizeButtonTextEntry(
            this.buttonTextConfig.sort,
            defaults.sort,
        );
        this.buttonTextConfig.previous = this.normalizeButtonTextEntry(
            this.buttonTextConfig.previous,
            defaults.previous,
        );
        this.buttonTextConfig.next = this.normalizeButtonTextEntry(
            this.buttonTextConfig.next,
            defaults.next,
        );
        this.buttonTextConfig.unavailableHint ??= defaults.unavailableHint;
    }

    private normalizeWorldScenarioConfig(): void {
        const defaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
        this.worldScenario ??= new WorldItemScenarioConfig();
        this.worldScenario.initialItems ??= [];
        this.worldScenario.areaPosition ??= new Vec2(
            defaults.areaPosition.x,
            defaults.areaPosition.y,
        );
        this.worldScenario.title ??= defaults.title;
        this.worldScenario.instructions ??= defaults.instructions;
    }

    private getWorldScenarioNumber(
        value: number,
        fallback: number,
        minimum: number,
    ): number {
        const number = Number(value);
        return Number.isFinite(number) ? Math.max(minimum, number) : fallback;
    }

    private getWorldDiscardLifetime(): number {
        return this.getWorldScenarioNumber(
            this.worldScenario.discardLifetime,
            BackpackController.WORLD_SCENARIO_DEFAULTS.discardLifetime,
            0.1,
        );
    }

    private getWorldMaximumItemCount(): number {
        return Math.max(1, Math.floor(this.getWorldScenarioNumber(
            this.worldScenario.maximumWorldItemCount,
            BackpackController.WORLD_SCENARIO_DEFAULTS.maximumWorldItemCount,
            1,
        )));
    }

    private getWorldColumnCount(): number {
        return Math.max(1, Math.floor(this.getWorldScenarioNumber(
            this.worldScenario.columnCount,
            BackpackController.WORLD_SCENARIO_DEFAULTS.columnCount,
            1,
        )));
    }

    private getWorldItemScale(): number {
        return Math.min(1.5, this.getWorldScenarioNumber(
            this.worldScenario.itemScale,
            BackpackController.WORLD_SCENARIO_DEFAULTS.itemScale,
            0.2,
        ));
    }

    private formatWorldSeconds(seconds: number): string {
        return Number.isInteger(seconds)
            ? String(seconds)
            : seconds.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    }

    private getWorldInstructions(): string {
        return this.worldScenario.instructions.replace(
            /\{lifetime\}/g,
            this.formatWorldSeconds(this.getWorldDiscardLifetime()),
        );
    }

    private normalizeButtonTextEntry(
        entry: BackpackButtonTextInspectorEntry | null,
        defaults: BackpackButtonTextInspectorEntry,
    ): BackpackButtonTextInspectorEntry {
        const normalized = entry ?? new BackpackButtonTextInspectorEntry();
        normalized.label ??= defaults.label;
        normalized.title ??= defaults.title;
        normalized.description ??= defaults.description;
        return normalized;
    }

    private rebuildItemCatalog(): void {
        try {
            this.itemCatalog = new ItemConfigCatalog({
                weapons: this.weaponItems,
                armors: this.armorItems,
                consumables: this.consumableItems,
                materials: this.materialItems,
                quests: this.questItems,
                others: this.otherItems,
            });
        } catch (error) {
            console.error('物品配置表校验失败，请检查非法或重复 ID。', error);
            this.itemCatalog = new ItemConfigCatalog();
            return;
        }

        if (this.itemCatalog.size === 0) {
            console.error('物品配置表为空，请在 BackpackController 的分类配置中添加物品。');
            return;
        }

        this.itemCatalog.getAll().forEach((config) => {
            if (!config.itemName.trim()) {
                console.warn(`物品 ${config.id} 尚未配置名称。`);
            }
            if (!config.icon) {
                console.warn(`物品 ${config.id}（${config.itemName}）尚未配置图标。`);
            }
            if (!Number.isFinite(config.maxStack) || config.maxStack < 1) {
                console.warn(
                    `物品 ${config.id}（${config.itemName}）的最大堆叠数无效，将按 1 处理。`,
                );
            }
        });
    }

    private getItemConfig(itemId: number): ItemConfigBase | null {
        return this.itemCatalog.get(itemId) ?? null;
    }

    private getItemRarityIndex(itemId: number): number {
        const rarity = Math.floor(Number(this.getItemConfig(itemId)?.rarity ?? 0));
        return Math.max(0, Math.min(RARITY_NAMES.length - 1, rarity));
    }

    private getItemMaxStack(itemId: number): number {
        const configured = Math.floor(Number(
            this.getItemConfig(itemId)?.maxStack ?? 1,
        ));
        return Math.max(1, Number.isFinite(configured) ? configured : 1);
    }

    private getItemSpecificDetailLines(config: ItemConfigBase): string[] {
        const lines: string[] = [];

        if (config instanceof WeaponItemConfig) {
            lines.push(
                `武器属性：攻击 ${config.attackPower} / 攻速 ${config.attackSpeed} / 距离 ${config.attackRange}`,
            );
        } else if (config instanceof ArmorItemConfig) {
            lines.push(
                `防具属性：防御 ${config.defense} / 魔抗 ${config.magicResistance}`,
            );
        } else if (config instanceof ConsumableItemConfig) {
            lines.push(
                `使用属性：冷却 ${config.cooldown}秒 / 耗时 ${config.useDuration}秒 / 次数 ${config.charges}`,
            );
        } else if (config instanceof MaterialItemConfig) {
            lines.push(
                `材料属性：等级 ${config.materialLevel} / 品质 ${config.materialQuality || '未设置'}`,
            );
        } else if (config instanceof QuestItemConfig) {
            lines.push(
                `任务属性：${config.questId || '未绑定任务'} / 阶段 ${config.questStage}`,
            );
        } else if (config instanceof OtherItemConfig) {
            lines.push(
                `自定义属性：${config.customCategory || '其他'} / ${config.interactionAction || '无专用动作'}`,
            );
        }

        const extraAttributes = config.extraAttributes
            .filter((attribute) => attribute.displayName || attribute.key)
            .map((attribute) => {
                const name = attribute.displayName || attribute.key;
                if (attribute.textValue) {
                    return `${name} ${attribute.textValue}`;
                }
                const value = attribute.isPercentage
                    ? `${Math.round(attribute.value * 10000) / 100}%`
                    : String(attribute.value);
                return `${name} ${value}`;
            });
        if (extraAttributes.length > 0) {
            lines.push(`额外属性：${extraAttributes.join(' / ')}`);
        }

        const effects = config.effects
            .filter((effect) => effect.effectType)
            .map((effect) => `${effect.effectType} ${effect.value}`);
        if (effects.length > 0) {
            lines.push(`效果：${effects.join(' / ')}`);
        }

        return lines;
    }

    protected update(deltaTime: number): void {
        if (this.worldScenario.enabled) {
            this.updateWorldItems(Math.max(0, deltaTime));
        }

        if (
            !this.dragging
            || this.dragDropAnimating
            || !this.dragIconNode?.active
        ) {
            return;
        }

        const dt = Math.min(Math.max(deltaTime, 0), 1 / 30);
        const current = this.dragIconNode.position;
        const stiffness = Math.max(1, this.dragFeel.followStiffness);
        const damping = Math.exp(
            -Math.max(0.1, this.dragFeel.followDamping) * dt,
        );

        this.dragVelocity.x += (
            this.dragTargetPosition.x - current.x
        ) * stiffness * dt;
        this.dragVelocity.y += (
            this.dragTargetPosition.y - current.y
        ) * stiffness * dt;
        this.dragVelocity.x *= damping;
        this.dragVelocity.y *= damping;

        this.dragIconNode.setPosition(
            current.x + this.dragVelocity.x * dt,
            current.y + this.dragVelocity.y * dt,
            0,
        );

        const maximumTilt = Math.max(0, this.dragFeel.maximumTilt);
        const targetTilt = Math.max(
            -maximumTilt,
            Math.min(
                maximumTilt,
                -this.dragVelocity.x * this.dragFeel.tiltSensitivity,
            ),
        );
        const currentTilt = this.dragIconNode.eulerAngles.z;
        const tiltBlend = 1 - Math.exp(-13 * dt);
        this.dragIconNode.setRotationFromEuler(
            0,
            0,
            currentTilt + (targetTilt - currentTilt) * tiltBlend,
        );
    }

    protected onDestroy(): void {
        this.saveInventory();
        this.slots.forEach((slot) => this.unbindSlotTouchEvents(slot));
        this.teardownButtonHelp();
        this.unbindButtons();

        if (this.dragIconNode?.isValid) {
            this.dragIconNode.destroy();
        }
        if (this.worldItemLayer?.isValid) {
            this.worldItemLayer.destroy();
        }
        this.worldItems.length = 0;
    }

    private ensureWorldItemTestArea(): void {
        if (!this.worldScenario.enabled) {
            return;
        }
        if (this.worldItemLayer?.isValid && this.worldItemArea?.isValid) {
            return;
        }

        const canvas = this.node.parent;
        const canvasTransform = canvas?.getComponent(UITransform);
        if (!canvas || !canvasTransform || !this.slots[0]) {
            console.warn('场景物品测试区创建失败：缺少 Canvas 或物品格模板。');
            return;
        }

        const layer = new Node('WorldItemLayer');
        layer.layer = this.node.layer;
        canvas.addChild(layer);
        layer.setSiblingIndex(this.node.getSiblingIndex());
        layer.addComponent(UITransform).setContentSize(
            canvasTransform.contentSize.width,
            canvasTransform.contentSize.height,
        );

        const scenarioDefaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
        const areaWidth = this.getWorldScenarioNumber(
            this.worldScenario.areaWidth,
            scenarioDefaults.areaWidth,
            100,
        );
        const areaHeight = this.getWorldScenarioNumber(
            this.worldScenario.areaHeight,
            scenarioDefaults.areaHeight,
            180,
        );
        const areaPosition = this.worldScenario.areaPosition;
        const halfWidth = areaWidth / 2;
        const halfHeight = areaHeight / 2;
        const labelWidth = Math.max(80, areaWidth - 12);

        const area = new Node('WorldItemTestArea');
        area.layer = this.node.layer;
        layer.addChild(area);
        area.setPosition(areaPosition.x, areaPosition.y, 0);
        area.addComponent(UITransform).setContentSize(areaWidth, areaHeight);
        area.addComponent(BlockInputEvents);

        const background = area.addComponent(Graphics);
        background.fillColor = new Color(20, 28, 35, 218);
        background.strokeColor = new Color(120, 205, 180, 255);
        background.lineWidth = 3;
        background.roundRect(
            -halfWidth + 2,
            -halfHeight + 7,
            areaWidth - 4,
            areaHeight - 14,
            14,
        );
        background.fill();
        background.stroke();

        const title = this.createWorldLabel(
            area,
            'WorldItemTitle',
            this.worldScenario.title,
            0,
            halfHeight - 43,
            labelWidth,
            34,
            24,
            new Color(207, 255, 232, 255),
        );
        title.isBold = true;

        this.createWorldLabel(
            area,
            'WorldItemInstructions',
            this.getWorldInstructions(),
            0,
            halfHeight - 95,
            labelWidth,
            70,
            16,
            new Color(225, 236, 239, 255),
        );

        this.worldStatusLabel = this.createWorldLabel(
            area,
            'WorldItemStatus',
            '正在准备场景物品…',
            0,
            halfHeight - 155,
            labelWidth,
            42,
            16,
            new Color(255, 225, 153, 255),
        );

        this.worldItemLayer = layer;
        this.worldItemArea = area;
    }

    private createWorldLabel(
        parent: Node,
        name: string,
        text: string,
        x: number,
        y: number,
        width: number,
        height: number,
        fontSize: number,
        color: Color,
    ): Label {
        const node = new Node(name);
        node.layer = this.node.layer;
        parent.addChild(node);
        node.setPosition(x, y, 0);
        node.addComponent(UITransform).setContentSize(width, height);

        const label = node.addComponent(Label);
        label.string = text;
        label.fontSize = fontSize;
        label.lineHeight = fontSize + 4;
        label.enableWrapText = true;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = color;
        return label;
    }

    private spawnInitialWorldItems(): void {
        if (
            !this.worldScenario.enabled
            || !this.worldItemArea
            || this.worldItems.length > 0
        ) {
            return;
        }

        if (!this.worldScenario.spawnInitialItems) {
            this.setWorldStatus(
                '初始物品生成已关闭；仍可从背包丢弃物品到这里。',
                new Color(164, 244, 195, 255),
            );
            return;
        }

        let spawnedCount = 0;
        this.worldScenario.initialItems.forEach((initialItem) => {
            const itemId = Math.floor(Number(initialItem?.itemId));
            const count = Math.floor(Number(initialItem?.count));
            if (
                Number.isFinite(itemId)
                && itemId >= 0
                && Number.isFinite(count)
                && count > 0
                && this.spawnWorldItem(itemId, count, null, false)
            ) {
                spawnedCount += 1;
            }
        });

        this.setWorldStatus(
            spawnedCount > 0
                ? '绿色文字为常驻测试物品，点击即可拾取。'
                : '初始物品列表为空或配置无效，请在测试配置中调整。',
            spawnedCount > 0
                ? new Color(164, 244, 195, 255)
                : new Color(255, 142, 132, 255),
        );
    }

    private spawnWorldItem(
        itemId: number,
        requestedCount: number,
        lifetimeSeconds: number | null,
        announce = true,
    ): boolean {
        if (!this.worldScenario.enabled) {
            return false;
        }
        const area = this.worldItemArea;
        const template = this.slots[0]?.node;
        const config = this.getItemConfig(itemId);
        const normalizedCount = Math.floor(Number(requestedCount));
        const count = Number.isFinite(normalizedCount) ? normalizedCount : 0;
        if (!area || !template || !config?.icon || count <= 0) {
            this.setWorldStatus(
                '掉落失败：请检查测试区、物品 ID、图标和数量配置。',
                new Color(255, 142, 132, 255),
            );
            return false;
        }
        if (this.worldItems.length >= this.getWorldMaximumItemCount()) {
            this.setWorldStatus(
                '掉落区已满，请先拾取物品或等待掉落物消失。',
                new Color(255, 177, 105, 255),
            );
            return false;
        }

        const node = instantiate(template);
        node.name = `WorldItem_${this.nextWorldItemId}`;
        node.layer = this.node.layer;
        area.addChild(node);
        const itemScale = this.getWorldItemScale();
        const spawnScale = itemScale * 0.68;
        node.setScale(spawnScale, spawnScale, 1);

        const slot = node.getComponent(ItemSlot);
        if (!slot) {
            node.destroy();
            this.setWorldStatus(
                '掉落失败：物品格模板缺少 ItemSlot 组件。',
                new Color(255, 142, 132, 255),
            );
            return false;
        }

        const rarity = this.rarityFrames[
            this.getItemRarityIndex(itemId)
        ] ?? null;
        slot.showItem(config.icon, count, rarity);

        const button = node.getComponent(Button) ?? node.addComponent(Button);
        button.target = node;
        button.interactable = true;
        button.transition = Button.Transition.SCALE;
        button.zoomScale = 1.08;

        const captionLabel = this.createWorldLabel(
            node,
            'WorldItemCaption',
            '',
            0,
            -66,
            112,
            38,
            14,
            new Color(164, 244, 195, 255),
        );
        const opacity = node.getComponent(UIOpacity)
            ?? node.addComponent(UIOpacity);
        opacity.opacity = 255;

        const id = this.nextWorldItemId++;
        const normalizedLifetime = lifetimeSeconds === null
            ? null
            : this.getWorldScenarioNumber(
                lifetimeSeconds,
                this.getWorldDiscardLifetime(),
                0.1,
            );
        const entry: WorldItemEntry = {
            id,
            node,
            slot,
            itemId,
            count,
            remainingLifetime: normalizedLifetime,
            totalLifetime: normalizedLifetime,
            captionLabel,
            opacity,
            pickupLocked: false,
        };
        node.on(
            Button.EventType.CLICK,
            () => this.pickupWorldItem(id),
            this,
        );
        this.worldItems.push(entry);
        this.updateWorldItemVisual(entry);
        this.layoutWorldItems();

        Tween.stopAllByTarget(node);
        tween(node)
            .to(
                0.18,
                { scale: new Vec3(itemScale, itemScale, 1) },
                { easing: 'backOut' },
            )
            .start();

        if (announce) {
            const lifetime = entry.remainingLifetime ?? 0;
            this.setWorldStatus(
                `${config.itemName} ×${count} 已掉落，${lifetime.toFixed(1)} 秒后永久消失。`,
                new Color(255, 202, 118, 255),
            );
            console.log(
                `场景掉落：${config.itemName} ×${count}，${lifetime.toFixed(1)} 秒后永久消失`,
            );
        }
        return true;
    }

    private updateWorldItems(deltaTime: number): void {
        if (deltaTime <= 0 || this.worldItems.length === 0) {
            return;
        }

        [...this.worldItems].forEach((entry) => {
            if (entry.remainingLifetime === null || entry.pickupLocked) {
                return;
            }

            entry.remainingLifetime -= deltaTime;
            if (entry.remainingLifetime <= 0) {
                this.expireWorldItem(entry);
                return;
            }
            this.updateWorldItemVisual(entry);
        });
    }

    private updateWorldItemVisual(entry: WorldItemEntry): void {
        const itemName = this.getItemConfig(entry.itemId)?.itemName
            ?? `未知物品 ${entry.itemId}`;
        if (entry.remainingLifetime === null) {
            entry.captionLabel.string = `${itemName}\n点击拾取`;
            entry.captionLabel.color = new Color(164, 244, 195, 255);
            entry.opacity.opacity = 255;
            return;
        }

        const remaining = Math.max(0, entry.remainingLifetime);
        entry.captionLabel.string = `${itemName}\n${remaining.toFixed(1)} 秒`;
        entry.captionLabel.color = remaining <= 2
            ? new Color(255, 132, 116, 255)
            : new Color(255, 212, 130, 255);
        entry.opacity.opacity = remaining < 1
            ? Math.max(70, Math.round(255 * remaining))
            : 255;
    }

    private layoutWorldItems(): void {
        const scenarioDefaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
        const columnCount = this.getWorldColumnCount();
        const columnSpacing = this.getWorldScenarioNumber(
            this.worldScenario.columnSpacing,
            scenarioDefaults.columnSpacing,
            1,
        );
        const rowSpacing = this.getWorldScenarioNumber(
            this.worldScenario.rowSpacing,
            scenarioDefaults.rowSpacing,
            1,
        );
        const firstRowY = Number.isFinite(Number(this.worldScenario.firstRowY))
            ? Number(this.worldScenario.firstRowY)
            : scenarioDefaults.firstRowY;
        const firstColumnX = -((columnCount - 1) * columnSpacing) / 2;
        this.worldItems.forEach((entry, index) => {
            const column = index % columnCount;
            const row = Math.floor(index / columnCount);
            entry.node.setPosition(
                firstColumnX + column * columnSpacing,
                firstRowY - row * rowSpacing,
                0,
            );
        });
    }

    private pickupWorldItem(id: number): void {
        const entry = this.worldItems.find((candidate) => candidate.id === id);
        if (!entry || entry.pickupLocked || !entry.node.isValid) {
            return;
        }

        entry.pickupLocked = true;
        const added = this.addItemToInventory(entry.itemId, entry.count);
        if (added <= 0) {
            entry.pickupLocked = false;
            this.setWorldStatus(
                '拾取失败：背包已满，请先整理或扩容。',
                new Color(255, 142, 132, 255),
            );
            return;
        }

        const config = this.getItemConfig(entry.itemId);
        const itemName = config?.itemName ?? `未知物品 ${entry.itemId}`;
        entry.count -= added;
        if (entry.count <= 0) {
            this.removeWorldItem(entry);
        } else {
            const rarity = this.rarityFrames[
                this.getItemRarityIndex(entry.itemId)
            ] ?? null;
            if (config?.icon) {
                entry.slot.showItem(config.icon, entry.count, rarity);
            }
            entry.pickupLocked = false;
            this.updateWorldItemVisual(entry);
        }

        this.renderCurrentPage();
        this.saveInventory();
        this.setWorldStatus(
            entry.count <= 0
                ? `已拾取 ${itemName} ×${added}。`
                : `背包空间不足，拾取 ${itemName} ×${added}，场景中剩余 ×${entry.count}。`,
            new Color(164, 244, 195, 255),
        );
        console.log(`拾取场景物品：${itemName} ×${added}`);
    }

    private addItemToInventory(itemId: number, requestedCount: number): number {
        const config = this.getItemConfig(itemId);
        let remaining = Math.max(0, Math.floor(requestedCount));
        if (!config?.icon || remaining <= 0) {
            return 0;
        }
        const maxStack = this.getItemMaxStack(itemId);

        for (const entry of this.inventory) {
            if (!entry || entry.itemId !== itemId || entry.count >= maxStack) {
                continue;
            }
            const transfer = Math.min(remaining, maxStack - entry.count);
            entry.count += transfer;
            remaining -= transfer;
            if (remaining <= 0) {
                break;
            }
        }

        for (let index = 0; index < this.inventory.length && remaining > 0; index++) {
            if (this.inventory[index]) {
                continue;
            }
            const transfer = Math.min(remaining, maxStack);
            this.inventory[index] = {
                itemId,
                count: transfer,
            };
            remaining -= transfer;
        }

        return Math.max(0, Math.floor(requestedCount)) - remaining;
    }

    private expireWorldItem(entry: WorldItemEntry): void {
        const itemName = this.getItemConfig(entry.itemId)?.itemName
            ?? `未知物品 ${entry.itemId}`;
        const count = entry.count;
        const lifetime = entry.totalLifetime ?? this.getWorldDiscardLifetime();
        this.removeWorldItem(entry);
        this.setWorldStatus(
            `${itemName} ×${count} 已超过 ${this.formatWorldSeconds(lifetime)} 秒并永久消失。`,
            new Color(255, 132, 116, 255),
        );
        console.log(`场景掉落永久消失：${itemName} ×${count}`);
    }

    private removeWorldItem(entry: WorldItemEntry): void {
        const index = this.worldItems.indexOf(entry);
        if (index >= 0) {
            this.worldItems.splice(index, 1);
        }
        Tween.stopAllByTarget(entry.node);
        if (entry.node.isValid) {
            entry.node.destroy();
        }
        this.layoutWorldItems();
    }

    private setWorldStatus(message: string, color: Color): void {
        if (!this.worldStatusLabel) {
            return;
        }
        this.worldStatusLabel.string = message;
        this.worldStatusLabel.color = color;
    }

    private bindSlotTouchEvents(slot: ItemSlot): void {
        slot.node.on(Node.EventType.TOUCH_START, this.onSlotTouchStart, this);
        slot.node.on(Node.EventType.TOUCH_MOVE, this.onSlotTouchMove, this);
        slot.node.on(Node.EventType.TOUCH_END, this.onSlotTouchEnd, this);
        slot.node.on(Node.EventType.TOUCH_CANCEL, this.onSlotTouchCancel, this);
        slot.node.on(Node.EventType.MOUSE_ENTER, this.onSlotMouseEnter, this);
        slot.node.on(Node.EventType.MOUSE_MOVE, this.onSlotMouseMove, this);
        slot.node.on(Node.EventType.MOUSE_LEAVE, this.onSlotMouseLeave, this);
        slot.node.on(Node.EventType.MOUSE_UP, this.onSlotMouseUp, this);
    }

    private unbindSlotTouchEvents(slot: ItemSlot): void {
        slot.node.off(Node.EventType.TOUCH_START, this.onSlotTouchStart, this);
        slot.node.off(Node.EventType.TOUCH_MOVE, this.onSlotTouchMove, this);
        slot.node.off(Node.EventType.TOUCH_END, this.onSlotTouchEnd, this);
        slot.node.off(Node.EventType.TOUCH_CANCEL, this.onSlotTouchCancel, this);
        slot.node.off(Node.EventType.MOUSE_ENTER, this.onSlotMouseEnter, this);
        slot.node.off(Node.EventType.MOUSE_MOVE, this.onSlotMouseMove, this);
        slot.node.off(Node.EventType.MOUSE_LEAVE, this.onSlotMouseLeave, this);
        slot.node.off(Node.EventType.MOUSE_UP, this.onSlotMouseUp, this);
    }

    private onSlotTouchStart(event: EventTouch): void {
        if (this.dragDropAnimating) {
            return;
        }
        this.hideContextMenu();
        this.hideRarityMenu();
        const localIndex = this.findEventSlotIndex(event);
        if (localIndex < 0) {
            return;
        }

        this.activeTouchLocalIndex = localIndex;
        this.dragCandidate = false;

        if (this.swapMode) {
            return;
        }

        const entry = this.getEntryAtLocalIndex(localIndex);
        if (!entry) {
            return;
        }

        const location = event.getUILocation();
        this.dragStartLocation.set(location);
        this.lastDragLocation.set(location);
        this.lastDragScreenLocation.set(event.getLocation());
        this.dragCandidate = true;
        this.dragSourceLocalIndex = localIndex;
        this.dragSourceInventoryIndex = this.getInventoryIndex(localIndex);
        this.dragSourcePage = this.currentPage;
    }

    private onSlotTouchMove(event: EventTouch): void {
        if (
            this.dragDropAnimating
            || (!this.dragCandidate && !this.dragging)
        ) {
            return;
        }

        const location = event.getUILocation();
        const screenLocation = event.getLocation();
        this.lastDragLocation.set(location);
        this.lastDragScreenLocation.set(screenLocation);
        if (!this.dragging) {
            const distance = Vec2.distance(location, this.dragStartLocation);
            if (distance < this.dragFeel.triggerDistance) {
                return;
            }

            this.beginDrag(location);
        }

        this.updateDragPosition(location);
        this.updateDragPageSwitch(screenLocation);
        this.updateDragHover(screenLocation);
    }

    private onSlotTouchEnd(event: EventTouch): void {
        const location = event.getUILocation();
        const screenLocation = event.getLocation();
        this.lastDragLocation.set(location);
        this.lastDragScreenLocation.set(screenLocation);
        if (this.dragging) {
            this.finishDrag(screenLocation);
            return;
        }

        const localIndex = this.activeTouchLocalIndex;
        this.resetTouchState();

        if (localIndex < 0) {
            return;
        }

        if (this.swapMode) {
            this.finishSwap(localIndex);
            return;
        }

        this.toggleSlotSelection(localIndex);
    }

    private onSlotTouchCancel(event: EventTouch): void {
        const screenLocation = event.getLocation();
        this.lastDragScreenLocation.set(screenLocation);
        if (this.dragging) {
            this.finishDrag(screenLocation);
            return;
        }

        this.resetTouchState();
    }

    private findEventSlotIndex(event: EventTouch): number {
        const targetNode = event.currentTarget as unknown as Node;
        return this.slots.findIndex((slot) => slot.node === targetNode);
    }

    private onSlotMouseEnter(event: EventMouse): void {
        if (this.dragging) {
            return;
        }

        const targetNode = event.currentTarget as unknown as Node;
        const localIndex = this.slots.findIndex(
            (slot) => slot.node === targetNode,
        );
        const entry = localIndex >= 0
            ? this.getEntryAtLocalIndex(localIndex)
            : null;

        if (!entry || !this.itemTooltipNode || !this.itemTooltipLabel) {
            this.hideItemTooltip();
            return;
        }

        const config = this.getItemConfig(entry.itemId);
        if (!config) {
            this.hideItemTooltip();
            return;
        }
        const category = this.itemCatalog.getCategory(entry.itemId) ?? '其他';
        const rarityName = RARITY_NAMES[
            this.getItemRarityIndex(entry.itemId)
        ] ?? '未知';

        this.hideButtonTooltip();
        this.itemTooltipLabel.string = [
            `${config.itemName}  [${rarityName}]`,
            `类型：${config.itemType || '未分类'} / 背包分类：${category}`,
            `数量：${entry.count} / ${this.getItemMaxStack(entry.itemId)} / 单件重量：${config.weight}`,
            ...this.getItemSpecificDetailLines(config),
            config.description,
            `用途：${config.usage || '暂无说明'}`,
            `右键：${config.canUse ? '使用' : '不可使用'} / ${config.canDiscard ? '丢弃' : '不可丢弃'}`,
        ].filter((line) => line.length > 0).join('\n');
        this.itemTooltipNode.active = true;
        this.itemTooltipNode.setSiblingIndex(this.node.children.length - 1);
        this.updateItemTooltipPosition(event.getUILocation());
    }

    private onSlotMouseMove(event: EventMouse): void {
        if (this.itemTooltipNode?.active) {
            this.updateItemTooltipPosition(event.getUILocation());
        }
    }

    private onSlotMouseLeave(): void {
        this.hideItemTooltip();
    }

    private onSlotMouseUp(event: EventMouse): void {
        if (event.getButton() !== EventMouse.BUTTON_RIGHT || this.dragging) {
            return;
        }

        const targetNode = event.currentTarget as unknown as Node;
        const localIndex = this.slots.findIndex(
            (slot) => slot.node === targetNode,
        );
        if (localIndex < 0 || !this.getEntryAtLocalIndex(localIndex)) {
            this.hideContextMenu();
            return;
        }

        this.playUiSound(this.itemClickSound);
        this.setSelectedIndex(localIndex);
        this.showContextMenu(event.getUILocation());
        event.propagationStopped = true;
    }

    private toggleSlotSelection(localIndex: number): void {
        if (!this.getEntryAtLocalIndex(localIndex)) {
            return;
        }

        const nextIndex = this.selectedLocalIndex === localIndex
            ? -1
            : localIndex;
        this.playUiSound(this.itemClickSound);
        this.setSelectedIndex(nextIndex);
    }

    private setSelectedIndex(index: number): void {
        if (this.selectedLocalIndex >= 0) {
            this.setSlotSelected(this.selectedLocalIndex, false);
        }

        this.selectedLocalIndex = index;

        if (this.selectedLocalIndex >= 0) {
            this.setSlotSelected(this.selectedLocalIndex, true);
            console.log(
                `选择背包格子：${this.getInventoryIndex(this.selectedLocalIndex)}`,
            );
        }

        this.updateActionButtons();
    }

    private setSlotSelected(index: number, selected: boolean): void {
        const sprite = this.slots[index]?.getComponent(Sprite);
        if (sprite) {
            sprite.color = selected
                ? new Color(196, 164, 104, 245)
                : new Color(92, 88, 108, 224);
        }
    }

    private beginDrag(location: Vec2): void {
        const entry = this.inventory[this.dragSourceInventoryIndex];
        const config = entry ? this.getItemConfig(entry.itemId) : null;
        if (!entry || !config?.icon) {
            this.resetTouchState();
            return;
        }

        this.cancelSwapMode();
        this.hideItemTooltip();
        this.hideContextMenu();
        this.setSelectedIndex(-1);
        this.dragging = true;
        this.dragDropAnimating = false;
        this.dragCandidate = false;
        this.ensureDragIcon();

        if (this.dragIconNode && this.dragIconSprite) {
            this.dragIconSprite.spriteFrame = config.icon;
            if (this.dragRaritySprite) {
                this.dragRaritySprite.spriteFrame =
                    this.rarityFrames[this.getItemRarityIndex(entry.itemId)]
                    ?? null;
                this.dragRaritySprite.node.active =
                    this.dragRaritySprite.spriteFrame !== null;
            }
            if (this.dragCountLabel) {
                this.dragCountLabel.string = entry.count > 1
                    ? String(entry.count)
                    : '';
            }
            this.dragIconNode.active = true;
            this.dragIconNode.setSiblingIndex(this.node.children.length - 1);
            Tween.stopAllByTarget(this.dragIconNode);
            this.dragIconNode.setRotationFromEuler(0, 0, 0);
            this.dragIconNode.setScale(
                this.dragFeel.pickupStartScale,
                this.dragFeel.pickupStartScale,
                1,
            );
            if (this.dragIconOpacity) {
                Tween.stopAllByTarget(this.dragIconOpacity);
                this.dragIconOpacity.opacity = 0;
                tween(this.dragIconOpacity)
                    .to(
                        this.dragFeel.pickupDuration,
                        { opacity: this.dragFeel.draggingOpacity },
                        { easing: 'quadOut' },
                    )
                    .start();
            }
            tween(this.dragIconNode)
                .to(
                    this.dragFeel.pickupDuration,
                    {
                        scale: new Vec3(
                            this.dragFeel.pickupPeakScale,
                            this.dragFeel.pickupPeakScale,
                            1,
                        ),
                    },
                    { easing: 'quadOut' },
                )
                .to(
                    this.dragFeel.pickupSettleDuration,
                    {
                        scale: new Vec3(
                            this.dragFeel.draggingScale,
                            this.dragFeel.draggingScale,
                            1,
                        ),
                    },
                    { easing: 'backOut' },
                )
                .start();
        }

        this.slots[this.dragSourceLocalIndex]?.setContentVisible(false);
        this.updateDragPosition(location, true);
    }

    private ensureDragIcon(): void {
        if (
            this.dragIconNode?.isValid
            && this.dragIconSprite
            && this.dragRaritySprite
            && this.dragCountLabel
        ) {
            return;
        }

        const dragNode = new Node('DragItemIcon');
        dragNode.layer = this.node.layer;
        this.node.addChild(dragNode);

        const transform = dragNode.addComponent(UITransform);
        transform.setContentSize(96, 96);

        const shadow = dragNode.addComponent(Graphics);
        shadow.fillColor = new Color(0, 0, 0, 105);
        shadow.roundRect(-40, -43, 86, 86, 12);
        shadow.fill();
        shadow.strokeColor = new Color(255, 238, 195, 70);
        shadow.lineWidth = 2;
        shadow.roundRect(-43, -40, 86, 86, 12);
        shadow.stroke();

        const iconNode = new Node('Icon');
        iconNode.layer = this.node.layer;
        dragNode.addChild(iconNode);
        iconNode.addComponent(UITransform).setContentSize(64, 64);
        const sprite = iconNode.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;

        const rarityNode = new Node('RarityFrame');
        rarityNode.layer = this.node.layer;
        dragNode.addChild(rarityNode);
        rarityNode.addComponent(UITransform).setContentSize(96, 96);
        const raritySprite = rarityNode.addComponent(Sprite);
        raritySprite.sizeMode = Sprite.SizeMode.CUSTOM;

        const countNode = new Node('Count');
        countNode.layer = this.node.layer;
        dragNode.addChild(countNode);
        countNode.setPosition(29, -29, 0);
        countNode.addComponent(UITransform).setContentSize(34, 26);
        const countLabel = countNode.addComponent(Label);
        countLabel.fontSize = 20;
        countLabel.lineHeight = 23;
        countLabel.isBold = true;
        countLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        countLabel.verticalAlign = Label.VerticalAlign.CENTER;
        countLabel.color = new Color(255, 250, 230, 255);
        const countOutline = countNode.addComponent(LabelOutline);
        countOutline.color = new Color(40, 24, 16, 255);
        countOutline.width = 3;

        const opacity = dragNode.addComponent(UIOpacity);

        this.dragIconNode = dragNode;
        this.dragIconSprite = sprite;
        this.dragRaritySprite = raritySprite;
        this.dragCountLabel = countLabel;
        this.dragIconOpacity = opacity;
    }

    private updateDragPosition(location: Vec2, immediate = false): void {
        if (!this.dragIconNode) {
            return;
        }

        const rootTransform = this.node.getComponent(UITransform);
        if (!rootTransform) {
            return;
        }

        const localPosition = rootTransform.convertToNodeSpaceAR(
            new Vec3(location.x, location.y, 0),
        );
        this.dragTargetPosition.set(
            localPosition.x + this.dragFeel.pointerOffsetX,
            localPosition.y + this.dragFeel.pointerOffsetY,
            0,
        );
        if (immediate) {
            this.dragVelocity.set(0, 0, 0);
            this.dragIconNode.setPosition(this.dragTargetPosition);
        }
    }

    private updateDragPageSwitch(screenLocation: Vec2): void {
        const pageCount = this.getPageCount();
        if (
            (!this.previousButton && !this.nextButton)
            || pageCount <= 1
        ) {
            return;
        }

        const previousTransform = this.previousButton?.node.getComponent(
            UITransform,
        );
        const nextTransform = this.nextButton?.node.getComponent(UITransform);
        const overPreviousButton =
            previousTransform?.hitTest(screenLocation) ?? false;
        const overNextButton = nextTransform?.hitTest(screenLocation) ?? false;

        if (overPreviousButton && this.previousPageSwitchArmed) {
            this.previousPageSwitchArmed = false;
            this.clearDragHover();
            this.currentPage = (this.currentPage - 1 + pageCount) % pageCount;
            this.playUiSound(this.pageTurnSound);
            this.renderCurrentPage();
            console.log(`拖拽切换到背包第 ${this.currentPage + 1} 页`);
        } else if (overNextButton && this.nextPageSwitchArmed) {
            this.nextPageSwitchArmed = false;
            this.clearDragHover();
            this.currentPage = (this.currentPage + 1) % pageCount;
            this.playUiSound(this.pageTurnSound);
            this.renderCurrentPage();
            console.log(`拖拽切换到背包第 ${this.currentPage + 1} 页`);
        }

        if (!overPreviousButton) {
            this.previousPageSwitchArmed = true;
        }
        if (!overNextButton) {
            this.nextPageSwitchArmed = true;
        }
    }

    private updateDragHover(screenLocation: Vec2): void {
        const localIndex = this.findSlotAtLocation(screenLocation);
        const validTarget = localIndex >= 0
            && this.resolveTargetInventoryIndex(localIndex) >= 0;
        const nextHoverIndex = validTarget ? localIndex : -1;
        if (nextHoverIndex === this.dragHoverLocalIndex) {
            return;
        }

        this.clearDragHover();
        if (nextHoverIndex >= 0) {
            const targetNode = this.slots[nextHoverIndex]?.node;
            const sprite = targetNode?.getComponent(Sprite);
            if (sprite) {
                sprite.color = new Color(132, 151, 184, 245);
            }
            if (targetNode) {
                Tween.stopAllByTarget(targetNode);
                tween(targetNode)
                    .to(
                        this.dragFeel.targetHoverDuration,
                        {
                            scale: new Vec3(
                                this.dragFeel.targetHoverScale,
                                this.dragFeel.targetHoverScale,
                                1,
                            ),
                        },
                        { easing: 'quadOut' },
                    )
                    .start();
            }
            this.dragHoverLocalIndex = nextHoverIndex;
        }
    }

    private clearDragHover(): void {
        if (this.dragHoverLocalIndex >= 0) {
            const targetNode = this.slots[this.dragHoverLocalIndex]?.node;
            this.setSlotSelected(this.dragHoverLocalIndex, false);
            if (targetNode) {
                Tween.stopAllByTarget(targetNode);
                tween(targetNode)
                    .to(
                        this.dragFeel.targetHoverDuration,
                        { scale: new Vec3(1, 1, 1) },
                        { easing: 'quadOut' },
                    )
                    .start();
            }
        }
        this.dragHoverLocalIndex = -1;
    }

    private finishDrag(screenLocation: Vec2, forceReturn = false): void {
        if (this.dragDropAnimating) {
            return;
        }

        const targetLocalIndex = forceReturn
            ? -1
            : this.findSlotAtLocation(screenLocation);
        const sourceInventoryIndex = this.dragSourceInventoryIndex;
        const sourcePage = this.dragSourcePage;
        let targetInventoryIndex = -1;
        let destinationLocalIndex = targetLocalIndex;
        let returningToSource = forceReturn || targetLocalIndex < 0;

        if (!returningToSource && sourceInventoryIndex >= 0) {
            targetInventoryIndex = this.resolveTargetInventoryIndex(
                targetLocalIndex,
            );
            returningToSource = targetInventoryIndex < 0;
        }

        this.clearDragHover();
        if (returningToSource && sourcePage >= 0) {
            this.currentPage = sourcePage;
            destinationLocalIndex = this.dragSourceLocalIndex;
            this.renderCurrentPage();
        }

        const completeDrop = (): void => {
            if (
                !returningToSource
                && sourceInventoryIndex >= 0
                && targetInventoryIndex >= 0
                && sourceInventoryIndex !== targetInventoryIndex
            ) {
                const sourceEntry = this.inventory[sourceInventoryIndex];
                this.inventory[sourceInventoryIndex] =
                    this.inventory[targetInventoryIndex];
                this.inventory[targetInventoryIndex] = sourceEntry;
                this.playUiSound(this.itemSwapSound);
                console.log(
                    `拖拽交换：${sourceInventoryIndex} <-> ${targetInventoryIndex}`,
                );
            } else if (returningToSource) {
                console.log('拖拽取消，物品返回原格子');
            }

            this.endDragVisual();
            this.resetTouchState();
            this.renderCurrentPage();
            this.saveInventory();
        };

        this.animateDragToSlot(destinationLocalIndex, completeDrop);
    }

    private animateDragToSlot(
        localIndex: number,
        onComplete: () => void,
    ): void {
        const destination = this.getSlotPositionInRoot(localIndex);
        if (!this.dragIconNode || !destination) {
            onComplete();
            return;
        }

        this.dragDropAnimating = true;
        this.dragVelocity.set(0, 0, 0);
        Tween.stopAllByTarget(this.dragIconNode);
        this.dragIconNode.setRotationFromEuler(0, 0, 0);
        if (this.dragIconOpacity) {
            Tween.stopAllByTarget(this.dragIconOpacity);
            tween(this.dragIconOpacity)
                .delay(this.dragFeel.dropFadeDelay)
                .to(
                    this.dragFeel.dropFadeDuration,
                    { opacity: 0 },
                    { easing: 'quadIn' },
                )
                .start();
        }

        tween(this.dragIconNode)
            .to(
                this.dragFeel.dropDuration,
                {
                    position: destination,
                    scale: new Vec3(
                        this.dragFeel.dropScale,
                        this.dragFeel.dropScale,
                        1,
                    ),
                },
                { easing: 'cubicOut' },
            )
            .call(onComplete)
            .start();
    }

    private getSlotPositionInRoot(localIndex: number): Vec3 | null {
        const slot = this.slots[localIndex];
        const rootTransform = this.node.getComponent(UITransform);
        if (!slot?.node.activeInHierarchy || !rootTransform) {
            return null;
        }

        return rootTransform.convertToNodeSpaceAR(
            slot.node.worldPosition.clone(),
        );
    }

    private findSlotAtLocation(screenLocation: Vec2): number {
        for (let index = 0; index < this.slots.length; index++) {
            if (!this.slots[index].node.activeInHierarchy) {
                continue;
            }
            const transform = this.slots[index].node.getComponent(UITransform);
            if (transform?.hitTest(screenLocation)) {
                return index;
            }
        }

        return -1;
    }

    private endDragVisual(): void {
        this.clearDragHover();
        if (this.dragIconNode) {
            Tween.stopAllByTarget(this.dragIconNode);
            this.dragIconNode.setScale(1, 1, 1);
            this.dragIconNode.setRotationFromEuler(0, 0, 0);
            this.dragIconNode.active = false;
        }
        if (this.dragIconOpacity) {
            Tween.stopAllByTarget(this.dragIconOpacity);
            this.dragIconOpacity.opacity = 255;
        }
        if (this.dragIconSprite) {
            this.dragIconSprite.spriteFrame = null;
        }
        if (this.dragRaritySprite) {
            this.dragRaritySprite.spriteFrame = null;
            this.dragRaritySprite.node.active = false;
        }
        if (this.dragCountLabel) {
            this.dragCountLabel.string = '';
        }

        this.dragging = false;
        this.dragDropAnimating = false;
        this.dragCandidate = false;
        this.dragSourceInventoryIndex = -1;
        this.dragSourcePage = -1;
        this.dragSourceLocalIndex = -1;
        this.dragVelocity.set(0, 0, 0);
        this.previousPageSwitchArmed = true;
        this.nextPageSwitchArmed = true;
    }

    private resetTouchState(): void {
        this.activeTouchLocalIndex = -1;
        this.dragCandidate = false;
    }

    private updateActionButtons(): void {
        const enabled = this.selectedLocalIndex >= 0 && !this.swapMode;

        if (this.stackButton) {
            this.stackButton.interactable = enabled;
        }
        if (this.swapButton) {
            this.swapButton.interactable = enabled;
        }
        if (this.craftButton) {
            this.craftButton.interactable = enabled && this.canCraftSelectedItem();
        }
        if (this.previousButton) {
            this.previousButton.interactable = this.getPageCount() > 1;
        }
        if (this.nextButton) {
            this.nextButton.interactable = this.getPageCount() > 1;
        }
        if (this.sortButton) {
            this.sortButton.interactable = this.inventory.some(
                (entry) => entry !== null,
            ) && !this.swapMode;
        }
    }

    private ensureSortButton(): void {
        if (this.sortButton?.isValid || !this.stackButton) {
            return;
        }

        const buttonGroup = this.stackButton.node.parent;
        if (!buttonGroup) {
            return;
        }

        const sortNode = instantiate(this.stackButton.node);
        sortNode.name = 'SortButton';
        buttonGroup.addChild(sortNode);

        const sortButton = sortNode.getComponent(Button);
        if (!sortButton) {
            sortNode.destroy();
            return;
        }

        sortButton.target = sortNode;
        sortButton.interactable = true;
        this.sortButton = sortButton;

        const directionNode = new Node('SortDirectionLabel');
        directionNode.layer = sortNode.layer;
        sortNode.addChild(directionNode);
        directionNode.setPosition(0, 8, 0);
        directionNode.addComponent(UITransform).setContentSize(72, 56);

        const directionLabel = directionNode.addComponent(Label);
        directionLabel.fontSize = 42;
        directionLabel.lineHeight = 46;
        directionLabel.isBold = true;
        directionLabel.enableWrapText = false;
        directionLabel.overflow = Label.Overflow.CLAMP;
        directionLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        directionLabel.verticalAlign = Label.VerticalAlign.CENTER;
        directionLabel.color = new Color(255, 235, 155, 255);

        const outline = directionNode.addComponent(LabelOutline);
        outline.color = new Color(62, 29, 14, 255);
        outline.width = 3;
        this.sortDirectionLabel = directionLabel;

        const groupTransform = buttonGroup.getComponent(UITransform);
        const layout = buttonGroup.getComponent(Layout);
        const buttonHeight = sortNode.getComponent(UITransform)
            ?.contentSize.height ?? 128;
        const columnCount = Math.max(1, layout?.constraintNum ?? 2);
        const rowCount = Math.ceil(buttonGroup.children.length / columnCount);
        const spacingY = layout?.spacingY ?? 12;
        const requiredHeight = rowCount * buttonHeight
            + Math.max(0, rowCount - 1) * spacingY;
        if (groupTransform) {
            groupTransform.setContentSize(
                groupTransform.contentSize.width,
                requiredHeight,
            );
        }
        layout?.updateLayout();
        this.updateSortButtonVisual();
    }

    private ensurePreviousButton(): void {
        if (!this.nextButton) {
            return;
        }

        const buttonGroup = this.nextButton.node.parent;
        if (!buttonGroup) {
            return;
        }

        const existingPreviousNodes = buttonGroup.children.filter(
            (node) => node.name === 'PreviousButton',
        );
        if (
            !this.previousButton
            || this.previousButton.node.parent !== buttonGroup
        ) {
            this.previousButton = existingPreviousNodes
                .map((node) => node.getComponent(Button))
                .find((button): button is Button => button !== null)
                ?? null;
        }

        if (!this.previousButton) {
            const previousNode = instantiate(this.nextButton.node);
            previousNode.name = 'PreviousButton';
            previousNode.setScale(-1, 1, 1);
            buttonGroup.addChild(previousNode);
            this.previousButton = previousNode.getComponent(Button);
        }

        if (!this.previousButton) {
            return;
        }

        const previousNode = this.previousButton.node;
        buttonGroup.children
            .filter(
                (node) => node.name === 'PreviousButton'
                    && node !== previousNode,
            )
            .forEach((node) => {
                node.removeFromParent();
                node.destroy();
            });

        const previousScale = previousNode.scale;
        previousNode.setScale(
            previousScale.x === 0 ? -1 : -Math.abs(previousScale.x),
            previousScale.y,
            previousScale.z,
        );

        previousNode.setSiblingIndex(buttonGroup.children.length - 1);
        this.nextButton.node.setSiblingIndex(buttonGroup.children.length - 1);

        const layout = buttonGroup.getComponent(Layout);
        const groupTransform = buttonGroup.getComponent(UITransform);
        const buttonHeight = this.nextButton.node.getComponent(UITransform)
            ?.contentSize.height ?? 128;
        const columnCount = Math.max(1, layout?.constraintNum ?? 2);
        const rowCount = Math.ceil(buttonGroup.children.length / columnCount);
        const spacingY = layout?.spacingY ?? 12;
        const requiredHeight = rowCount * buttonHeight
            + Math.max(0, rowCount - 1) * spacingY;
        if (groupTransform) {
            groupTransform.setContentSize(
                groupTransform.contentSize.width,
                requiredHeight,
            );
        }
        layout?.updateLayout();
    }

    private updateSortButtonVisual(): void {
        const arrow = this.sortAscending ? '↑' : '↓';
        if (this.sortDirectionLabel) {
            this.sortDirectionLabel.string = arrow;
        }
        if (this.sortButton) {
            const configuredText = this.createConfiguredButtonHelpDefinition(
                this.sortButton,
                this.buttonTextConfig.sort,
            );
            this.createButtonTextLabel(
                this.sortButton.node,
                configuredText.label,
            );

            const definition = this.buttonHelpByNode.get(this.sortButton.node);
            if (definition) {
                definition.label = configuredText.label;
                definition.title = configuredText.title;
                definition.description = configuredText.description;
            }
        }
    }

    private ensureFilterControls(): void {
        if (this.filterBarNode?.isValid) {
            return;
        }

        const filterBar = new Node('InventoryFilterBar');
        filterBar.layer = this.node.layer;
        this.node.addChild(filterBar);
        filterBar.setPosition(-80, 295, 0);
        filterBar.addComponent(UITransform).setContentSize(620, 96);
        this.filterBarNode = filterBar;

        const tabWidth = 78;
        const tabSpacing = 8;
        const totalWidth = INVENTORY_CATEGORIES.length * tabWidth
            + (INVENTORY_CATEGORIES.length - 1) * tabSpacing;
        const startX = -totalWidth * 0.5 + tabWidth * 0.5;

        INVENTORY_CATEGORIES.forEach((category, index) => {
            const button = this.createFilterButton(
                filterBar,
                `Category_${category}`,
                category,
                startX + index * (tabWidth + tabSpacing),
                0,
                tabWidth,
                36,
                () => this.selectInventoryCategory(category),
            );
            this.categoryButtons.set(category, button);
        });

        const selectionIndicator = new Node('CategorySelectionIndicator');
        selectionIndicator.layer = this.node.layer;
        filterBar.addChild(selectionIndicator);
        selectionIndicator.addComponent(UITransform).setContentSize(58, 6);
        const indicatorGraphics = selectionIndicator.addComponent(Graphics);
        indicatorGraphics.fillColor = new Color(255, 225, 155, 255);
        indicatorGraphics.roundRect(-29, -2, 58, 4, 2);
        indicatorGraphics.fill();
        this.categorySelectionIndicator = selectionIndicator;
        this.moveCategorySelectionIndicator(this.activeCategory, false);

        const searchNode = new Node('ItemNameSearch');
        searchNode.layer = this.node.layer;
        filterBar.addChild(searchNode);
        searchNode.setPosition(-120, -52, 0);
        searchNode.addComponent(UITransform).setContentSize(300, 38);

        const searchBackground = searchNode.addComponent(Graphics);
        searchBackground.fillColor = new Color(24, 19, 17, 245);
        searchBackground.strokeColor = new Color(224, 167, 96, 255);
        searchBackground.lineWidth = 2;
        searchBackground.roundRect(-150, -19, 300, 38, 7);
        searchBackground.fill();
        searchBackground.stroke();

        const searchEditBox = searchNode.addComponent(EditBox);
        searchEditBox.inputMode = EditBox.InputMode.SINGLE_LINE;
        searchEditBox.maxLength = 20;
        searchEditBox.placeholder = '输入物品名称…';
        searchEditBox.string = '';
        this.configureSearchLabel(searchEditBox.textLabel, false);
        this.configureSearchLabel(searchEditBox.placeholderLabel, true);
        searchNode.on(
            EditBox.EventType.TEXT_CHANGED,
            this.onSearchTextChanged,
            this,
        );
        this.searchEditBox = searchEditBox;

        this.createFilterButton(
            filterBar,
            'ResetFilterButton',
            '重置',
            70,
            -52,
            60,
            38,
            this.resetInventoryFilters,
        );

        this.rarityFilterButton = this.createFilterButton(
            filterBar,
            'RarityFilterButton',
            '稀有度：全部',
            195,
            -52,
            170,
            38,
            this.toggleRarityMenu,
        );

        const statusNode = new Node('FilterStatus');
        statusNode.layer = this.node.layer;
        filterBar.addChild(statusNode);
        statusNode.setPosition(-220, -88, 0);
        statusNode.addComponent(UITransform).setContentSize(220, 22);
        const statusLabel = statusNode.addComponent(Label);
        statusLabel.fontSize = 16;
        statusLabel.lineHeight = 19;
        statusLabel.enableWrapText = false;
        statusLabel.overflow = Label.Overflow.CLAMP;
        statusLabel.horizontalAlign = Label.HorizontalAlign.LEFT;
        statusLabel.verticalAlign = Label.VerticalAlign.CENTER;
        statusLabel.color = new Color(255, 231, 185, 255);
        this.filterStatusLabel = statusLabel;

        this.ensureRarityMenu(filterBar);

        if (this.panelNode) {
            this.panelNode.setPosition(
                this.panelNode.position.x,
                -35,
                this.panelNode.position.z,
            );
        }
        if (this.slotGrid) {
            this.slotGrid.setPosition(
                this.slotGrid.position.x,
                -35,
                this.slotGrid.position.z,
            );
            this.slotGridRestPosition = this.slotGrid.position.clone();
        }

        this.updateFilterVisuals();
    }

    private ensureInventoryBackdrop(): void {
        if (!this.slotGrid) {
            return;
        }

        const gridTransform = this.slotGrid.getComponent(UITransform);
        let backdrop = this.node.getChildByName('InventoryBackdrop');
        const createdAtRuntime = !backdrop;
        if (!backdrop) {
            backdrop = new Node('InventoryBackdrop');
            backdrop.layer = this.node.layer;
            this.node.addChild(backdrop);
            backdrop.setPosition(this.slotGrid.position);
        }

        let transform = backdrop.getComponent(UITransform);
        if (!transform) {
            transform = backdrop.addComponent(UITransform);
            transform.setContentSize(
                (gridTransform?.contentSize.width ?? 426) + 30,
                (gridTransform?.contentSize.height ?? 417) + 30,
            );
        }

        let graphics = backdrop.getComponent(Graphics);
        if (!graphics) {
            graphics = backdrop.addComponent(Graphics);
            graphics.fillColor = new Color(15, 18, 28, 255);
            graphics.strokeColor = new Color(181, 164, 205, 90);
            graphics.lineWidth = 2;
        }

        let opacity = backdrop.getComponent(UIOpacity);
        if (!opacity) {
            opacity = backdrop.addComponent(UIOpacity);
            opacity.opacity = 224;
        }

        const width = transform.contentSize.width;
        const height = transform.contentSize.height;
        graphics.clear();
        graphics.roundRect(
            -width * 0.5,
            -height * 0.5,
            width,
            height,
            14,
        );
        graphics.fill();
        graphics.roundRect(
            -width * 0.5,
            -height * 0.5,
            width,
            height,
            14,
        );
        graphics.stroke();

        if (createdAtRuntime) {
            backdrop.setSiblingIndex(this.slotGrid.getSiblingIndex());
        }
        this.inventoryBackdropNode = backdrop;
        this.applySlotBackgroundStyle();
    }

    private applySlotBackgroundStyle(): void {
        this.slots.forEach((slot) => {
            const sprite = slot.node.getComponent(Sprite);
            if (sprite) {
                sprite.color = new Color(92, 88, 108, 224);
            }
        });
    }

    private configureSearchLabel(
        label: Label | null,
        placeholder: boolean,
    ): void {
        if (!label) {
            return;
        }

        label.node.getComponent(UITransform)?.setAnchorPoint(0, 1);
        label.fontSize = 18;
        label.lineHeight = 22;
        label.enableWrapText = false;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.LEFT;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = placeholder
            ? new Color(155, 139, 122, 255)
            : new Color(255, 244, 218, 255);
    }

    private createFilterButton(
        parent: Node,
        name: string,
        text: string,
        x: number,
        y: number,
        width: number,
        height: number,
        callback: () => void,
    ): Button {
        const node = new Node(name);
        node.layer = this.node.layer;
        parent.addChild(node);
        node.setPosition(x, y, 0);
        node.addComponent(UITransform).setContentSize(width, height);
        node.addComponent(Graphics);

        const button = node.addComponent(Button);
        button.target = node;
        button.interactable = true;
        node.on(Button.EventType.CLICK, callback, this);

        const labelNode = new Node('FilterLabel');
        labelNode.layer = this.node.layer;
        node.addChild(labelNode);
        labelNode.addComponent(UITransform).setContentSize(
            Math.max(20, width - 10),
            Math.max(20, height - 4),
        );

        const label = labelNode.addComponent(Label);
        label.string = text;
        label.fontSize = height <= 32 ? 15 : 17;
        label.lineHeight = height <= 32 ? 18 : 20;
        label.isBold = true;
        label.enableWrapText = false;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;

        this.redrawFilterButton(button, false);
        return button;
    }

    private redrawFilterButton(button: Button, selected: boolean): void {
        const transform = button.node.getComponent(UITransform);
        const graphics = button.node.getComponent(Graphics);
        const label = button.node
            .getChildByName('FilterLabel')
            ?.getComponent(Label);
        if (!transform || !graphics) {
            return;
        }

        const width = transform.contentSize.width;
        const height = transform.contentSize.height;
        graphics.clear();
        graphics.fillColor = selected
            ? new Color(154, 103, 48, 255)
            : new Color(55, 39, 29, 245);
        graphics.strokeColor = selected
            ? new Color(255, 218, 142, 255)
            : new Color(184, 129, 75, 255);
        graphics.lineWidth = selected ? 3 : 2;
        graphics.roundRect(-width * 0.5, -height * 0.5, width, height, 7);
        graphics.fill();
        graphics.stroke();

        if (label) {
            label.color = selected
                ? new Color(255, 247, 207, 255)
                : new Color(222, 207, 183, 255);
        }
    }

    private setFilterButtonText(button: Button | null, text: string): void {
        const label = button?.node
            .getChildByName('FilterLabel')
            ?.getComponent(Label);
        if (label) {
            label.string = text;
        }
    }

    private ensureRarityMenu(parent: Node): void {
        const menu = new Node('RarityFilterMenu');
        menu.layer = this.node.layer;
        parent.addChild(menu);
        menu.setPosition(195, -185, 0);
        menu.addComponent(UITransform).setContentSize(190, 246);
        menu.addComponent(BlockInputEvents);

        const background = menu.addComponent(Graphics);
        background.fillColor = new Color(31, 23, 19, 252);
        background.strokeColor = new Color(238, 181, 105, 255);
        background.lineWidth = 3;
        background.roundRect(-95, -123, 190, 246, 9);
        background.fill();
        background.stroke();

        const options: Array<{ index: number | null; label: string }> = [
            { index: null, label: '全部稀有度' },
            ...RARITY_NAMES.map((label, index) => ({ index, label })),
        ];
        options.forEach((option, optionIndex) => {
            const button = this.createFilterButton(
                menu,
                `RarityOption_${option.index ?? 'all'}`,
                option.label,
                0,
                102 - optionIndex * 34,
                170,
                30,
                () => this.selectRarity(option.index),
            );
            this.rarityOptionButtons.set(option.index, button);
        });

        menu.active = false;
        this.rarityMenuNode = menu;
    }

    private selectInventoryCategory(category: InventoryCategory): void {
        this.hideRarityMenu();
        if (!this.categoryTransitioning && category === this.activeCategory) {
            return;
        }

        this.moveCategorySelectionIndicator(category, true);
        this.animateCategoryButton(category);

        if (this.categoryTransitioning) {
            this.pendingInventoryCategory = category;
            return;
        }

        this.startCategoryTransition(category);
    }

    private startCategoryTransition(category: InventoryCategory): void {
        this.playUiSound(this.backpackSwitchSound);
        if (!this.slotGrid) {
            this.activeCategory = category;
            this.applyInventoryFilterChange();
            return;
        }

        this.categoryTransitioning = true;
        this.pendingInventoryCategory = null;
        this.cancelActiveInteraction();
        this.hideItemTooltip();
        this.hideContextMenu();

        const grid = this.slotGrid;
        const opacity = grid.getComponent(UIOpacity)
            ?? grid.addComponent(UIOpacity);
        const basePosition = this.slotGridRestPosition?.clone()
            ?? grid.position.clone();
        const exitPosition = new Vec3(
            basePosition.x - 24,
            basePosition.y,
            basePosition.z,
        );
        const enterPosition = new Vec3(
            basePosition.x + 28,
            basePosition.y,
            basePosition.z,
        );

        Tween.stopAllByTarget(grid);
        Tween.stopAllByTarget(opacity);
        this.resetSlotTransitionState();
        grid.setPosition(basePosition);
        opacity.opacity = 255;

        tween(opacity)
            .to(0.14, { opacity: 0 }, { easing: 'quadIn' })
            .delay(0.01)
            .to(0.21, { opacity: 255 }, { easing: 'quadOut' })
            .start();

        tween(grid)
            .to(
                0.14,
                { position: exitPosition },
                { easing: 'quadIn' },
            )
            .call(() => {
                this.activeCategory = category;
                grid.setPosition(enterPosition);
                this.applyInventoryFilterChange();
                this.animateVisibleSlotsIn();
            })
            .to(
                0.22,
                { position: basePosition },
                { easing: 'cubicOut' },
            )
            .call(() => {
                grid.setPosition(basePosition);
                opacity.opacity = 255;
                this.categoryTransitioning = false;

                const pendingCategory = this.pendingInventoryCategory;
                this.pendingInventoryCategory = null;
                if (
                    pendingCategory !== null
                    && pendingCategory !== this.activeCategory
                ) {
                    this.moveCategorySelectionIndicator(
                        pendingCategory,
                        true,
                    );
                    this.animateCategoryButton(pendingCategory);
                    this.startCategoryTransition(pendingCategory);
                }
            })
            .start();
    }

    private resetSlotTransitionState(): void {
        this.slots.forEach((slot) => {
            const opacity = slot.node.getComponent(UIOpacity);
            Tween.stopAllByTarget(slot.node);
            slot.node.setScale(1, 1, 1);
            if (opacity) {
                Tween.stopAllByTarget(opacity);
                opacity.opacity = 255;
            }
        });
    }

    private animateVisibleSlotsIn(): void {
        let visibleIndex = 0;
        this.slots.forEach((slot) => {
            if (!slot.node.activeInHierarchy) {
                return;
            }

            const delay = Math.min(visibleIndex, 15) * 0.012;
            const opacity = slot.node.getComponent(UIOpacity)
                ?? slot.node.addComponent(UIOpacity);
            Tween.stopAllByTarget(slot.node);
            Tween.stopAllByTarget(opacity);
            slot.node.setScale(0.92, 0.92, 1);
            opacity.opacity = 0;

            tween(opacity)
                .delay(delay)
                .to(0.17, { opacity: 255 }, { easing: 'quadOut' })
                .start();
            tween(slot.node)
                .delay(delay)
                .to(
                    0.2,
                    { scale: new Vec3(1, 1, 1) },
                    { easing: 'backOut' },
                )
                .start();
            visibleIndex++;
        });
    }

    private moveCategorySelectionIndicator(
        category: InventoryCategory,
        animated: boolean,
    ): void {
        const indicator = this.categorySelectionIndicator;
        const button = this.categoryButtons.get(category);
        if (!indicator || !button) {
            return;
        }

        const targetPosition = new Vec3(button.node.position.x, -21, 0);
        Tween.stopAllByTarget(indicator);
        if (!animated) {
            indicator.setPosition(targetPosition);
            return;
        }

        tween(indicator)
            .to(
                0.22,
                { position: targetPosition },
                { easing: 'cubicOut' },
            )
            .start();
    }

    private animateCategoryButton(category: InventoryCategory): void {
        const button = this.categoryButtons.get(category);
        if (!button) {
            return;
        }

        const node = button.node;
        Tween.stopAllByTarget(node);
        node.setScale(0.94, 0.94, 1);
        tween(node)
            .to(
                0.1,
                { scale: new Vec3(1.08, 1.08, 1) },
                { easing: 'quadOut' },
            )
            .to(
                0.14,
                { scale: new Vec3(1, 1, 1) },
                { easing: 'backOut' },
            )
            .start();
    }

    private stopCategoryTransition(): void {
        this.categoryTransitioning = false;
        this.pendingInventoryCategory = null;
        if (this.slotGrid) {
            Tween.stopAllByTarget(this.slotGrid);
            const opacity = this.slotGrid.getComponent(UIOpacity);
            if (opacity) {
                Tween.stopAllByTarget(opacity);
                opacity.opacity = 255;
            }
            if (this.slotGridRestPosition) {
                this.slotGrid.setPosition(this.slotGridRestPosition);
            }
        }
        this.resetSlotTransitionState();
        this.moveCategorySelectionIndicator(this.activeCategory, false);
    }

    private selectRarity(rarityIndex: number | null): void {
        this.activeRarityIndex = rarityIndex;
        this.hideRarityMenu();
        this.applyInventoryFilterChange();
    }

    private toggleRarityMenu(): void {
        if (!this.rarityMenuNode) {
            return;
        }
        this.rarityMenuNode.active = !this.rarityMenuNode.active;
        if (this.rarityMenuNode.active) {
            this.rarityMenuNode.setSiblingIndex(
                Math.max(
                    0,
                    (this.rarityMenuNode.parent?.children.length ?? 1) - 1,
                ),
            );
        }
    }

    private hideRarityMenu(): void {
        if (this.rarityMenuNode) {
            this.rarityMenuNode.active = false;
        }
    }

    private onSearchTextChanged(editBox: EditBox): void {
        this.searchQuery = editBox.string.trim().toLocaleLowerCase();
        this.applyInventoryFilterChange();
    }

    private resetInventoryFilters(): void {
        this.stopCategoryTransition();
        this.activeCategory = '全部';
        this.pendingInventoryCategory = null;
        this.moveCategorySelectionIndicator('全部', true);
        this.animateCategoryButton('全部');
        this.activeRarityIndex = null;
        this.searchQuery = '';
        if (this.searchEditBox) {
            this.searchEditBox.string = '';
        }
        this.hideRarityMenu();
        this.applyInventoryFilterChange();
    }

    private applyInventoryFilterChange(): void {
        this.cancelActiveInteraction();
        this.hideItemTooltip();
        this.hideContextMenu();
        this.currentPage = 0;
        this.updateFilterVisuals();
        this.renderCurrentPage();
    }

    private updateFilterVisuals(): void {
        this.categoryButtons.forEach((button, category) => {
            this.redrawFilterButton(button, category === this.activeCategory);
        });

        const rarityText = this.activeRarityIndex === null
            ? '全部'
            : RARITY_NAMES[this.activeRarityIndex] ?? '全部';
        this.setFilterButtonText(
            this.rarityFilterButton,
            `稀有度：${rarityText}`,
        );
        if (this.rarityFilterButton) {
            this.redrawFilterButton(
                this.rarityFilterButton,
                this.activeRarityIndex !== null,
            );
        }
        this.rarityOptionButtons.forEach((button, rarityIndex) => {
            this.redrawFilterButton(
                button,
                rarityIndex === this.activeRarityIndex,
            );
        });
    }

    private ensurePageIndicator(): void {
        if (this.pageIndicatorNode?.isValid) {
            return;
        }

        const indicator = new Node('PageIndicator');
        indicator.layer = this.node.layer;
        this.node.addChild(indicator);
        indicator.setPosition(0, -318, 0);
        indicator.addComponent(UITransform).setContentSize(150, 30);
        this.pageIndicatorNode = indicator;

        for (let index = 0; index < this.maxVisiblePageDots; index++) {
            const dotNode = new Node(`PageDot_${index}`);
            dotNode.layer = this.node.layer;
            indicator.addChild(dotNode);
            dotNode.addComponent(UITransform).setContentSize(24, 24);
            dotNode.addComponent(Graphics);

            const button = dotNode.addComponent(Button);
            button.target = dotNode;
            button.transition = Button.Transition.NONE;
            dotNode.on(
                Button.EventType.CLICK,
                () => this.onPageDotClicked(index),
                this,
            );

            dotNode.active = false;
            this.pageDotNodes.push(dotNode);
            this.pageDotPageIndices.push(-1);
        }
    }

    private updatePageIndicator(): void {
        if (!this.pageIndicatorNode) {
            return;
        }

        const pageCount = this.getPageCount();
        const visibleCount = Math.min(pageCount, this.maxVisiblePageDots);
        const maximumStart = Math.max(0, pageCount - visibleCount);
        const startPage = Math.min(
            maximumStart,
            Math.max(0, this.currentPage - Math.floor(visibleCount * 0.5)),
        );
        const spacing = 24;
        const pageChanged = this.currentPage !== this.lastPageIndicatorPage;
        let selectedDotNode: Node | null = null;

        this.pageDotNodes.forEach((dotNode, index) => {
            if (pageChanged) {
                Tween.stopAllByTarget(dotNode);
                dotNode.setScale(1, 1, 1);
            }
            const active = index < visibleCount;
            dotNode.active = active;
            if (!active) {
                this.pageDotPageIndices[index] = -1;
                return;
            }

            const pageIndex = startPage + index;
            const selected = pageIndex === this.currentPage;
            if (selected) {
                selectedDotNode = dotNode;
            }
            this.pageDotPageIndices[index] = pageIndex;
            dotNode.setPosition(
                (index - (visibleCount - 1) * 0.5) * spacing,
                0,
                0,
            );

            const graphics = dotNode.getComponent(Graphics);
            if (graphics) {
                graphics.clear();
                if (selected) {
                    graphics.fillColor = new Color(255, 255, 255, 62);
                    graphics.circle(0, 0, 10);
                    graphics.fill();
                    graphics.fillColor = new Color(255, 255, 255, 255);
                    graphics.circle(0, 0, 6);
                    graphics.fill();
                } else {
                    graphics.fillColor = new Color(255, 255, 255, 165);
                    graphics.circle(0, 0, 4);
                    graphics.fill();
                }
            }

            const button = dotNode.getComponent(Button);
            if (button) {
                button.interactable = true;
            }
        });

        if (pageChanged && selectedDotNode) {
            this.animateSelectedPageDot(selectedDotNode);
        }
        this.lastPageIndicatorPage = this.currentPage;
    }

    private animateSelectedPageDot(dotNode: Node): void {
        dotNode.setScale(0.62, 0.62, 1);
        tween(dotNode)
            .to(
                0.1,
                { scale: new Vec3(1.75, 1.75, 1) },
                { easing: 'quadOut' },
            )
            .to(
                0.13,
                { scale: new Vec3(0.9, 0.9, 1) },
                { easing: 'sineInOut' },
            )
            .to(
                0.12,
                { scale: new Vec3(1, 1, 1) },
                { easing: 'backOut' },
            )
            .start();
    }

    private onPageDotClicked(dotIndex: number): void {
        const pageIndex = this.pageDotPageIndices[dotIndex] ?? -1;
        if (
            pageIndex < 0
            || pageIndex >= this.getPageCount()
            || pageIndex === this.currentPage
        ) {
            return;
        }

        this.cancelActiveInteraction();
        this.currentPage = pageIndex;
        this.playUiSound(this.pageTurnSound);
        this.renderCurrentPage();
        this.saveInventory();
    }

    private ensureCapacityControl(): void {
        if (this.capacityControlNode?.isValid) {
            return;
        }

        const control = new Node('InventoryCapacityControl');
        control.layer = this.node.layer;
        this.node.addChild(control);
        control.setPosition(-180, -318, 0);
        control.addComponent(UITransform).setContentSize(160, 32);
        this.capacityControlNode = control;

        const labelNode = new Node('CapacityLabel');
        labelNode.layer = this.node.layer;
        control.addChild(labelNode);
        labelNode.setPosition(-10, 0, 0);
        labelNode.addComponent(UITransform).setContentSize(120, 28);

        const label = labelNode.addComponent(Label);
        label.fontSize = 17;
        label.lineHeight = 20;
        label.isBold = true;
        label.enableWrapText = false;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = new Color(255, 244, 218, 255);

        const outline = labelNode.addComponent(LabelOutline);
        outline.color = new Color(62, 29, 14, 255);
        outline.width = 2;
        this.capacityLabel = label;

        const expandButton = this.createFilterButton(
            control,
            'ExpandCapacityButton',
            '+',
            70,
            0,
            32,
            30,
            this.showCapacityExpansionDialog,
        );
        const plusLabel = expandButton.node
            .getChildByName('FilterLabel')
            ?.getComponent(Label);
        if (plusLabel) {
            plusLabel.fontSize = 24;
            plusLabel.lineHeight = 26;
        }

        this.ensureCapacityExpansionDialog();
        this.updateCapacityDisplay();
    }

    private ensureCapacityExpansionDialog(): void {
        if (this.capacityExpansionOverlay?.isValid) {
            return;
        }

        const canvasSize = this.node.parent
            ?.getComponent(UITransform)?.contentSize;
        const width = canvasSize?.width ?? 1280;
        const height = canvasSize?.height ?? 720;

        const overlay = new Node('CapacityExpansionOverlay');
        overlay.layer = this.node.layer;
        this.node.addChild(overlay);
        overlay.addComponent(UITransform).setContentSize(width, height);
        overlay.addComponent(BlockInputEvents);
        overlay.on(
            Node.EventType.TOUCH_END,
            this.onCapacityOverlayTouchEnd,
            this,
        );

        const shade = overlay.addComponent(Graphics);
        shade.fillColor = new Color(0, 0, 0, 145);
        shade.rect(-width * 0.5, -height * 0.5, width, height);
        shade.fill();

        const dialog = new Node('Dialog');
        dialog.layer = this.node.layer;
        overlay.addChild(dialog);
        dialog.addComponent(UITransform).setContentSize(430, 270);
        dialog.addComponent(BlockInputEvents);

        const background = dialog.addComponent(Graphics);
        background.fillColor = new Color(45, 29, 20, 255);
        background.strokeColor = new Color(238, 181, 105, 255);
        background.lineWidth = 4;
        background.roundRect(-215, -135, 430, 270, 12);
        background.fill();
        background.stroke();

        const titleNode = new Node('Title');
        titleNode.layer = this.node.layer;
        dialog.addChild(titleNode);
        titleNode.setPosition(0, 96, 0);
        titleNode.addComponent(UITransform).setContentSize(390, 34);
        const titleLabel = titleNode.addComponent(Label);
        titleLabel.string = '扩充背包格子';
        titleLabel.fontSize = 24;
        titleLabel.lineHeight = 28;
        titleLabel.isBold = true;
        titleLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        titleLabel.verticalAlign = Label.VerticalAlign.CENTER;
        titleLabel.color = new Color(255, 244, 218, 255);

        const descriptionNode = new Node('Description');
        descriptionNode.layer = this.node.layer;
        dialog.addChild(descriptionNode);
        descriptionNode.setPosition(0, 62, 0);
        descriptionNode.addComponent(UITransform).setContentSize(390, 28);
        const descriptionLabel = descriptionNode.addComponent(Label);
        descriptionLabel.string = '请选择本次增加的格子数量';
        descriptionLabel.fontSize = 18;
        descriptionLabel.lineHeight = 22;
        descriptionLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        descriptionLabel.verticalAlign = Label.VerticalAlign.CENTER;
        descriptionLabel.color = new Color(230, 213, 185, 255);

        const options = [
            { amount: 4, x: -92, y: 18 },
            { amount: 8, x: 92, y: 18 },
            { amount: 16, x: -92, y: -30 },
            { amount: 32, x: 92, y: -30 },
        ];
        options.forEach((option) => {
            this.createRuntimeTextButton(
                dialog,
                `Expand_${option.amount}`,
                `+${option.amount} 格`,
                option.y,
                () => this.expandInventoryCapacity(option.amount),
                option.x,
            );
        });

        const noteNode = new Node('TestModeNote');
        noteNode.layer = this.node.layer;
        dialog.addChild(noteNode);
        noteNode.setPosition(0, -94, 0);
        noteNode.addComponent(UITransform).setContentSize(390, 28);
        const noteLabel = noteNode.addComponent(Label);
        noteLabel.string = '测试模式：当前扩充不消耗任何道具';
        noteLabel.fontSize = 16;
        noteLabel.lineHeight = 20;
        noteLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
        noteLabel.verticalAlign = Label.VerticalAlign.CENTER;
        noteLabel.color = new Color(201, 178, 143, 255);

        overlay.active = false;
        this.capacityExpansionOverlay = overlay;
    }

    private showCapacityExpansionDialog(): void {
        if (!this.capacityExpansionOverlay) {
            return;
        }
        this.hideButtonTooltip();
        this.hideItemTooltip();
        this.hideContextMenu();
        this.hideRarityMenu();
        this.capacityExpansionOverlay.active = true;
        this.capacityExpansionOverlay.setSiblingIndex(
            this.node.children.length - 1,
        );
    }

    private onCapacityOverlayTouchEnd(event: EventTouch): void {
        if (event.target === this.capacityExpansionOverlay) {
            this.hideCapacityExpansionDialog();
        }
    }

    private hideCapacityExpansionDialog(): void {
        if (this.capacityExpansionOverlay) {
            this.capacityExpansionOverlay.active = false;
        }
    }

    private expandInventoryCapacity(amount: number): void {
        const addedSlots = Math.max(1, Math.floor(amount));
        for (let index = 0; index < addedSlots; index++) {
            this.inventory.push(null);
        }

        this.hideCapacityExpansionDialog();
        this.renderCurrentPage();
        this.saveInventory();
        console.log(
            `背包扩充完成：+${addedSlots} 格，总容量 ${this.inventory.length} 格`,
        );
    }

    private updateCapacityDisplay(): void {
        if (!this.capacityLabel) {
            return;
        }
        const occupiedSlots = this.inventory.reduce(
            (total, entry) => total + (entry ? 1 : 0),
            0,
        );
        this.capacityLabel.string = `格子：${occupiedSlots}/${this.inventory.length}`;
    }

    private resolveButtonTextTemplate(text: string): string {
        const direction = this.sortAscending ? '↑' : '↓';
        return (text ?? '').replace(/\{direction\}/g, direction);
    }

    private createConfiguredButtonHelpDefinition(
        button: Button | null,
        text: BackpackButtonTextInspectorEntry,
    ): ButtonHelpDefinition {
        return {
            button,
            label: this.resolveButtonTextTemplate(text.label),
            title: this.resolveButtonTextTemplate(text.title),
            description: this.resolveButtonTextTemplate(text.description),
        };
    }

    private setupButtonHelp(): void {
        const text = this.buttonTextConfig;
        const definitions: ButtonHelpDefinition[] = [
            this.createConfiguredButtonHelpDefinition(
                this.backpackButton,
                text.backpack,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.closeButton,
                text.close,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.stackButton,
                text.stack,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.swapButton,
                text.swap,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.craftButton,
                text.craft,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.previousButton,
                text.previous,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.nextButton,
                text.next,
            ),
            this.createConfiguredButtonHelpDefinition(
                this.sortButton,
                text.sort,
            ),
        ];

        definitions.forEach((definition) => {
            const button = definition.button;
            if (!button) {
                return;
            }

            this.buttonHelpByNode.set(button.node, definition);
            this.createButtonTextLabel(button.node, definition.label);
            button.node.on(
                Node.EventType.MOUSE_ENTER,
                this.onButtonMouseEnter,
                this,
            );
            button.node.on(
                Node.EventType.MOUSE_MOVE,
                this.onButtonMouseMove,
                this,
            );
            button.node.on(
                Node.EventType.MOUSE_LEAVE,
                this.onButtonMouseLeave,
                this,
            );
        });

        this.ensureTooltipNode();
        this.ensureItemTooltipNode();
        this.ensureContextMenu();
        this.ensureQuantityDialog();
    }

    private teardownButtonHelp(): void {
        this.buttonHelpByNode.forEach((_definition, node) => {
            node.off(Node.EventType.MOUSE_ENTER, this.onButtonMouseEnter, this);
            node.off(Node.EventType.MOUSE_MOVE, this.onButtonMouseMove, this);
            node.off(Node.EventType.MOUSE_LEAVE, this.onButtonMouseLeave, this);
        });
        this.buttonHelpByNode.clear();
    }

    private createButtonTextLabel(buttonNode: Node, text: string): void {
        let labelNode = buttonNode.getChildByName('FunctionLabel');
        if (!labelNode) {
            labelNode = new Node('FunctionLabel');
            labelNode.layer = buttonNode.layer;
            buttonNode.addChild(labelNode);

            const transform = labelNode.addComponent(UITransform);
            transform.setContentSize(112, 24);
            labelNode.setPosition(0, -43, 0);

            const label = labelNode.addComponent(Label);
            label.fontSize = 18;
            label.lineHeight = 20;
            label.isBold = true;
            label.enableWrapText = false;
            label.overflow = Label.Overflow.CLAMP;
            label.horizontalAlign = Label.HorizontalAlign.CENTER;
            label.verticalAlign = Label.VerticalAlign.CENTER;
            label.color = new Color(255, 246, 218, 255);

            const outline = labelNode.addComponent(LabelOutline);
            outline.color = new Color(62, 29, 14, 255);
            outline.width = 2;
        }

        const label = labelNode.getComponent(Label);
        if (label) {
            label.string = text;
        }
        labelNode.setScale(buttonNode.scale.x < 0 ? -1 : 1, 1, 1);
    }

    private ensureTooltipNode(): void {
        if (this.tooltipNode?.isValid && this.tooltipLabel) {
            return;
        }

        const tooltip = new Node('ButtonTooltip');
        tooltip.layer = this.node.layer;
        this.node.addChild(tooltip);

        const tooltipTransform = tooltip.addComponent(UITransform);
        tooltipTransform.setContentSize(360, 124);

        const background = tooltip.addComponent(Graphics);
        background.fillColor = new Color(38, 25, 18, 244);
        background.strokeColor = new Color(238, 181, 105, 255);
        background.lineWidth = 3;
        background.roundRect(-180, -62, 360, 124, 10);
        background.fill();
        background.stroke();

        const textNode = new Node('TooltipText');
        textNode.layer = this.node.layer;
        tooltip.addChild(textNode);
        textNode.addComponent(UITransform).setContentSize(324, 94);

        const label = textNode.addComponent(Label);
        label.fontSize = 18;
        label.lineHeight = 24;
        label.enableWrapText = true;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.LEFT;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = new Color(255, 244, 218, 255);

        tooltip.active = false;
        this.tooltipNode = tooltip;
        this.tooltipLabel = label;
    }

    private ensureItemTooltipNode(): void {
        if (this.itemTooltipNode?.isValid && this.itemTooltipLabel) {
            return;
        }

        const tooltip = new Node('ItemTooltip');
        tooltip.layer = this.node.layer;
        this.node.addChild(tooltip);

        const tooltipTransform = tooltip.addComponent(UITransform);
        tooltipTransform.setContentSize(460, 320);

        const background = tooltip.addComponent(Graphics);
        background.fillColor = new Color(28, 24, 22, 246);
        background.strokeColor = new Color(218, 174, 104, 255);
        background.lineWidth = 3;
        background.roundRect(-230, -160, 460, 320, 10);
        background.fill();
        background.stroke();

        const textNode = new Node('ItemTooltipText');
        textNode.layer = this.node.layer;
        tooltip.addChild(textNode);
        textNode.addComponent(UITransform).setContentSize(420, 284);

        const label = textNode.addComponent(Label);
        label.fontSize = 18;
        label.lineHeight = 23;
        label.enableWrapText = true;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.LEFT;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = new Color(255, 244, 218, 255);

        tooltip.active = false;
        this.itemTooltipNode = tooltip;
        this.itemTooltipLabel = label;
    }

    private ensureContextMenu(): void {
        if (this.contextMenuNode?.isValid) {
            return;
        }

        const menu = new Node('ItemContextMenu');
        menu.layer = this.node.layer;
        this.node.addChild(menu);
        menu.addComponent(UITransform).setContentSize(190, 100);
        menu.addComponent(BlockInputEvents);

        const background = menu.addComponent(Graphics);
        background.fillColor = new Color(38, 25, 18, 248);
        background.strokeColor = new Color(238, 181, 105, 255);
        background.lineWidth = 3;
        background.roundRect(-95, -50, 190, 100, 9);
        background.fill();
        background.stroke();

        this.contextUseButton = this.createRuntimeTextButton(
            menu,
            'UseButton',
            '使用',
            20,
            this.useSelectedItem,
        );
        this.contextDiscardButton = this.createRuntimeTextButton(
            menu,
            'DiscardButton',
            '丢弃',
            -20,
            this.requestDiscardSelectedItem,
        );

        menu.active = false;
        this.contextMenuNode = menu;
    }

    private ensureQuantityDialog(): void {
        if (
            this.quantityDialogNode?.isValid
            && this.quantityDialogLabel
            && this.quantitySlider
            && this.quantityEditBox
        ) {
            return;
        }

        const canvasSize = this.node.parent
            ?.getComponent(UITransform)?.contentSize;
        const width = canvasSize?.width ?? 1280;
        const height = canvasSize?.height ?? 720;

        const overlay = new Node('QuantityOperationOverlay');
        overlay.layer = this.node.layer;
        this.node.addChild(overlay);
        overlay.addComponent(UITransform).setContentSize(width, height);
        overlay.addComponent(BlockInputEvents);
        overlay.on(
            Node.EventType.TOUCH_END,
            this.onQuantityOverlayTouchEnd,
            this,
        );

        const shade = overlay.addComponent(Graphics);
        shade.fillColor = new Color(0, 0, 0, 145);
        shade.rect(-width * 0.5, -height * 0.5, width, height);
        shade.fill();

        const dialog = new Node('Dialog');
        dialog.layer = this.node.layer;
        overlay.addChild(dialog);
        dialog.addComponent(UITransform).setContentSize(580, 350);
        dialog.addComponent(BlockInputEvents);

        const dialogBackground = dialog.addComponent(Graphics);
        dialogBackground.fillColor = new Color(45, 29, 20, 255);
        dialogBackground.strokeColor = new Color(238, 181, 105, 255);
        dialogBackground.lineWidth = 4;
        dialogBackground.roundRect(-290, -175, 580, 350, 12);
        dialogBackground.fill();
        dialogBackground.stroke();

        const textNode = new Node('OperationText');
        textNode.layer = this.node.layer;
        dialog.addChild(textNode);
        textNode.setPosition(0, 118, 0);
        textNode.addComponent(UITransform).setContentSize(520, 74);

        const label = textNode.addComponent(Label);
        label.fontSize = 22;
        label.lineHeight = 31;
        label.enableWrapText = true;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = new Color(255, 244, 218, 255);

        const sliderNode = new Node('QuantitySlider');
        sliderNode.layer = this.node.layer;
        dialog.addChild(sliderNode);
        sliderNode.setPosition(0, 48, 0);
        sliderNode.addComponent(UITransform).setContentSize(330, 30);

        const sliderTrack = sliderNode.addComponent(Graphics);
        sliderTrack.fillColor = new Color(82, 58, 42, 255);
        sliderTrack.strokeColor = new Color(211, 157, 91, 255);
        sliderTrack.lineWidth = 2;
        sliderTrack.roundRect(-165, -6, 330, 12, 6);
        sliderTrack.fill();
        sliderTrack.stroke();

        const handleNode = new Node('Handle');
        handleNode.layer = this.node.layer;
        sliderNode.addChild(handleNode);
        handleNode.addComponent(UITransform).setContentSize(30, 30);
        const handleSprite = handleNode.addComponent(Sprite);

        const handleVisual = new Node('HandleVisual');
        handleVisual.layer = this.node.layer;
        handleNode.addChild(handleVisual);
        handleVisual.addComponent(UITransform).setContentSize(30, 30);
        const handleGraphics = handleVisual.addComponent(Graphics);
        handleGraphics.fillColor = new Color(240, 174, 91, 255);
        handleGraphics.strokeColor = new Color(75, 39, 20, 255);
        handleGraphics.lineWidth = 3;
        handleGraphics.circle(0, 0, 13);
        handleGraphics.fill();
        handleGraphics.stroke();

        const slider = sliderNode.addComponent(Slider);
        slider.direction = Slider.Direction.Horizontal;
        slider.handle = handleSprite;
        slider.progress = 0;
        sliderNode.on('slide', this.onQuantitySliderChanged, this);

        const quantityCaption = new Node('QuantityCaption');
        quantityCaption.layer = this.node.layer;
        dialog.addChild(quantityCaption);
        quantityCaption.setPosition(-185, -20, 0);
        quantityCaption.addComponent(UITransform).setContentSize(90, 38);
        const captionLabel = quantityCaption.addComponent(Label);
        captionLabel.string = '数量：';
        captionLabel.fontSize = 20;
        captionLabel.lineHeight = 24;
        captionLabel.horizontalAlign = Label.HorizontalAlign.RIGHT;
        captionLabel.verticalAlign = Label.VerticalAlign.CENTER;
        captionLabel.color = new Color(255, 244, 218, 255);

        const editNode = new Node('QuantityEditBox');
        editNode.layer = this.node.layer;
        dialog.addChild(editNode);
        editNode.setPosition(-92, -20, 0);
        editNode.addComponent(UITransform).setContentSize(104, 42);
        const editBackground = editNode.addComponent(Graphics);
        editBackground.fillColor = new Color(24, 19, 17, 255);
        editBackground.strokeColor = new Color(224, 167, 96, 255);
        editBackground.lineWidth = 2;
        editBackground.roundRect(-52, -21, 104, 42, 5);
        editBackground.fill();
        editBackground.stroke();

        const editBox = editNode.addComponent(EditBox);
        editBox.inputMode = EditBox.InputMode.NUMERIC;
        editBox.maxLength = 3;
        editBox.placeholder = '';
        editBox.string = '1';

        const editTextLabel = editBox.textLabel;
        if (editTextLabel) {
            editTextLabel.node
                .getComponent(UITransform)
                ?.setAnchorPoint(0, 1);
            editTextLabel.fontSize = 21;
            editTextLabel.lineHeight = 25;
            editTextLabel.enableWrapText = false;
            editTextLabel.overflow = Label.Overflow.CLAMP;
            editTextLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
            editTextLabel.verticalAlign = Label.VerticalAlign.CENTER;
            editTextLabel.color = new Color(255, 244, 218, 255);
            editTextLabel.string = '1';
        }

        const placeholderLabel = editBox.placeholderLabel;
        if (placeholderLabel) {
            placeholderLabel.node
                .getComponent(UITransform)
                ?.setAnchorPoint(0, 1);
            placeholderLabel.string = '';
            placeholderLabel.fontSize = 21;
            placeholderLabel.lineHeight = 25;
            placeholderLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
            placeholderLabel.verticalAlign = Label.VerticalAlign.CENTER;
            placeholderLabel.color = new Color(150, 135, 120, 255);
        }
        editNode.on(
            EditBox.EventType.TEXT_CHANGED,
            this.onQuantityTextChanged,
            this,
        );
        editNode.on(
            EditBox.EventType.EDITING_DID_ENDED,
            this.onQuantityEditingEnded,
            this,
        );

        this.createRuntimeTextButton(
            dialog,
            'MaximumButton',
            '最大',
            -20,
            this.setMaximumQuantity,
            70,
        );

        this.quantityConfirmButton = this.createRuntimeTextButton(
            dialog,
            'ConfirmQuantityButton',
            '确认',
            -122,
            this.confirmQuantityOperation,
            0,
        );

        overlay.active = false;
        this.quantityDialogNode = overlay;
        this.quantityDialogLabel = label;
        this.quantitySlider = slider;
        this.quantityEditBox = editBox;
    }

    private createRuntimeTextButton(
        parent: Node,
        name: string,
        text: string,
        y: number,
        callback: () => void,
        x = 0,
    ): Button {
        const node = new Node(name);
        node.layer = this.node.layer;
        parent.addChild(node);
        node.setPosition(x, y, 0);
        node.addComponent(UITransform).setContentSize(164, 32);

        const background = node.addComponent(Graphics);
        background.fillColor = new Color(108, 67, 39, 255);
        background.strokeColor = new Color(229, 167, 91, 255);
        background.lineWidth = 2;
        background.roundRect(-82, -16, 164, 32, 5);
        background.fill();
        background.stroke();

        const button = node.addComponent(Button);
        button.target = node;
        button.transition = Button.Transition.COLOR;
        button.normalColor = new Color(255, 255, 255, 255);
        button.hoverColor = new Color(255, 225, 170, 255);
        button.pressedColor = new Color(210, 170, 120, 255);
        button.disabledColor = new Color(105, 105, 105, 190);
        node.on(Button.EventType.CLICK, callback, this);

        const labelNode = new Node('Label');
        labelNode.layer = this.node.layer;
        node.addChild(labelNode);
        labelNode.addComponent(UITransform).setContentSize(154, 28);

        const label = labelNode.addComponent(Label);
        label.string = text;
        label.fontSize = 19;
        label.lineHeight = 22;
        label.isBold = true;
        label.enableWrapText = false;
        label.overflow = Label.Overflow.CLAMP;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;
        label.color = new Color(255, 244, 218, 255);

        return button;
    }

    private showContextMenu(location: Vec2): void {
        if (!this.contextMenuNode || this.selectedLocalIndex < 0) {
            return;
        }

        const entry = this.getEntryAtLocalIndex(this.selectedLocalIndex);
        const config = entry ? this.getItemConfig(entry.itemId) : null;
        if (!entry || !config) {
            return;
        }

        this.hideButtonTooltip();
        this.hideItemTooltip();
        if (this.contextUseButton) {
            this.contextUseButton.interactable = config.canUse;
        }
        if (this.contextDiscardButton) {
            this.contextDiscardButton.interactable = config.canDiscard;
        }
        this.contextMenuNode.active = true;
        this.contextMenuNode.setSiblingIndex(this.node.children.length - 1);
        this.updateContextMenuPosition(location);
    }

    private hideContextMenu(): void {
        if (this.contextMenuNode) {
            this.contextMenuNode.active = false;
        }
    }

    private updateContextMenuPosition(location: Vec2): void {
        if (!this.contextMenuNode) {
            return;
        }

        const rootTransform = this.node.getComponent(UITransform);
        const canvasTransform = this.node.parent?.getComponent(UITransform);
        if (!rootTransform || !canvasTransform) {
            return;
        }

        const local = rootTransform.convertToNodeSpaceAR(
            new Vec3(location.x, location.y, 0),
        );
        const halfWidth = canvasTransform.contentSize.width * 0.5;
        const halfHeight = canvasTransform.contentSize.height * 0.5;
        const xOffset = local.x >= 0 ? -112 : 112;
        const x = Math.max(-halfWidth + 95, Math.min(halfWidth - 95, local.x + xOffset));
        const y = Math.max(-halfHeight + 50, Math.min(halfHeight - 50, local.y));
        this.contextMenuNode.setPosition(x, y, 0);
    }

    private onQuantityOverlayTouchEnd(event: EventTouch): void {
        if (event.target === this.quantityDialogNode) {
            this.cancelQuantityOperation();
        }
    }

    private useSelectedItem(): void {
        this.openQuantityDialog('use');
    }

    private requestDiscardSelectedItem(): void {
        this.openQuantityDialog('discard');
    }

    private openQuantityDialog(operation: 'use' | 'discard'): void {
        const index = this.getInventoryIndex(this.selectedLocalIndex);
        const entry = this.inventory[index];
        if (
            !entry
            || !this.quantityDialogNode
            || !this.quantityDialogLabel
            || !this.quantitySlider
            || !this.quantityEditBox
        ) {
            return;
        }

        const config = this.getItemConfig(entry.itemId);
        const allowed = operation === 'use'
            ? config?.canUse
            : config?.canDiscard;
        if (!config || !allowed) {
            return;
        }

        this.pendingQuantityOperation = operation;
        this.pendingQuantityIndex = index;
        this.pendingQuantityMaximum = operation === 'use' && !config.consumeOnUse
            ? 1
            : entry.count;
        this.pendingQuantity = 1;
        const actionName = operation === 'use' ? '使用' : '丢弃';
        this.quantityDialogLabel.string =
            `${actionName} ${config.itemName}\n请选择数量（1 - ${this.pendingQuantityMaximum}）`;
        this.setRuntimeButtonText(
            this.quantityConfirmButton,
            `确认${actionName}`,
        );
        this.setPendingQuantity(1);
        this.hideContextMenu();
        this.quantityDialogNode.active = true;
        this.quantityDialogNode.setSiblingIndex(this.node.children.length - 1);
    }

    private onQuantitySliderChanged(slider: Slider): void {
        const range = Math.max(0, this.pendingQuantityMaximum - 1);
        const quantity = 1 + Math.round(slider.progress * range);
        this.setPendingQuantity(quantity, false);
    }

    private onQuantityTextChanged(editBox: EditBox): void {
        const quantity = Number.parseInt(editBox.string, 10);
        if (Number.isFinite(quantity)) {
            this.setPendingQuantity(quantity, true);
        }
    }

    private onQuantityEditingEnded(editBox: EditBox): void {
        const quantity = Number.parseInt(editBox.string, 10);
        this.setPendingQuantity(Number.isFinite(quantity) ? quantity : 1);
    }

    private setMaximumQuantity(): void {
        this.setPendingQuantity(this.pendingQuantityMaximum);
    }

    private setPendingQuantity(
        quantity: number,
        updateSlider = true,
    ): void {
        const clamped = Math.max(
            1,
            Math.min(this.pendingQuantityMaximum, Math.floor(quantity)),
        );
        this.pendingQuantity = clamped;

        if (this.quantityEditBox) {
            this.quantityEditBox.string = String(clamped);
            if (this.quantityEditBox.textLabel) {
                this.quantityEditBox.textLabel.string = String(clamped);
            }
        }
        if (this.quantitySlider && updateSlider) {
            const range = this.pendingQuantityMaximum - 1;
            this.quantitySlider.progress = range > 0
                ? (clamped - 1) / range
                : 0;
        }
    }

    private setRuntimeButtonText(button: Button | null, text: string): void {
        const label = button?.node.getChildByName('Label')?.getComponent(Label);
        if (label) {
            label.string = text;
        }
    }

    private confirmQuantityOperation(): void {
        const index = this.pendingQuantityIndex;
        const operation = this.pendingQuantityOperation;
        const entry = index >= 0 ? this.inventory[index] : null;
        if (!entry || !operation) {
            this.cancelQuantityOperation();
            return;
        }

        const quantity = Math.min(this.pendingQuantity, entry.count);
        const config = this.getItemConfig(entry.itemId);
        if (!config) {
            this.cancelQuantityOperation();
            return;
        }

        if (
            operation === 'discard'
            && this.worldScenario.enabled
            && !this.spawnWorldItem(
                entry.itemId,
                quantity,
                this.getWorldDiscardLifetime(),
            )
        ) {
            console.warn(`丢弃失败，背包未扣除：${config.itemName} ×${quantity}`);
            this.cancelQuantityOperation();
            return;
        }

        if (operation === 'use') {
            this.node.emit('inventory-item-used', {
                itemId: entry.itemId,
                itemName: config.itemName,
                quantity,
                config,
            });
            config.effects.forEach((effect) => {
                this.node.emit('inventory-item-effect', {
                    itemId: entry.itemId,
                    quantity,
                    effect,
                });
            });
        }

        const shouldRemove = operation === 'discard' || config.consumeOnUse;
        if (shouldRemove) {
            entry.count -= quantity;
            if (entry.count <= 0) {
                this.inventory[index] = null;
            }
        }

        console.log(
            operation === 'use'
                ? `使用物品：${config.itemName} ×${quantity}`
                : `丢弃物品：${config.itemName} ×${quantity}`,
        );

        this.cancelQuantityOperation();
        this.renderCurrentPage();
        this.saveInventory();
    }

    private cancelQuantityOperation(): void {
        this.pendingQuantityOperation = null;
        this.pendingQuantityIndex = -1;
        this.pendingQuantityMaximum = 1;
        this.pendingQuantity = 1;
        if (this.quantityDialogNode) {
            this.quantityDialogNode.active = false;
        }
    }

    private onButtonMouseEnter(event: EventMouse): void {
        const node = event.currentTarget as unknown as Node;
        const definition = this.buttonHelpByNode.get(node);
        if (!definition || !this.tooltipNode || !this.tooltipLabel) {
            return;
        }

        this.hideItemTooltip();
        this.hideContextMenu();
        const unavailableHint = this.buttonTextConfig.unavailableHint.trim();
        const unavailableText = definition.button?.interactable === false
            && unavailableHint.length > 0
            ? `\n${unavailableHint}`
            : '';
        this.tooltipLabel.string = `${definition.title}\n${definition.description}${unavailableText}`;
        this.tooltipNode.active = true;
        this.tooltipNode.setSiblingIndex(this.node.children.length - 1);
        this.updateTooltipPosition(event.getUILocation());
    }

    private onButtonMouseMove(event: EventMouse): void {
        if (this.tooltipNode?.active) {
            this.updateTooltipPosition(event.getUILocation());
        }
    }

    private onButtonMouseLeave(): void {
        this.hideButtonTooltip();
    }

    private hideButtonTooltip(): void {
        if (this.tooltipNode) {
            this.tooltipNode.active = false;
        }
    }

    private hideItemTooltip(): void {
        if (this.itemTooltipNode) {
            this.itemTooltipNode.active = false;
        }
    }

    private updateTooltipPosition(location: Vec2): void {
        if (!this.tooltipNode) {
            return;
        }

        const rootTransform = this.node.getComponent(UITransform);
        const canvasTransform = this.node.parent?.getComponent(UITransform);
        if (!rootTransform || !canvasTransform) {
            return;
        }

        const local = rootTransform.convertToNodeSpaceAR(
            new Vec3(location.x, location.y, 0),
        );
        const halfWidth = canvasTransform.contentSize.width * 0.5;
        const halfHeight = canvasTransform.contentSize.height * 0.5;
        const tooltipHalfWidth = 180;
        const tooltipHalfHeight = 62;
        const horizontalOffset = local.x >= 0 ? -205 : 205;

        const x = Math.max(
            -halfWidth + tooltipHalfWidth,
            Math.min(halfWidth - tooltipHalfWidth, local.x + horizontalOffset),
        );
        const y = Math.max(
            -halfHeight + tooltipHalfHeight,
            Math.min(halfHeight - tooltipHalfHeight, local.y + 74),
        );
        this.tooltipNode.setPosition(x, y, 0);
    }

    private updateItemTooltipPosition(location: Vec2): void {
        if (!this.itemTooltipNode) {
            return;
        }

        const rootTransform = this.node.getComponent(UITransform);
        const canvasTransform = this.node.parent?.getComponent(UITransform);
        if (!rootTransform || !canvasTransform) {
            return;
        }

        const local = rootTransform.convertToNodeSpaceAR(
            new Vec3(location.x, location.y, 0),
        );
        const halfWidth = canvasTransform.contentSize.width * 0.5;
        const halfHeight = canvasTransform.contentSize.height * 0.5;
        const tooltipHalfWidth = 230;
        const tooltipHalfHeight = 160;
        const horizontalOffset = local.x >= 0 ? -260 : 260;

        const x = Math.max(
            -halfWidth + tooltipHalfWidth,
            Math.min(halfWidth - tooltipHalfWidth, local.x + horizontalOffset),
        );
        const y = Math.max(
            -halfHeight + tooltipHalfHeight,
            Math.min(halfHeight - tooltipHalfHeight, local.y + 160),
        );
        this.itemTooltipNode.setPosition(x, y, 0);
    }

    private setBackpackVisible(visible: boolean): void {
        this.hideButtonTooltip();
        this.hideItemTooltip();
        this.hideContextMenu();
        if (this.quantityDialogNode) {
            this.quantityDialogNode.active = false;
            this.pendingQuantityOperation = null;
            this.pendingQuantityIndex = -1;
        }
        this.hideCapacityExpansionDialog();
        if (!visible) {
            this.stopCategoryTransition();
            this.cancelActiveInteraction();
        }

        this.backpackVisible = visible;

        if (this.panelNode) {
            this.panelNode.active = visible;
        }
        if (this.inventoryBackdropNode) {
            this.inventoryBackdropNode.active = visible;
        }
        if (this.slotGrid) {
            this.slotGrid.active = visible;
        }
        if (this.backgroundDimmer) {
            this.backgroundDimmer.active = visible;
        }

        this.closeButton?.node && (this.closeButton.node.active = visible);
        this.stackButton?.node && (this.stackButton.node.active = visible);
        this.swapButton?.node && (this.swapButton.node.active = visible);
        this.craftButton?.node && (this.craftButton.node.active = visible);
        this.previousButton?.node && (this.previousButton.node.active = visible);
        this.nextButton?.node && (this.nextButton.node.active = visible);
        this.sortButton?.node && (this.sortButton.node.active = visible);
        if (this.filterBarNode) {
            this.filterBarNode.active = visible;
        }
        if (this.pageIndicatorNode) {
            this.pageIndicatorNode.active = visible;
        }
        if (this.capacityControlNode) {
            this.capacityControlNode.active = visible;
        }

        // The backpack button remains available so a closed backpack can reopen.
        if (this.backpackButton) {
            this.backpackButton.node.active = true;
        }

        const buttonGroup = this.backpackButton?.node.parent;
        buttonGroup?.getComponent(Layout)?.updateLayout(true);

        if (visible) {
            this.renderCurrentPage();
        } else {
            this.saveInventory();
        }
    }

    private cancelActiveInteraction(): void {
        if (this.dragging) {
            if (this.dragSourcePage >= 0) {
                this.currentPage = this.dragSourcePage;
            }
            this.endDragVisual();
            this.resetTouchState();
        }

        this.cancelSwapMode();
        this.setSelectedIndex(-1);
    }

    private createDemoInventory(): void {
        const entries: InventoryEntry[] = [];

        const appendConfiguredStacks = (
            config: ItemConfigBase,
            configuredCount: number,
        ): void => {
            let remaining = Math.max(0, Math.floor(configuredCount));
            const maxStack = this.getItemMaxStack(config.id);
            while (remaining > 0) {
                const count = Math.min(maxStack, remaining);
                entries.push({ itemId: config.id, count });
                remaining -= count;
            }
        };

        this.itemCatalog.getAll().forEach((config) => {
            if (!config.icon) {
                return;
            }
            appendConfiguredStacks(config, config.initialCount);
            appendConfiguredStacks(config, config.initialExtraStackCount);
        });

        const capacity = Math.max(
            this.pageSize,
            Math.ceil(entries.length / this.pageSize) * this.pageSize,
        );
        this.inventory = [
            ...entries,
            ...new Array<InventoryEntry | null>(capacity - entries.length)
                .fill(null),
        ];
    }

    private saveInventory(): void {
        if (this.inventory.length === 0) {
            return;
        }

        const data: BackpackSaveData = {
            version: this.saveVersion,
            currentPage: this.currentPage,
            inventory: this.inventory.map((entry) => {
                if (!entry) {
                    return null;
                }

                return {
                    itemId: entry.itemId,
                    count: entry.count,
                };
            }),
        };

        try {
            sys.localStorage.setItem(this.saveKey, JSON.stringify(data));
        } catch (error) {
            console.warn('背包存档写入失败', error);
        }
    }

    private loadInventory(): boolean {
        let raw = '';
        try {
            raw = sys.localStorage.getItem(this.saveKey) ?? '';
        } catch (error) {
            console.warn('背包存档读取失败', error);
            return false;
        }

        if (!raw) {
            return false;
        }

        try {
            const data = JSON.parse(raw) as BackpackSaveData;
            if (
                data.version !== this.saveVersion
                || !Array.isArray(data.inventory)
            ) {
                return false;
            }

            const capacity = Math.max(this.pageSize, data.inventory.length);
            this.inventory = new Array<InventoryEntry | null>(capacity)
                .fill(null);
            const overflowEntries: InventoryEntry[] = [];

            data.inventory.forEach((savedEntry, index) => {
                if (!savedEntry || index >= capacity) {
                    return;
                }

                const itemId = Math.floor(savedEntry.itemId);
                const config = this.getItemConfig(itemId);
                if (!config?.icon || savedEntry.count <= 0) {
                    return;
                }

                const savedCount = Math.max(1, Math.floor(savedEntry.count));
                const maxStack = this.getItemMaxStack(itemId);
                this.inventory[index] = {
                    itemId,
                    count: Math.min(maxStack, savedCount),
                };
                let overflow = savedCount - maxStack;
                while (overflow > 0) {
                    const count = Math.min(maxStack, overflow);
                    overflowEntries.push({ itemId, count });
                    overflow -= count;
                }
            });

            overflowEntries.forEach((entry) => {
                let emptyIndex = this.inventory.findIndex(
                    (candidate) => candidate === null,
                );
                if (emptyIndex < 0) {
                    emptyIndex = this.inventory.length;
                    this.inventory.push(
                        ...new Array<InventoryEntry | null>(this.pageSize)
                            .fill(null),
                    );
                }
                this.inventory[emptyIndex] = entry;
            });

            const pageCount = this.getPageCount();
            this.currentPage = Math.min(
                pageCount - 1,
                Math.max(0, Math.floor(data.currentPage)),
            );
            console.log('背包存档读取成功');
            return true;
        } catch (error) {
            console.warn('背包存档格式无效，将使用初始数据', error);
            try {
                sys.localStorage.removeItem(this.saveKey);
            } catch {
                // Ignore storage cleanup errors and continue with demo data.
            }
            return false;
        }
    }

    private renderCurrentPage(): void {
        this.rebuildInventoryView();
        this.hideItemTooltip();
        this.hideContextMenu();
        this.setSelectedIndex(-1);

        this.slots.forEach((slot, localIndex) => {
            const inventoryIndex = this.getInventoryIndex(localIndex);
            const ownedSlot = inventoryIndex >= 0;
            slot.node.active = ownedSlot;
            if (!ownedSlot) {
                slot.clear();
                return;
            }

            const entry = this.getEntryAtLocalIndex(localIndex);
            if (!entry) {
                slot.clear();
                return;
            }

            const config = this.getItemConfig(entry.itemId);
            if (!config?.icon) {
                slot.clear();
                return;
            }

            const rarity = this.rarityFrames[
                this.getItemRarityIndex(entry.itemId)
            ] ?? null;
            slot.showItem(config.icon, entry.count, rarity);
        });
        this.slotGrid?.getComponent(Layout)?.updateLayout(true);

        if (this.dragging && this.currentPage === this.dragSourcePage) {
            this.slots[this.dragSourceLocalIndex]?.setContentVisible(false);
        }

        this.updateActionButtons();
        this.updatePageIndicator();
        this.updateCapacityDisplay();
        console.log(`背包页：${this.currentPage + 1}/${this.getPageCount()}`);
    }

    private rebuildInventoryView(): void {
        const hasActiveFilter = this.isInventoryFilterActive();

        if (!hasActiveFilter) {
            this.viewInventoryIndices = this.inventory.map((_entry, index) => index);
            this.filteredItemCount = this.inventory.reduce(
                (total, entry) => total + (entry ? 1 : 0),
                0,
            );
        } else {
            const matchingIndices: number[] = [];
            const emptyIndices: number[] = [];

            this.inventory.forEach((entry, index) => {
                if (!entry) {
                    emptyIndices.push(index);
                    return;
                }

                const config = this.getItemConfig(entry.itemId);
                if (!config) {
                    return;
                }
                const category = this.itemCatalog.getCategory(entry.itemId);
                const matchesCategory = this.activeCategory === '全部'
                    || category === this.activeCategory;
                const matchesRarity = this.activeRarityIndex === null
                    || this.getItemRarityIndex(entry.itemId)
                        === this.activeRarityIndex;
                const matchesName = this.searchQuery.length === 0
                    || config.itemName
                        .toLocaleLowerCase()
                        .includes(this.searchQuery);

                if (matchesCategory && matchesRarity && matchesName) {
                    matchingIndices.push(index);
                }
            });

            this.filteredItemCount = matchingIndices.length;
            const displayLength = Math.max(
                this.pageSize,
                Math.ceil(matchingIndices.length / this.pageSize)
                    * this.pageSize,
            );
            const paddingCount = displayLength - matchingIndices.length;
            this.viewInventoryIndices = [
                ...matchingIndices,
                ...emptyIndices.slice(0, paddingCount),
            ];
            while (this.viewInventoryIndices.length < displayLength) {
                this.viewInventoryIndices.push(-1);
            }
        }

        const pageCount = this.getPageCount();
        this.currentPage = Math.max(
            0,
            Math.min(this.currentPage, pageCount - 1),
        );
        if (this.filterStatusLabel) {
            this.filterStatusLabel.string = `检索结果：${this.filteredItemCount} 格`;
        }
    }

    private getInventoryIndex(localIndex: number): number {
        const viewIndex = this.currentPage * this.pageSize + localIndex;
        return this.viewInventoryIndices[viewIndex] ?? -1;
    }

    private getEntryAtLocalIndex(localIndex: number): InventoryEntry | null {
        return this.inventory[this.getInventoryIndex(localIndex)] ?? null;
    }

    private getPageCount(): number {
        const visibleLength = this.viewInventoryIndices.length > 0
            ? this.viewInventoryIndices.length
            : this.inventory.length;
        return Math.max(1, Math.ceil(visibleLength / this.pageSize));
    }

    private isInventoryFilterActive(): boolean {
        return this.activeCategory !== '全部'
            || this.activeRarityIndex !== null
            || this.searchQuery.length > 0;
    }

    private resolveTargetInventoryIndex(localIndex: number): number {
        const mappedIndex = this.getInventoryIndex(localIndex);
        if (
            this.isInventoryFilterActive()
            && (mappedIndex < 0 || !this.inventory[mappedIndex])
        ) {
            return -1;
        }
        if (mappedIndex >= 0) {
            return mappedIndex;
        }
        return this.inventory.findIndex((entry) => entry === null);
    }

    private finishSwap(targetLocalIndex: number): void {
        const sourceIndex = this.swapSourceInventoryIndex;
        const targetIndex = this.resolveTargetInventoryIndex(targetLocalIndex);

        if (
            sourceIndex >= 0
            && targetIndex >= 0
            && sourceIndex !== targetIndex
        ) {
            const sourceEntry = this.inventory[sourceIndex];
            this.inventory[sourceIndex] = this.inventory[targetIndex];
            this.inventory[targetIndex] = sourceEntry;
            this.playUiSound(this.itemSwapSound);
            console.log(`备用交换：${sourceIndex} <-> ${targetIndex}`);
        }

        this.cancelSwapMode();
        this.renderCurrentPage();
        this.saveInventory();
    }

    private cancelSwapMode(): void {
        this.swapMode = false;
        this.swapSourceInventoryIndex = -1;
    }

    private stackSelectedItem(): void {
        if (this.selectedLocalIndex < 0) {
            return;
        }

        const targetIndex = this.getInventoryIndex(this.selectedLocalIndex);
        const target = this.inventory[targetIndex];
        if (!target) {
            return;
        }
        const maxStack = this.getItemMaxStack(target.itemId);

        let moved = 0;
        for (let index = 0; index < this.inventory.length; index++) {
            if (index === targetIndex) {
                continue;
            }

            const source = this.inventory[index];
            if (!source || source.itemId !== target.itemId) {
                continue;
            }

            const available = maxStack - target.count;
            if (available <= 0) {
                break;
            }

            const transfer = Math.min(available, source.count);
            target.count += transfer;
            source.count -= transfer;
            moved += transfer;

            if (source.count <= 0) {
                this.inventory[index] = null;
            }
        }

        console.log(
            moved > 0
                ? `已堆叠 ${moved} 个物品到格子 ${targetIndex}`
                : '没有可以合并的同类物品',
        );
        this.renderCurrentPage();
        this.saveInventory();
    }

    private canCraftSelectedItem(): boolean {
        if (this.selectedLocalIndex < 0) {
            return false;
        }

        const target = this.getEntryAtLocalIndex(this.selectedLocalIndex);
        if (!target) {
            return false;
        }

        const recipe = this.getCraftRecipe(target.itemId);
        if (
            !recipe
            || target.count + recipe.craftOutputCount
                > this.getItemMaxStack(target.itemId)
        ) {
            return false;
        }

        return recipe.craftingIngredients.every(
            (ingredient) => this.getTotalItemCount(ingredient.itemId)
                >= ingredient.count,
        );
    }

    private craftSelectedItem(): void {
        if (!this.canCraftSelectedItem()) {
            console.log('当前物品不可合成或材料不足');
            return;
        }

        const targetIndex = this.getInventoryIndex(this.selectedLocalIndex);
        const target = this.inventory[targetIndex];
        if (!target) {
            return;
        }

        const recipe = this.getCraftRecipe(target.itemId);
        if (!recipe) {
            return;
        }

        recipe.craftingIngredients.forEach((ingredient) => {
            if (ingredient.consume) {
                this.consumeItem(ingredient.itemId, ingredient.count);
            }
        });
        target.count += recipe.craftOutputCount;

        console.log(
            `合成成功：${recipe.itemName} +${recipe.craftOutputCount}`,
        );
        this.renderCurrentPage();
        this.saveInventory();
    }

    private getCraftRecipe(itemId: number): ItemConfigBase | null {
        const config = this.getItemConfig(itemId);
        return config && config.craftingIngredients.length > 0
            ? config
            : null;
    }

    private getTotalItemCount(itemId: number): number {
        return this.inventory.reduce((total, entry) => {
            return entry?.itemId === itemId ? total + entry.count : total;
        }, 0);
    }

    private consumeItem(itemId: number, requestedCount: number): void {
        let remaining = requestedCount;

        for (let index = 0; index < this.inventory.length; index++) {
            const entry = this.inventory[index];
            if (!entry || entry.itemId !== itemId) {
                continue;
            }

            const consumed = Math.min(entry.count, remaining);
            entry.count -= consumed;
            remaining -= consumed;

            if (entry.count <= 0) {
                this.inventory[index] = null;
            }
            if (remaining <= 0) {
                return;
            }
        }
    }

    private bindButtons(): void {
        this.backpackButton?.node.on(
            Button.EventType.CLICK,
            this.onBackpackClicked,
            this,
        );
        this.closeButton?.node.on(
            Button.EventType.CLICK,
            this.onCloseClicked,
            this,
        );
        this.stackButton?.node.on(
            Button.EventType.CLICK,
            this.onStackClicked,
            this,
        );
        this.swapButton?.node.on(
            Button.EventType.CLICK,
            this.onSwapClicked,
            this,
        );
        this.craftButton?.node.on(
            Button.EventType.CLICK,
            this.onCraftClicked,
            this,
        );
        this.previousButton?.node.on(
            Button.EventType.CLICK,
            this.onPreviousClicked,
            this,
        );
        this.nextButton?.node.on(
            Button.EventType.CLICK,
            this.onNextClicked,
            this,
        );
        this.sortButton?.node.on(
            Button.EventType.CLICK,
            this.onSortClicked,
            this,
        );
    }

    private unbindButtons(): void {
        this.backpackButton?.node.off(
            Button.EventType.CLICK,
            this.onBackpackClicked,
            this,
        );
        this.closeButton?.node.off(
            Button.EventType.CLICK,
            this.onCloseClicked,
            this,
        );
        this.stackButton?.node.off(
            Button.EventType.CLICK,
            this.onStackClicked,
            this,
        );
        this.swapButton?.node.off(
            Button.EventType.CLICK,
            this.onSwapClicked,
            this,
        );
        this.craftButton?.node.off(
            Button.EventType.CLICK,
            this.onCraftClicked,
            this,
        );
        this.previousButton?.node.off(
            Button.EventType.CLICK,
            this.onPreviousClicked,
            this,
        );
        this.nextButton?.node.off(
            Button.EventType.CLICK,
            this.onNextClicked,
            this,
        );
        this.sortButton?.node.off(
            Button.EventType.CLICK,
            this.onSortClicked,
            this,
        );
    }

    private onBackpackClicked(): void {
        if (!this.backpackVisible) {
            this.setBackpackVisible(true);
            this.playUiSound(this.backpackOpenSound);
            console.log('打开背包');
        }
    }

    private onCloseClicked(): void {
        if (!this.backpackVisible) {
            return;
        }
        this.setBackpackVisible(false);
        this.playUiSound(this.backpackCloseSound);
        console.log('关闭背包');
    }

    private onStackClicked(): void {
        this.stackSelectedItem();
    }

    private onSwapClicked(): void {
        if (this.selectedLocalIndex < 0) {
            return;
        }

        this.swapMode = true;
        this.swapSourceInventoryIndex = this.getInventoryIndex(
            this.selectedLocalIndex,
        );
        console.log(
            `备用交换模式：请选择格子 ${this.swapSourceInventoryIndex} 的目标位置`,
        );
        this.updateActionButtons();
    }

    private onCraftClicked(): void {
        this.craftSelectedItem();
    }

    private onPreviousClicked(): void {
        const pageCount = this.getPageCount();
        const previousPage = (this.currentPage - 1 + pageCount) % pageCount;
        if (previousPage === this.currentPage) {
            return;
        }
        this.currentPage = previousPage;
        this.playUiSound(this.pageTurnSound);
        this.renderCurrentPage();
        this.saveInventory();
    }

    private onNextClicked(): void {
        const nextPage = (this.currentPage + 1) % this.getPageCount();
        if (nextPage === this.currentPage) {
            return;
        }
        this.currentPage = nextPage;
        this.playUiSound(this.pageTurnSound);
        this.renderCurrentPage();
        this.saveInventory();
    }

    private onSortClicked(): void {
        const ascending = this.sortAscending;
        const entries = this.inventory.filter(
            (entry): entry is InventoryEntry => entry !== null,
        );

        entries.sort((left, right) => {
            const rarityDifference = this.getItemRarityIndex(left.itemId)
                - this.getItemRarityIndex(right.itemId);
            if (rarityDifference !== 0) {
                return ascending ? rarityDifference : -rarityDifference;
            }

            const itemDifference = left.itemId - right.itemId;
            if (itemDifference !== 0) {
                return itemDifference;
            }
            return right.count - left.count;
        });

        const emptyCount = this.inventory.length - entries.length;
        this.inventory = [
            ...entries,
            ...new Array<InventoryEntry | null>(emptyCount).fill(null),
        ];

        this.cancelActiveInteraction();
        this.currentPage = 0;
        this.sortAscending = !ascending;
        this.updateSortButtonVisual();
        this.renderCurrentPage();
        this.saveInventory();
        this.playUiSound(this.backpackSortSound);

        console.log(
            ascending
                ? '背包整理完成：稀有度升序'
                : '背包整理完成：稀有度降序',
        );
    }

    private playUiSound(clip: AudioClip | null): void {
        if (!clip) {
            return;
        }

        const volume = Math.max(0, Math.min(1, this.soundVolume));
        if (volume <= 0) {
            return;
        }

        this.uiAudioSource ??= this.getComponent(AudioSource)
            ?? this.node.addComponent(AudioSource);
        this.uiAudioSource.playOneShot(clip, volume);
    }
}
