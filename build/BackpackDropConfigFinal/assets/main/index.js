System.register("chunks:///_virtual/BackpackController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ItemSlot.ts', './ItemCatalog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _createForOfIteratorHelperLoose, _assertThisInitialized, cclegacy, _decorator, Vec2, Node, Button, AudioClip, SpriteFrame, AudioSource, UITransform, BlockInputEvents, Graphics, Color, Label, instantiate, UIOpacity, Tween, tween, Vec3, EventMouse, Sprite, LabelOutline, Layout, EditBox, Slider, sys, Component, ItemSlot, WeaponItemConfig, ArmorItemConfig, ConsumableItemConfig, MaterialItemConfig, QuestItemConfig, OtherItemConfig, ItemConfigCatalog, RARITY_NAMES, INVENTORY_CATEGORIES;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Node = module.Node;
      Button = module.Button;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      AudioSource = module.AudioSource;
      UITransform = module.UITransform;
      BlockInputEvents = module.BlockInputEvents;
      Graphics = module.Graphics;
      Color = module.Color;
      Label = module.Label;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
      EventMouse = module.EventMouse;
      Sprite = module.Sprite;
      LabelOutline = module.LabelOutline;
      Layout = module.Layout;
      EditBox = module.EditBox;
      Slider = module.Slider;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      ItemSlot = module.ItemSlot;
    }, function (module) {
      WeaponItemConfig = module.WeaponItemConfig;
      ArmorItemConfig = module.ArmorItemConfig;
      ConsumableItemConfig = module.ConsumableItemConfig;
      MaterialItemConfig = module.MaterialItemConfig;
      QuestItemConfig = module.QuestItemConfig;
      OtherItemConfig = module.OtherItemConfig;
      ItemConfigCatalog = module.ItemConfigCatalog;
      RARITY_NAMES = module.RARITY_NAMES;
      INVENTORY_CATEGORIES = module.INVENTORY_CATEGORIES;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _dec21, _dec22, _dec23, _dec24, _class4, _class5, _descriptor20, _descriptor21, _descriptor22, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class7, _class8, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _class10, _class11, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _dec61, _dec62, _dec63, _class13, _class14, _descriptor57, _descriptor58, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _class16, _class17, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _descriptor73, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _class19, _class20, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _descriptor80, _descriptor81, _descriptor82, _descriptor83, _descriptor84, _descriptor85, _descriptor86, _descriptor87, _descriptor88, _descriptor89, _descriptor90, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _class21;
      cclegacy._RF.push({}, "efbc1ilOs1Ov57yqczV+TKj", "BackpackController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragFeelInspectorConfig = exports('DragFeelInspectorConfig', (_dec = ccclass('DragFeelInspectorConfig'), _dec2 = property({
        displayName: '拖动触发距离',
        range: [1, 30, 1],
        slide: true
      }), _dec3 = property({
        displayName: '跟随强度',
        range: [30, 300, 1],
        slide: true
      }), _dec4 = property({
        displayName: '跟随阻尼',
        range: [1, 40, 0.5],
        slide: true
      }), _dec5 = property({
        displayName: '最大倾斜角度',
        range: [0, 20, 0.5],
        slide: true
      }), _dec6 = property({
        displayName: '倾斜灵敏度',
        range: [0, 0.05, 0.001],
        slide: true
      }), _dec7 = property({
        displayName: '指针偏移 X',
        range: [-40, 40, 1],
        slide: true
      }), _dec8 = property({
        displayName: '指针偏移 Y',
        range: [-40, 40, 1],
        slide: true
      }), _dec9 = property({
        displayName: '拾取起始缩放',
        range: [0.4, 1.2, 0.01],
        slide: true
      }), _dec10 = property({
        displayName: '拾取峰值缩放',
        range: [0.8, 1.5, 0.01],
        slide: true
      }), _dec11 = property({
        displayName: '拖拽保持缩放',
        range: [0.7, 1.3, 0.01],
        slide: true
      }), _dec12 = property({
        displayName: '拾取动画时间',
        range: [0.03, 0.4, 0.01],
        slide: true
      }), _dec13 = property({
        displayName: '拾取回弹时间',
        range: [0.03, 0.4, 0.01],
        slide: true
      }), _dec14 = property({
        displayName: '拖拽透明度',
        range: [80, 255, 1],
        slide: true
      }), _dec15 = property({
        displayName: '目标格缩放',
        range: [1, 1.2, 0.005],
        slide: true
      }), _dec16 = property({
        displayName: '目标格响应时间',
        range: [0.02, 0.3, 0.01],
        slide: true
      }), _dec17 = property({
        displayName: '落格缩放',
        range: [0.4, 1, 0.01],
        slide: true
      }), _dec18 = property({
        displayName: '落格动画时间',
        range: [0.05, 0.5, 0.01],
        slide: true
      }), _dec19 = property({
        displayName: '落格淡出延迟',
        range: [0, 0.3, 0.01],
        slide: true
      }), _dec20 = property({
        displayName: '落格淡出时间',
        range: [0.03, 0.4, 0.01],
        slide: true
      }), _dec(_class = (_class2 = function DragFeelInspectorConfig() {
        _initializerDefineProperty(this, "triggerDistance", _descriptor, this);
        _initializerDefineProperty(this, "followStiffness", _descriptor2, this);
        _initializerDefineProperty(this, "followDamping", _descriptor3, this);
        _initializerDefineProperty(this, "maximumTilt", _descriptor4, this);
        _initializerDefineProperty(this, "tiltSensitivity", _descriptor5, this);
        _initializerDefineProperty(this, "pointerOffsetX", _descriptor6, this);
        _initializerDefineProperty(this, "pointerOffsetY", _descriptor7, this);
        _initializerDefineProperty(this, "pickupStartScale", _descriptor8, this);
        _initializerDefineProperty(this, "pickupPeakScale", _descriptor9, this);
        _initializerDefineProperty(this, "draggingScale", _descriptor10, this);
        _initializerDefineProperty(this, "pickupDuration", _descriptor11, this);
        _initializerDefineProperty(this, "pickupSettleDuration", _descriptor12, this);
        _initializerDefineProperty(this, "draggingOpacity", _descriptor13, this);
        _initializerDefineProperty(this, "targetHoverScale", _descriptor14, this);
        _initializerDefineProperty(this, "targetHoverDuration", _descriptor15, this);
        _initializerDefineProperty(this, "dropScale", _descriptor16, this);
        _initializerDefineProperty(this, "dropDuration", _descriptor17, this);
        _initializerDefineProperty(this, "dropFadeDelay", _descriptor18, this);
        _initializerDefineProperty(this, "dropFadeDuration", _descriptor19, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "triggerDistance", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "followStiffness", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "followDamping", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 19;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maximumTilt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 7;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tiltSensitivity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.018;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pointerOffsetX", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 14;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pointerOffsetY", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -14;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pickupStartScale", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.76;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pickupPeakScale", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.14;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "draggingScale", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.04;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pickupDuration", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pickupSettleDuration", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.12;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "draggingOpacity", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 245;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "targetHoverScale", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.045;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "targetHoverDuration", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.08;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "dropScale", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.72;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "dropDuration", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.16;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "dropFadeDelay", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.06;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "dropFadeDuration", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));
      var BackpackButtonTextInspectorEntry = exports('BackpackButtonTextInspectorEntry', (_dec21 = ccclass('BackpackButtonTextInspectorEntry'), _dec22 = property({
        displayName: '按钮下方文字'
      }), _dec23 = property({
        displayName: '提示框标题'
      }), _dec24 = property({
        displayName: '提示框说明',
        multiline: true
      }), _dec21(_class4 = (_class5 = function BackpackButtonTextInspectorEntry() {
        _initializerDefineProperty(this, "label", _descriptor20, this);
        _initializerDefineProperty(this, "title", _descriptor21, this);
        _initializerDefineProperty(this, "description", _descriptor22, this);
      }, (_descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "label", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class5.prototype, "title", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class5.prototype, "description", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class5)) || _class4));
      var BackpackButtonTextInspectorConfig = exports('BackpackButtonTextInspectorConfig', (_dec25 = ccclass('BackpackButtonTextInspectorConfig'), _dec26 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '背包按钮'
      }), _dec27 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '关闭按钮'
      }), _dec28 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '堆叠按钮'
      }), _dec29 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '交换按钮'
      }), _dec30 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '合成按钮'
      }), _dec31 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '整理按钮',
        tooltip: '文字中的 {direction} 会在运行时替换为 ↑ 或 ↓。'
      }), _dec32 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '上一页按钮'
      }), _dec33 = property({
        type: BackpackButtonTextInspectorEntry,
        displayName: '下一页按钮'
      }), _dec34 = property({
        displayName: '按钮不可用提示',
        multiline: true,
        tooltip: '按钮不可点击时追加在提示框末尾；留空则不显示。'
      }), _dec25(_class7 = (_class8 = function BackpackButtonTextInspectorConfig() {
        _initializerDefineProperty(this, "backpack", _descriptor23, this);
        _initializerDefineProperty(this, "close", _descriptor24, this);
        _initializerDefineProperty(this, "stack", _descriptor25, this);
        _initializerDefineProperty(this, "swap", _descriptor26, this);
        _initializerDefineProperty(this, "craft", _descriptor27, this);
        _initializerDefineProperty(this, "sort", _descriptor28, this);
        _initializerDefineProperty(this, "previous", _descriptor29, this);
        _initializerDefineProperty(this, "next", _descriptor30, this);
        _initializerDefineProperty(this, "unavailableHint", _descriptor31, this);
      }, (_descriptor23 = _applyDecoratedDescriptor(_class8.prototype, "backpack", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class8.prototype, "close", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class8.prototype, "stack", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class8.prototype, "swap", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class8.prototype, "craft", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class8.prototype, "sort", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class8.prototype, "previous", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class8.prototype, "next", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorEntry();
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class8.prototype, "unavailableHint", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class8)) || _class7));
      var ItemTooltipTextInspectorConfig = exports('ItemTooltipTextInspectorConfig', (_dec35 = ccclass('ItemTooltipTextInspectorConfig'), _dec36 = property({
        displayName: '详情框总模板',
        multiline: true,
        tooltip: '支持 {name}、{rarity}、{type}、{category}、{count}、{maxStack}、{weight}、{specificDetails}、{description}、{usage}、{useAction}、{discardAction}。'
      }), _dec37 = property({
        displayName: '武器属性模板',
        tooltip: '支持 {attack}、{speed}、{range}。'
      }), _dec38 = property({
        displayName: '防具属性模板',
        tooltip: '支持 {defense}、{magicResistance}。'
      }), _dec39 = property({
        displayName: '消耗品属性模板',
        tooltip: '支持 {cooldown}、{useDuration}、{charges}。'
      }), _dec40 = property({
        displayName: '材料属性模板',
        tooltip: '支持 {level}、{quality}。'
      }), _dec41 = property({
        displayName: '任务物品属性模板',
        tooltip: '支持 {quest}、{stage}。'
      }), _dec42 = property({
        displayName: '其他物品属性模板',
        tooltip: '支持 {customCategory}、{action}。'
      }), _dec43 = property({
        displayName: '额外属性整行模板',
        tooltip: '支持 {attributes}。'
      }), _dec44 = property({
        displayName: '单项额外属性模板',
        tooltip: '支持 {name}、{value}。'
      }), _dec45 = property({
        displayName: '效果整行模板',
        tooltip: '支持 {effects}。'
      }), _dec46 = property({
        displayName: '单项效果模板',
        tooltip: '支持 {type}、{value}。'
      }), _dec47 = property({
        displayName: '多项内容分隔符'
      }), _dec48 = property({
        displayName: '百分比数值模板',
        tooltip: '支持 {value}。'
      }), _dec49 = property({
        type: [String],
        displayName: '稀有度显示名称',
        tooltip: '索引依次对应普通、优秀、稀有、史诗、传说、特殊。'
      }), _dec50 = property({
        displayName: '未知稀有度文字'
      }), _dec51 = property({
        displayName: '未分类文字'
      }), _dec52 = property({
        displayName: '无用途说明文字'
      }), _dec53 = property({
        displayName: '可使用文字'
      }), _dec54 = property({
        displayName: '不可使用文字'
      }), _dec55 = property({
        displayName: '可丢弃文字'
      }), _dec56 = property({
        displayName: '不可丢弃文字'
      }), _dec57 = property({
        displayName: '未设置文字'
      }), _dec58 = property({
        displayName: '未绑定任务文字'
      }), _dec59 = property({
        displayName: '其他分类文字'
      }), _dec60 = property({
        displayName: '无专用动作文字'
      }), _dec35(_class10 = (_class11 = function ItemTooltipTextInspectorConfig() {
        _initializerDefineProperty(this, "tooltipTemplate", _descriptor32, this);
        _initializerDefineProperty(this, "weaponDetailTemplate", _descriptor33, this);
        _initializerDefineProperty(this, "armorDetailTemplate", _descriptor34, this);
        _initializerDefineProperty(this, "consumableDetailTemplate", _descriptor35, this);
        _initializerDefineProperty(this, "materialDetailTemplate", _descriptor36, this);
        _initializerDefineProperty(this, "questDetailTemplate", _descriptor37, this);
        _initializerDefineProperty(this, "otherDetailTemplate", _descriptor38, this);
        _initializerDefineProperty(this, "extraAttributesTemplate", _descriptor39, this);
        _initializerDefineProperty(this, "extraAttributeEntryTemplate", _descriptor40, this);
        _initializerDefineProperty(this, "effectsTemplate", _descriptor41, this);
        _initializerDefineProperty(this, "effectEntryTemplate", _descriptor42, this);
        _initializerDefineProperty(this, "listSeparator", _descriptor43, this);
        _initializerDefineProperty(this, "percentageValueTemplate", _descriptor44, this);
        _initializerDefineProperty(this, "rarityNames", _descriptor45, this);
        _initializerDefineProperty(this, "unknownRarityText", _descriptor46, this);
        _initializerDefineProperty(this, "uncategorizedText", _descriptor47, this);
        _initializerDefineProperty(this, "noUsageText", _descriptor48, this);
        _initializerDefineProperty(this, "useActionText", _descriptor49, this);
        _initializerDefineProperty(this, "cannotUseActionText", _descriptor50, this);
        _initializerDefineProperty(this, "discardActionText", _descriptor51, this);
        _initializerDefineProperty(this, "cannotDiscardActionText", _descriptor52, this);
        _initializerDefineProperty(this, "unsetText", _descriptor53, this);
        _initializerDefineProperty(this, "unboundQuestText", _descriptor54, this);
        _initializerDefineProperty(this, "otherCategoryText", _descriptor55, this);
        _initializerDefineProperty(this, "noDedicatedActionText", _descriptor56, this);
      }, (_descriptor32 = _applyDecoratedDescriptor(_class11.prototype, "tooltipTemplate", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class11.prototype, "weaponDetailTemplate", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class11.prototype, "armorDetailTemplate", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class11.prototype, "consumableDetailTemplate", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class11.prototype, "materialDetailTemplate", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class11.prototype, "questDetailTemplate", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class11.prototype, "otherDetailTemplate", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class11.prototype, "extraAttributesTemplate", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class11.prototype, "extraAttributeEntryTemplate", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class11.prototype, "effectsTemplate", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class11.prototype, "effectEntryTemplate", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class11.prototype, "listSeparator", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class11.prototype, "percentageValueTemplate", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class11.prototype, "rarityNames", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class11.prototype, "unknownRarityText", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class11.prototype, "uncategorizedText", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class11.prototype, "noUsageText", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class11.prototype, "useActionText", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class11.prototype, "cannotUseActionText", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class11.prototype, "discardActionText", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class11.prototype, "cannotDiscardActionText", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class11.prototype, "unsetText", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class11.prototype, "unboundQuestText", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class11.prototype, "otherCategoryText", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class11.prototype, "noDedicatedActionText", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class11)) || _class10));
      var WorldInitialItemConfig = exports('WorldInitialItemConfig', (_dec61 = ccclass('WorldInitialItemConfig'), _dec62 = property({
        displayName: '物品 ID',
        min: 0,
        tooltip: '填写物品配置表中的 ID。无效 ID 会被跳过。'
      }), _dec63 = property({
        displayName: '生成数量',
        min: 1,
        tooltip: '进入场景时，这一组常驻测试物品包含的数量。'
      }), _dec61(_class13 = (_class14 = function WorldInitialItemConfig() {
        _initializerDefineProperty(this, "itemId", _descriptor57, this);
        _initializerDefineProperty(this, "count", _descriptor58, this);
      }, (_descriptor57 = _applyDecoratedDescriptor(_class14.prototype, "itemId", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class14.prototype, "count", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class14)) || _class13));
      var WorldItemScenarioConfig = exports('WorldItemScenarioConfig', (_dec64 = ccclass('WorldItemScenarioConfig'), _dec65 = property({
        displayName: '启用测试',
        tooltip: '关闭后不创建测试区和场景物品；背包丢弃会直接移除物品。'
      }), _dec66 = property({
        displayName: '生成初始物品',
        tooltip: '关闭后仍可把背包物品丢到场景，但进入场景时不会预放物品。'
      }), _dec67 = property({
        type: [WorldInitialItemConfig],
        displayName: '初始场景物品',
        tooltip: '按物品 ID 和数量配置进入场景时预放的常驻测试物品。'
      }), _dec68 = property({
        displayName: '掉落物存活时间（秒）',
        min: 0.1,
        tooltip: '从背包丢到场景中的物品，超过该时间后永久消失。'
      }), _dec69 = property({
        displayName: '场景物品数量上限',
        min: 1,
        tooltip: '测试区同时允许存在的物品格数量，初始物品也计入上限。'
      }), _dec70 = property({
        type: Vec2,
        displayName: '测试区位置',
        tooltip: '相对 Canvas 中心的位置。'
      }), _dec71 = property({
        displayName: '测试区宽度',
        min: 100
      }), _dec72 = property({
        displayName: '测试区高度',
        min: 180
      }), _dec73 = property({
        displayName: '每行列数',
        min: 1
      }), _dec74 = property({
        displayName: '列间距',
        min: 1
      }), _dec75 = property({
        displayName: '行间距',
        min: 1
      }), _dec76 = property({
        displayName: '首行 Y 坐标',
        tooltip: '第一行场景物品相对测试区中心的 Y 坐标。'
      }), _dec77 = property({
        displayName: '物品显示缩放',
        range: [0.2, 1.5, 0.01],
        slide: true
      }), _dec78 = property({
        displayName: '测试区标题'
      }), _dec79 = property({
        displayName: '操作说明',
        multiline: true,
        tooltip: '可使用 {lifetime} 占位符，运行时会替换为掉落物存活秒数。'
      }), _dec64(_class16 = (_class17 = function WorldItemScenarioConfig() {
        _initializerDefineProperty(this, "enabled", _descriptor59, this);
        _initializerDefineProperty(this, "spawnInitialItems", _descriptor60, this);
        _initializerDefineProperty(this, "initialItems", _descriptor61, this);
        _initializerDefineProperty(this, "discardLifetime", _descriptor62, this);
        _initializerDefineProperty(this, "maximumWorldItemCount", _descriptor63, this);
        _initializerDefineProperty(this, "areaPosition", _descriptor64, this);
        _initializerDefineProperty(this, "areaWidth", _descriptor65, this);
        _initializerDefineProperty(this, "areaHeight", _descriptor66, this);
        _initializerDefineProperty(this, "columnCount", _descriptor67, this);
        _initializerDefineProperty(this, "columnSpacing", _descriptor68, this);
        _initializerDefineProperty(this, "rowSpacing", _descriptor69, this);
        _initializerDefineProperty(this, "firstRowY", _descriptor70, this);
        _initializerDefineProperty(this, "itemScale", _descriptor71, this);
        _initializerDefineProperty(this, "title", _descriptor72, this);
        _initializerDefineProperty(this, "instructions", _descriptor73, this);
      }, (_descriptor59 = _applyDecoratedDescriptor(_class17.prototype, "enabled", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class17.prototype, "spawnInitialItems", [_dec66], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class17.prototype, "initialItems", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class17.prototype, "discardLifetime", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class17.prototype, "maximumWorldItemCount", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class17.prototype, "areaPosition", [_dec70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(-525, 0);
        }
      }), _descriptor65 = _applyDecoratedDescriptor(_class17.prototype, "areaWidth", [_dec71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 220;
        }
      }), _descriptor66 = _applyDecoratedDescriptor(_class17.prototype, "areaHeight", [_dec72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 690;
        }
      }), _descriptor67 = _applyDecoratedDescriptor(_class17.prototype, "columnCount", [_dec73], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor68 = _applyDecoratedDescriptor(_class17.prototype, "columnSpacing", [_dec74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 104;
        }
      }), _descriptor69 = _applyDecoratedDescriptor(_class17.prototype, "rowSpacing", [_dec75], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 118;
        }
      }), _descriptor70 = _applyDecoratedDescriptor(_class17.prototype, "firstRowY", [_dec76], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 112;
        }
      }), _descriptor71 = _applyDecoratedDescriptor(_class17.prototype, "itemScale", [_dec77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.82;
        }
      }), _descriptor72 = _applyDecoratedDescriptor(_class17.prototype, "title", [_dec78], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '场景物品测试区';
        }
      }), _descriptor73 = _applyDecoratedDescriptor(_class17.prototype, "instructions", [_dec79], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '点击物品：拾取到背包\n右键背包：选择数量丢弃\n掉落物 {lifetime} 秒后永久消失';
        }
      })), _class17)) || _class16));
      var BackpackController = exports('BackpackController', (_dec80 = ccclass('BackpackController'), _dec81 = property(Node), _dec82 = property(Button), _dec83 = property(Button), _dec84 = property({
        type: Node,
        displayName: '背包背景遮罩',
        tooltip: '背包打开时显示、关闭时隐藏的全屏遮罩节点。'
      }), _dec85 = property(Button), _dec86 = property(Button), _dec87 = property(Button), _dec88 = property(Button), _dec89 = property(Button), _dec90 = property({
        type: BackpackButtonTextInspectorConfig,
        displayName: '按钮文字与提示框配置',
        tooltip: '统一调整按钮下方文字、鼠标悬停标题和说明。整理按钮支持 {direction} 占位符。'
      }), _dec91 = property({
        type: ItemTooltipTextInspectorConfig,
        displayName: '物品详情提示配置',
        tooltip: '配置物品详情框的总模板、各类型属性模板和状态文字。物品名称、描述与用途仍在各物品配置项中编辑。'
      }), _dec92 = property({
        type: AudioClip,
        displayName: '背包翻页音效',
        tooltip: '上一页、下一页、页码圆点和拖拽越页时播放。'
      }), _dec93 = property({
        type: AudioClip,
        displayName: '切换背包音效',
        tooltip: '切换背包分类时播放。'
      }), _dec94 = property({
        type: AudioClip,
        displayName: '点击物品音效',
        tooltip: '点击或右键选中背包物品时播放。'
      }), _dec95 = property({
        type: AudioClip,
        displayName: '交换物品音效',
        tooltip: '拖拽或交换模式成功交换物品时播放。'
      }), _dec96 = property({
        type: AudioClip,
        displayName: '关闭背包音效'
      }), _dec97 = property({
        type: AudioClip,
        displayName: '打开背包音效'
      }), _dec98 = property({
        type: AudioClip,
        displayName: '整理背包音效'
      }), _dec99 = property({
        displayName: '背包音效音量',
        range: [0, 1, 0.05],
        slide: true
      }), _dec100 = property([SpriteFrame]), _dec101 = property({
        type: [WeaponItemConfig],
        displayName: '武器物品配置',
        tooltip: '武器共有属性由装备/武器配置父类提供，具体数值都在此编辑。'
      }), _dec102 = property({
        type: [ArmorItemConfig],
        displayName: '防具物品配置',
        tooltip: '防具共有属性由装备/防具配置父类提供，具体数值都在此编辑。'
      }), _dec103 = property({
        type: [ConsumableItemConfig],
        displayName: '消耗品配置',
        tooltip: '药剂、食物、卷轴等可使用物品的配置表。'
      }), _dec104 = property({
        type: [MaterialItemConfig],
        displayName: '材料物品配置',
        tooltip: '制作材料、货币等可堆叠资源的配置表。'
      }), _dec105 = property({
        type: [QuestItemConfig],
        displayName: '任务物品配置',
        tooltip: '任务关联、关键物品和任务完成处理均在此配置。'
      }), _dec106 = property({
        type: [OtherItemConfig],
        displayName: '其他物品配置',
        tooltip: '工具等不属于前述分类的物品配置表。'
      }), _dec107 = property({
        type: DragFeelInspectorConfig,
        displayName: '拖拽手感配置',
        tooltip: '所有拖拽跟手、回弹、倾斜和落格参数都可在这里调整。'
      }), _dec108 = property({
        type: WorldItemScenarioConfig,
        displayName: '场景物品测试配置',
        tooltip: '统一配置测试开关、初始物品、掉落寿命和测试区布局。'
      }), _dec80(_class19 = (_class20 = (_class21 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackpackController, _Component);
        function BackpackController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "slotGrid", _descriptor74, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backpackButton", _descriptor75, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeButton", _descriptor76, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backgroundDimmer", _descriptor77, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackButton", _descriptor78, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "swapButton", _descriptor79, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "craftButton", _descriptor80, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "previousButton", _descriptor81, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextButton", _descriptor82, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonTextConfig", _descriptor83, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTooltipTextConfig", _descriptor84, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageTurnSound", _descriptor85, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backpackSwitchSound", _descriptor86, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemClickSound", _descriptor87, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemSwapSound", _descriptor88, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backpackCloseSound", _descriptor89, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backpackOpenSound", _descriptor90, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backpackSortSound", _descriptor91, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundVolume", _descriptor92, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rarityFrames", _descriptor93, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weaponItems", _descriptor94, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "armorItems", _descriptor95, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "consumableItems", _descriptor96, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "materialItems", _descriptor97, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "questItems", _descriptor98, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "otherItems", _descriptor99, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragFeel", _descriptor100, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "worldScenario", _descriptor101, _assertThisInitialized(_this));
          _this.slots = [];
          _this.inventory = [];
          _this.panelNode = null;
          _this.inventoryBackdropNode = null;
          _this.backpackVisible = true;
          _this.selectedLocalIndex = -1;
          _this.currentPage = 0;
          _this.pageSize = 16;
          _this.swapMode = false;
          _this.swapSourceInventoryIndex = -1;
          _this.activeTouchLocalIndex = -1;
          _this.dragCandidate = false;
          _this.dragging = false;
          _this.dragSourceInventoryIndex = -1;
          _this.dragSourcePage = -1;
          _this.dragSourceLocalIndex = -1;
          _this.dragStartLocation = new Vec2();
          _this.lastDragLocation = new Vec2();
          _this.dragIconNode = null;
          _this.dragIconSprite = null;
          _this.dragRaritySprite = null;
          _this.dragCountLabel = null;
          _this.dragIconOpacity = null;
          _this.dragTargetPosition = new Vec3();
          _this.dragVelocity = new Vec3();
          _this.dragDropAnimating = false;
          _this.dragHoverLocalIndex = -1;
          _this.previousPageSwitchArmed = true;
          _this.nextPageSwitchArmed = true;
          _this.saveVersion = 1;
          _this.saveKey = 'backpack-design.inventory.v1';
          _this.buttonHelpByNode = new Map();
          _this.tooltipNode = null;
          _this.tooltipLabel = null;
          _this.itemTooltipNode = null;
          _this.itemTooltipLabel = null;
          _this.contextMenuNode = null;
          _this.contextUseButton = null;
          _this.contextDiscardButton = null;
          _this.sortButton = null;
          _this.sortDirectionLabel = null;
          _this.sortAscending = true;
          _this.uiAudioSource = null;
          _this.filterBarNode = null;
          _this.searchEditBox = null;
          _this.rarityFilterButton = null;
          _this.rarityMenuNode = null;
          _this.filterStatusLabel = null;
          _this.categorySelectionIndicator = null;
          _this.categoryTransitioning = false;
          _this.pendingInventoryCategory = null;
          _this.slotGridRestPosition = null;
          _this.pageIndicatorNode = null;
          _this.pageDotNodes = [];
          _this.pageDotPageIndices = [];
          _this.maxVisiblePageDots = 5;
          _this.lastPageIndicatorPage = -1;
          _this.capacityControlNode = null;
          _this.capacityLabel = null;
          _this.capacityExpansionOverlay = null;
          _this.categoryButtons = new Map();
          _this.rarityOptionButtons = new Map();
          _this.viewInventoryIndices = [];
          _this.filteredItemCount = 0;
          _this.activeCategory = '全部';
          _this.activeRarityIndex = null;
          _this.searchQuery = '';
          _this.quantityDialogNode = null;
          _this.quantityDialogLabel = null;
          _this.quantitySlider = null;
          _this.quantityEditBox = null;
          _this.quantityConfirmButton = null;
          _this.pendingQuantityOperation = null;
          _this.pendingQuantityIndex = -1;
          _this.pendingQuantityMaximum = 1;
          _this.pendingQuantity = 1;
          _this.worldItemLayer = null;
          _this.worldItemArea = null;
          _this.worldStatusLabel = null;
          _this.worldItems = [];
          _this.nextWorldItemId = 1;
          _this.itemCatalog = new ItemConfigCatalog();
          return _this;
        }
        var _proto = BackpackController.prototype;
        _proto.start = function start() {
          var _this$getComponent,
            _this$backgroundDimme,
            _this$node$parent$get,
            _this$node$parent,
            _this$dragFeel,
            _this$itemTooltipText,
            _this2 = this;
          if (!this.slotGrid) {
            console.error('BackpackController: SlotGrid 未绑定');
            return;
          }
          this.uiAudioSource = (_this$getComponent = this.getComponent(AudioSource)) != null ? _this$getComponent : this.node.addComponent(AudioSource);
          this.slots = this.slotGrid.children.map(function (node) {
            return node.getComponent(ItemSlot);
          }).filter(function (slot) {
            return slot !== null;
          });
          this.panelNode = this.node.getChildByName('Panel');
          (_this$backgroundDimme = this.backgroundDimmer) != null ? _this$backgroundDimme : this.backgroundDimmer = (_this$node$parent$get = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getChildByName('BackgroundDimmer')) != null ? _this$node$parent$get : null;
          (_this$dragFeel = this.dragFeel) != null ? _this$dragFeel : this.dragFeel = new DragFeelInspectorConfig();
          this.normalizeWorldScenarioConfig();
          this.normalizeButtonTextConfig();
          (_this$itemTooltipText = this.itemTooltipTextConfig) != null ? _this$itemTooltipText : this.itemTooltipTextConfig = new ItemTooltipTextInspectorConfig();
          this.rebuildItemCatalog();
          this.slots.forEach(function (slot) {
            return _this2.bindSlotTouchEvents(slot);
          });
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
        };
        _proto.normalizeButtonTextConfig = function normalizeButtonTextConfig() {
          var _this$buttonTextConfi, _this$buttonTextConfi2, _this$buttonTextConfi3;
          var defaults = new BackpackButtonTextInspectorConfig();
          (_this$buttonTextConfi = this.buttonTextConfig) != null ? _this$buttonTextConfi : this.buttonTextConfig = defaults;
          this.buttonTextConfig.backpack = this.normalizeButtonTextEntry(this.buttonTextConfig.backpack, defaults.backpack);
          this.buttonTextConfig.close = this.normalizeButtonTextEntry(this.buttonTextConfig.close, defaults.close);
          this.buttonTextConfig.stack = this.normalizeButtonTextEntry(this.buttonTextConfig.stack, defaults.stack);
          this.buttonTextConfig.swap = this.normalizeButtonTextEntry(this.buttonTextConfig.swap, defaults.swap);
          this.buttonTextConfig.craft = this.normalizeButtonTextEntry(this.buttonTextConfig.craft, defaults.craft);
          this.buttonTextConfig.sort = this.normalizeButtonTextEntry(this.buttonTextConfig.sort, defaults.sort);
          this.buttonTextConfig.previous = this.normalizeButtonTextEntry(this.buttonTextConfig.previous, defaults.previous);
          this.buttonTextConfig.next = this.normalizeButtonTextEntry(this.buttonTextConfig.next, defaults.next);
          (_this$buttonTextConfi3 = (_this$buttonTextConfi2 = this.buttonTextConfig).unavailableHint) != null ? _this$buttonTextConfi3 : _this$buttonTextConfi2.unavailableHint = defaults.unavailableHint;
        };
        _proto.normalizeWorldScenarioConfig = function normalizeWorldScenarioConfig() {
          var _this$worldScenario, _this$worldScenario2, _this$worldScenario2$, _this$worldScenario3, _this$worldScenario3$, _this$worldScenario4, _this$worldScenario4$, _this$worldScenario5, _this$worldScenario5$;
          var defaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
          (_this$worldScenario = this.worldScenario) != null ? _this$worldScenario : this.worldScenario = new WorldItemScenarioConfig();
          (_this$worldScenario2$ = (_this$worldScenario2 = this.worldScenario).initialItems) != null ? _this$worldScenario2$ : _this$worldScenario2.initialItems = [];
          (_this$worldScenario3$ = (_this$worldScenario3 = this.worldScenario).areaPosition) != null ? _this$worldScenario3$ : _this$worldScenario3.areaPosition = new Vec2(defaults.areaPosition.x, defaults.areaPosition.y);
          (_this$worldScenario4$ = (_this$worldScenario4 = this.worldScenario).title) != null ? _this$worldScenario4$ : _this$worldScenario4.title = defaults.title;
          (_this$worldScenario5$ = (_this$worldScenario5 = this.worldScenario).instructions) != null ? _this$worldScenario5$ : _this$worldScenario5.instructions = defaults.instructions;
        };
        _proto.getWorldScenarioNumber = function getWorldScenarioNumber(value, fallback, minimum) {
          var number = Number(value);
          return Number.isFinite(number) ? Math.max(minimum, number) : fallback;
        };
        _proto.getWorldDiscardLifetime = function getWorldDiscardLifetime() {
          return this.getWorldScenarioNumber(this.worldScenario.discardLifetime, BackpackController.WORLD_SCENARIO_DEFAULTS.discardLifetime, 0.1);
        };
        _proto.getWorldMaximumItemCount = function getWorldMaximumItemCount() {
          return Math.max(1, Math.floor(this.getWorldScenarioNumber(this.worldScenario.maximumWorldItemCount, BackpackController.WORLD_SCENARIO_DEFAULTS.maximumWorldItemCount, 1)));
        };
        _proto.getWorldColumnCount = function getWorldColumnCount() {
          return Math.max(1, Math.floor(this.getWorldScenarioNumber(this.worldScenario.columnCount, BackpackController.WORLD_SCENARIO_DEFAULTS.columnCount, 1)));
        };
        _proto.getWorldItemScale = function getWorldItemScale() {
          return Math.min(1.5, this.getWorldScenarioNumber(this.worldScenario.itemScale, BackpackController.WORLD_SCENARIO_DEFAULTS.itemScale, 0.2));
        };
        _proto.formatWorldSeconds = function formatWorldSeconds(seconds) {
          return Number.isInteger(seconds) ? String(seconds) : seconds.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
        };
        _proto.getWorldInstructions = function getWorldInstructions() {
          return this.worldScenario.instructions.replace(/\{lifetime\}/g, this.formatWorldSeconds(this.getWorldDiscardLifetime()));
        };
        _proto.normalizeButtonTextEntry = function normalizeButtonTextEntry(entry, defaults) {
          var _normalized$label, _normalized$title, _normalized$descripti;
          var normalized = entry != null ? entry : new BackpackButtonTextInspectorEntry();
          (_normalized$label = normalized.label) != null ? _normalized$label : normalized.label = defaults.label;
          (_normalized$title = normalized.title) != null ? _normalized$title : normalized.title = defaults.title;
          (_normalized$descripti = normalized.description) != null ? _normalized$descripti : normalized.description = defaults.description;
          return normalized;
        };
        _proto.rebuildItemCatalog = function rebuildItemCatalog() {
          try {
            this.itemCatalog = new ItemConfigCatalog({
              weapons: this.weaponItems,
              armors: this.armorItems,
              consumables: this.consumableItems,
              materials: this.materialItems,
              quests: this.questItems,
              others: this.otherItems
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
          this.itemCatalog.getAll().forEach(function (config) {
            if (!config.itemName.trim()) {
              console.warn("\u7269\u54C1 " + config.id + " \u5C1A\u672A\u914D\u7F6E\u540D\u79F0\u3002");
            }
            if (!config.icon) {
              console.warn("\u7269\u54C1 " + config.id + "\uFF08" + config.itemName + "\uFF09\u5C1A\u672A\u914D\u7F6E\u56FE\u6807\u3002");
            }
            if (!Number.isFinite(config.maxStack) || config.maxStack < 1) {
              console.warn("\u7269\u54C1 " + config.id + "\uFF08" + config.itemName + "\uFF09\u7684\u6700\u5927\u5806\u53E0\u6570\u65E0\u6548\uFF0C\u5C06\u6309 1 \u5904\u7406\u3002");
            }
          });
        };
        _proto.getItemConfig = function getItemConfig(itemId) {
          var _this$itemCatalog$get;
          return (_this$itemCatalog$get = this.itemCatalog.get(itemId)) != null ? _this$itemCatalog$get : null;
        };
        _proto.getItemRarityIndex = function getItemRarityIndex(itemId) {
          var _this$getItemConfig$r, _this$getItemConfig;
          var rarity = Math.floor(Number((_this$getItemConfig$r = (_this$getItemConfig = this.getItemConfig(itemId)) == null ? void 0 : _this$getItemConfig.rarity) != null ? _this$getItemConfig$r : 0));
          return Math.max(0, Math.min(RARITY_NAMES.length - 1, rarity));
        };
        _proto.getItemMaxStack = function getItemMaxStack(itemId) {
          var _this$getItemConfig$m, _this$getItemConfig2;
          var configured = Math.floor(Number((_this$getItemConfig$m = (_this$getItemConfig2 = this.getItemConfig(itemId)) == null ? void 0 : _this$getItemConfig2.maxStack) != null ? _this$getItemConfig$m : 1));
          return Math.max(1, Number.isFinite(configured) ? configured : 1);
        };
        _proto.applyItemTooltipTemplate = function applyItemTooltipTemplate(template, values) {
          return (template != null ? template : '').replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, function (_match, key) {
            var _values$key;
            return String((_values$key = values[key]) != null ? _values$key : '');
          });
        };
        _proto.getItemSpecificDetailLines = function getItemSpecificDetailLines(config) {
          var _this3 = this;
          var text = this.itemTooltipTextConfig;
          var lines = [];
          if (config instanceof WeaponItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.weaponDetailTemplate, {
              attack: config.attackPower,
              speed: config.attackSpeed,
              range: config.attackRange
            }));
          } else if (config instanceof ArmorItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.armorDetailTemplate, {
              defense: config.defense,
              magicResistance: config.magicResistance
            }));
          } else if (config instanceof ConsumableItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.consumableDetailTemplate, {
              cooldown: config.cooldown,
              useDuration: config.useDuration,
              charges: config.charges
            }));
          } else if (config instanceof MaterialItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.materialDetailTemplate, {
              level: config.materialLevel,
              quality: config.materialQuality || text.unsetText
            }));
          } else if (config instanceof QuestItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.questDetailTemplate, {
              quest: config.questId || text.unboundQuestText,
              stage: config.questStage
            }));
          } else if (config instanceof OtherItemConfig) {
            lines.push(this.applyItemTooltipTemplate(text.otherDetailTemplate, {
              customCategory: config.customCategory || text.otherCategoryText,
              action: config.interactionAction || text.noDedicatedActionText
            }));
          }
          var extraAttributes = config.extraAttributes.filter(function (attribute) {
            return attribute.displayName || attribute.key;
          }).map(function (attribute) {
            var name = attribute.displayName || attribute.key;
            if (attribute.textValue) {
              return _this3.applyItemTooltipTemplate(text.extraAttributeEntryTemplate, {
                name: name,
                value: attribute.textValue
              });
            }
            var value = attribute.isPercentage ? _this3.applyItemTooltipTemplate(text.percentageValueTemplate, {
              value: Math.round(attribute.value * 10000) / 100
            }) : String(attribute.value);
            return _this3.applyItemTooltipTemplate(text.extraAttributeEntryTemplate, {
              name: name,
              value: value
            });
          });
          if (extraAttributes.length > 0) {
            lines.push(this.applyItemTooltipTemplate(text.extraAttributesTemplate, {
              attributes: extraAttributes.join(text.listSeparator)
            }));
          }
          var effects = config.effects.filter(function (effect) {
            return effect.effectType;
          }).map(function (effect) {
            return _this3.applyItemTooltipTemplate(text.effectEntryTemplate, {
              type: effect.effectType,
              value: effect.value
            });
          });
          if (effects.length > 0) {
            lines.push(this.applyItemTooltipTemplate(text.effectsTemplate, {
              effects: effects.join(text.listSeparator)
            }));
          }
          return lines.filter(function (line) {
            return line.trim().length > 0;
          });
        };
        _proto.update = function update(deltaTime) {
          var _this$dragIconNode;
          if (this.worldScenario.enabled) {
            this.updateWorldItems(Math.max(0, deltaTime));
          }
          if (!this.dragging || this.dragDropAnimating || !((_this$dragIconNode = this.dragIconNode) != null && _this$dragIconNode.active)) {
            return;
          }
          var dt = Math.min(Math.max(deltaTime, 0), 1 / 30);
          var current = this.dragIconNode.position;
          var stiffness = Math.max(1, this.dragFeel.followStiffness);
          var damping = Math.exp(-Math.max(0.1, this.dragFeel.followDamping) * dt);
          this.dragVelocity.x += (this.dragTargetPosition.x - current.x) * stiffness * dt;
          this.dragVelocity.y += (this.dragTargetPosition.y - current.y) * stiffness * dt;
          this.dragVelocity.x *= damping;
          this.dragVelocity.y *= damping;
          this.dragIconNode.setPosition(current.x + this.dragVelocity.x * dt, current.y + this.dragVelocity.y * dt, 0);
          var maximumTilt = Math.max(0, this.dragFeel.maximumTilt);
          var targetTilt = Math.max(-maximumTilt, Math.min(maximumTilt, -this.dragVelocity.x * this.dragFeel.tiltSensitivity));
          var currentTilt = this.dragIconNode.eulerAngles.z;
          var tiltBlend = 1 - Math.exp(-13 * dt);
          this.dragIconNode.setRotationFromEuler(0, 0, currentTilt + (targetTilt - currentTilt) * tiltBlend);
        };
        _proto.onDestroy = function onDestroy() {
          var _this4 = this,
            _this$dragIconNode2,
            _this$worldItemLayer;
          this.saveInventory();
          this.slots.forEach(function (slot) {
            return _this4.unbindSlotTouchEvents(slot);
          });
          this.teardownButtonHelp();
          this.unbindButtons();
          if ((_this$dragIconNode2 = this.dragIconNode) != null && _this$dragIconNode2.isValid) {
            this.dragIconNode.destroy();
          }
          if ((_this$worldItemLayer = this.worldItemLayer) != null && _this$worldItemLayer.isValid) {
            this.worldItemLayer.destroy();
          }
          this.worldItems.length = 0;
        };
        _proto.ensureWorldItemTestArea = function ensureWorldItemTestArea() {
          var _this$worldItemLayer2, _this$worldItemArea;
          if (!this.worldScenario.enabled) {
            return;
          }
          if ((_this$worldItemLayer2 = this.worldItemLayer) != null && _this$worldItemLayer2.isValid && (_this$worldItemArea = this.worldItemArea) != null && _this$worldItemArea.isValid) {
            return;
          }
          var canvas = this.node.parent;
          var canvasTransform = canvas == null ? void 0 : canvas.getComponent(UITransform);
          if (!canvas || !canvasTransform || !this.slots[0]) {
            console.warn('场景物品测试区创建失败：缺少 Canvas 或物品格模板。');
            return;
          }
          var layer = new Node('WorldItemLayer');
          layer.layer = this.node.layer;
          canvas.addChild(layer);
          layer.setSiblingIndex(this.node.getSiblingIndex());
          layer.addComponent(UITransform).setContentSize(canvasTransform.contentSize.width, canvasTransform.contentSize.height);
          var scenarioDefaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
          var areaWidth = this.getWorldScenarioNumber(this.worldScenario.areaWidth, scenarioDefaults.areaWidth, 100);
          var areaHeight = this.getWorldScenarioNumber(this.worldScenario.areaHeight, scenarioDefaults.areaHeight, 180);
          var areaPosition = this.worldScenario.areaPosition;
          var halfWidth = areaWidth / 2;
          var halfHeight = areaHeight / 2;
          var labelWidth = Math.max(80, areaWidth - 12);
          var area = new Node('WorldItemTestArea');
          area.layer = this.node.layer;
          layer.addChild(area);
          area.setPosition(areaPosition.x, areaPosition.y, 0);
          area.addComponent(UITransform).setContentSize(areaWidth, areaHeight);
          area.addComponent(BlockInputEvents);
          var background = area.addComponent(Graphics);
          background.fillColor = new Color(20, 28, 35, 218);
          background.strokeColor = new Color(120, 205, 180, 255);
          background.lineWidth = 3;
          background.roundRect(-halfWidth + 2, -halfHeight + 7, areaWidth - 4, areaHeight - 14, 14);
          background.fill();
          background.stroke();
          var title = this.createWorldLabel(area, 'WorldItemTitle', this.worldScenario.title, 0, halfHeight - 43, labelWidth, 34, 24, new Color(207, 255, 232, 255));
          title.isBold = true;
          this.createWorldLabel(area, 'WorldItemInstructions', this.getWorldInstructions(), 0, halfHeight - 95, labelWidth, 70, 16, new Color(225, 236, 239, 255));
          this.worldStatusLabel = this.createWorldLabel(area, 'WorldItemStatus', '正在准备场景物品…', 0, halfHeight - 155, labelWidth, 42, 16, new Color(255, 225, 153, 255));
          this.worldItemLayer = layer;
          this.worldItemArea = area;
        };
        _proto.createWorldLabel = function createWorldLabel(parent, name, text, x, y, width, height, fontSize, color) {
          var node = new Node(name);
          node.layer = this.node.layer;
          parent.addChild(node);
          node.setPosition(x, y, 0);
          node.addComponent(UITransform).setContentSize(width, height);
          var label = node.addComponent(Label);
          label.string = text;
          label.fontSize = fontSize;
          label.lineHeight = fontSize + 4;
          label.enableWrapText = true;
          label.overflow = Label.Overflow.CLAMP;
          label.horizontalAlign = Label.HorizontalAlign.CENTER;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          label.color = color;
          return label;
        };
        _proto.spawnInitialWorldItems = function spawnInitialWorldItems() {
          var _this5 = this;
          if (!this.worldScenario.enabled || !this.worldItemArea || this.worldItems.length > 0) {
            return;
          }
          if (!this.worldScenario.spawnInitialItems) {
            this.setWorldStatus('初始物品生成已关闭；仍可从背包丢弃物品到这里。', new Color(164, 244, 195, 255));
            return;
          }
          var spawnedCount = 0;
          this.worldScenario.initialItems.forEach(function (initialItem) {
            var itemId = Math.floor(Number(initialItem == null ? void 0 : initialItem.itemId));
            var count = Math.floor(Number(initialItem == null ? void 0 : initialItem.count));
            if (Number.isFinite(itemId) && itemId >= 0 && Number.isFinite(count) && count > 0 && _this5.spawnWorldItem(itemId, count, null, false)) {
              spawnedCount += 1;
            }
          });
          this.setWorldStatus(spawnedCount > 0 ? '绿色文字为常驻测试物品，点击即可拾取。' : '初始物品列表为空或配置无效，请在测试配置中调整。', spawnedCount > 0 ? new Color(164, 244, 195, 255) : new Color(255, 142, 132, 255));
        };
        _proto.spawnWorldItem = function spawnWorldItem(itemId, requestedCount, lifetimeSeconds, announce) {
          var _this$slots$,
            _this$rarityFrames$th,
            _node$getComponent,
            _node$getComponent2,
            _this6 = this;
          if (announce === void 0) {
            announce = true;
          }
          if (!this.worldScenario.enabled) {
            return false;
          }
          var area = this.worldItemArea;
          var template = (_this$slots$ = this.slots[0]) == null ? void 0 : _this$slots$.node;
          var config = this.getItemConfig(itemId);
          var normalizedCount = Math.floor(Number(requestedCount));
          var count = Number.isFinite(normalizedCount) ? normalizedCount : 0;
          if (!area || !template || !(config != null && config.icon) || count <= 0) {
            this.setWorldStatus('掉落失败：请检查测试区、物品 ID、图标和数量配置。', new Color(255, 142, 132, 255));
            return false;
          }
          if (this.worldItems.length >= this.getWorldMaximumItemCount()) {
            this.setWorldStatus('掉落区已满，请先拾取物品或等待掉落物消失。', new Color(255, 177, 105, 255));
            return false;
          }
          var node = instantiate(template);
          node.name = "WorldItem_" + this.nextWorldItemId;
          node.layer = this.node.layer;
          area.addChild(node);
          var itemScale = this.getWorldItemScale();
          var spawnScale = itemScale * 0.68;
          node.setScale(spawnScale, spawnScale, 1);
          var slot = node.getComponent(ItemSlot);
          if (!slot) {
            node.destroy();
            this.setWorldStatus('掉落失败：物品格模板缺少 ItemSlot 组件。', new Color(255, 142, 132, 255));
            return false;
          }
          var rarity = (_this$rarityFrames$th = this.rarityFrames[this.getItemRarityIndex(itemId)]) != null ? _this$rarityFrames$th : null;
          slot.showItem(config.icon, count, rarity);
          var button = (_node$getComponent = node.getComponent(Button)) != null ? _node$getComponent : node.addComponent(Button);
          button.target = node;
          button.interactable = true;
          button.transition = Button.Transition.SCALE;
          button.zoomScale = 1.08;
          var captionLabel = this.createWorldLabel(node, 'WorldItemCaption', '', 0, -66, 112, 38, 14, new Color(164, 244, 195, 255));
          var opacity = (_node$getComponent2 = node.getComponent(UIOpacity)) != null ? _node$getComponent2 : node.addComponent(UIOpacity);
          opacity.opacity = 255;
          var id = this.nextWorldItemId++;
          var normalizedLifetime = lifetimeSeconds === null ? null : this.getWorldScenarioNumber(lifetimeSeconds, this.getWorldDiscardLifetime(), 0.1);
          var entry = {
            id: id,
            node: node,
            slot: slot,
            itemId: itemId,
            count: count,
            remainingLifetime: normalizedLifetime,
            totalLifetime: normalizedLifetime,
            captionLabel: captionLabel,
            opacity: opacity,
            pickupLocked: false
          };
          node.on(Button.EventType.CLICK, function () {
            return _this6.pickupWorldItem(id);
          }, this);
          this.worldItems.push(entry);
          this.updateWorldItemVisual(entry);
          this.layoutWorldItems();
          Tween.stopAllByTarget(node);
          tween(node).to(0.18, {
            scale: new Vec3(itemScale, itemScale, 1)
          }, {
            easing: 'backOut'
          }).start();
          if (announce) {
            var _entry$remainingLifet;
            var lifetime = (_entry$remainingLifet = entry.remainingLifetime) != null ? _entry$remainingLifet : 0;
            this.setWorldStatus(config.itemName + " \xD7" + count + " \u5DF2\u6389\u843D\uFF0C" + lifetime.toFixed(1) + " \u79D2\u540E\u6C38\u4E45\u6D88\u5931\u3002", new Color(255, 202, 118, 255));
            console.log("\u573A\u666F\u6389\u843D\uFF1A" + config.itemName + " \xD7" + count + "\uFF0C" + lifetime.toFixed(1) + " \u79D2\u540E\u6C38\u4E45\u6D88\u5931");
          }
          return true;
        };
        _proto.updateWorldItems = function updateWorldItems(deltaTime) {
          var _this7 = this;
          if (deltaTime <= 0 || this.worldItems.length === 0) {
            return;
          }
          [].concat(this.worldItems).forEach(function (entry) {
            if (entry.remainingLifetime === null || entry.pickupLocked) {
              return;
            }
            entry.remainingLifetime -= deltaTime;
            if (entry.remainingLifetime <= 0) {
              _this7.expireWorldItem(entry);
              return;
            }
            _this7.updateWorldItemVisual(entry);
          });
        };
        _proto.updateWorldItemVisual = function updateWorldItemVisual(entry) {
          var _this$getItemConfig$i, _this$getItemConfig3;
          var itemName = (_this$getItemConfig$i = (_this$getItemConfig3 = this.getItemConfig(entry.itemId)) == null ? void 0 : _this$getItemConfig3.itemName) != null ? _this$getItemConfig$i : "\u672A\u77E5\u7269\u54C1 " + entry.itemId;
          if (entry.remainingLifetime === null) {
            entry.captionLabel.string = itemName + "\n\u70B9\u51FB\u62FE\u53D6";
            entry.captionLabel.color = new Color(164, 244, 195, 255);
            entry.opacity.opacity = 255;
            return;
          }
          var remaining = Math.max(0, entry.remainingLifetime);
          entry.captionLabel.string = itemName + "\n" + remaining.toFixed(1) + " \u79D2";
          entry.captionLabel.color = remaining <= 2 ? new Color(255, 132, 116, 255) : new Color(255, 212, 130, 255);
          entry.opacity.opacity = remaining < 1 ? Math.max(70, Math.round(255 * remaining)) : 255;
        };
        _proto.layoutWorldItems = function layoutWorldItems() {
          var scenarioDefaults = BackpackController.WORLD_SCENARIO_DEFAULTS;
          var columnCount = this.getWorldColumnCount();
          var columnSpacing = this.getWorldScenarioNumber(this.worldScenario.columnSpacing, scenarioDefaults.columnSpacing, 1);
          var rowSpacing = this.getWorldScenarioNumber(this.worldScenario.rowSpacing, scenarioDefaults.rowSpacing, 1);
          var firstRowY = Number.isFinite(Number(this.worldScenario.firstRowY)) ? Number(this.worldScenario.firstRowY) : scenarioDefaults.firstRowY;
          var firstColumnX = -((columnCount - 1) * columnSpacing) / 2;
          this.worldItems.forEach(function (entry, index) {
            var column = index % columnCount;
            var row = Math.floor(index / columnCount);
            entry.node.setPosition(firstColumnX + column * columnSpacing, firstRowY - row * rowSpacing, 0);
          });
        };
        _proto.pickupWorldItem = function pickupWorldItem(id) {
          var _config$itemName;
          var entry = this.worldItems.find(function (candidate) {
            return candidate.id === id;
          });
          if (!entry || entry.pickupLocked || !entry.node.isValid) {
            return;
          }
          entry.pickupLocked = true;
          var added = this.addItemToInventory(entry.itemId, entry.count);
          if (added <= 0) {
            entry.pickupLocked = false;
            this.setWorldStatus('拾取失败：背包已满，请先整理或扩容。', new Color(255, 142, 132, 255));
            return;
          }
          var config = this.getItemConfig(entry.itemId);
          var itemName = (_config$itemName = config == null ? void 0 : config.itemName) != null ? _config$itemName : "\u672A\u77E5\u7269\u54C1 " + entry.itemId;
          entry.count -= added;
          if (entry.count <= 0) {
            this.removeWorldItem(entry);
          } else {
            var _this$rarityFrames$th2;
            var rarity = (_this$rarityFrames$th2 = this.rarityFrames[this.getItemRarityIndex(entry.itemId)]) != null ? _this$rarityFrames$th2 : null;
            if (config != null && config.icon) {
              entry.slot.showItem(config.icon, entry.count, rarity);
            }
            entry.pickupLocked = false;
            this.updateWorldItemVisual(entry);
          }
          this.renderCurrentPage();
          this.saveInventory();
          this.setWorldStatus(entry.count <= 0 ? "\u5DF2\u62FE\u53D6 " + itemName + " \xD7" + added + "\u3002" : "\u80CC\u5305\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u62FE\u53D6 " + itemName + " \xD7" + added + "\uFF0C\u573A\u666F\u4E2D\u5269\u4F59 \xD7" + entry.count + "\u3002", new Color(164, 244, 195, 255));
          console.log("\u62FE\u53D6\u573A\u666F\u7269\u54C1\uFF1A" + itemName + " \xD7" + added);
        };
        _proto.addItemToInventory = function addItemToInventory(itemId, requestedCount) {
          var config = this.getItemConfig(itemId);
          var remaining = Math.max(0, Math.floor(requestedCount));
          if (!(config != null && config.icon) || remaining <= 0) {
            return 0;
          }
          var maxStack = this.getItemMaxStack(itemId);
          for (var _iterator = _createForOfIteratorHelperLoose(this.inventory), _step; !(_step = _iterator()).done;) {
            var entry = _step.value;
            if (!entry || entry.itemId !== itemId || entry.count >= maxStack) {
              continue;
            }
            var _transfer = Math.min(remaining, maxStack - entry.count);
            entry.count += _transfer;
            remaining -= _transfer;
            if (remaining <= 0) {
              break;
            }
          }
          for (var index = 0; index < this.inventory.length && remaining > 0; index++) {
            if (this.inventory[index]) {
              continue;
            }
            var transfer = Math.min(remaining, maxStack);
            this.inventory[index] = {
              itemId: itemId,
              count: transfer
            };
            remaining -= transfer;
          }
          return Math.max(0, Math.floor(requestedCount)) - remaining;
        };
        _proto.expireWorldItem = function expireWorldItem(entry) {
          var _this$getItemConfig$i2, _this$getItemConfig4, _entry$totalLifetime;
          var itemName = (_this$getItemConfig$i2 = (_this$getItemConfig4 = this.getItemConfig(entry.itemId)) == null ? void 0 : _this$getItemConfig4.itemName) != null ? _this$getItemConfig$i2 : "\u672A\u77E5\u7269\u54C1 " + entry.itemId;
          var count = entry.count;
          var lifetime = (_entry$totalLifetime = entry.totalLifetime) != null ? _entry$totalLifetime : this.getWorldDiscardLifetime();
          this.removeWorldItem(entry);
          this.setWorldStatus(itemName + " \xD7" + count + " \u5DF2\u8D85\u8FC7 " + this.formatWorldSeconds(lifetime) + " \u79D2\u5E76\u6C38\u4E45\u6D88\u5931\u3002", new Color(255, 132, 116, 255));
          console.log("\u573A\u666F\u6389\u843D\u6C38\u4E45\u6D88\u5931\uFF1A" + itemName + " \xD7" + count);
        };
        _proto.removeWorldItem = function removeWorldItem(entry) {
          var index = this.worldItems.indexOf(entry);
          if (index >= 0) {
            this.worldItems.splice(index, 1);
          }
          Tween.stopAllByTarget(entry.node);
          if (entry.node.isValid) {
            entry.node.destroy();
          }
          this.layoutWorldItems();
        };
        _proto.setWorldStatus = function setWorldStatus(message, color) {
          if (!this.worldStatusLabel) {
            return;
          }
          this.worldStatusLabel.string = message;
          this.worldStatusLabel.color = color;
        };
        _proto.bindSlotTouchEvents = function bindSlotTouchEvents(slot) {
          slot.node.on(Node.EventType.TOUCH_START, this.onSlotTouchStart, this);
          slot.node.on(Node.EventType.TOUCH_MOVE, this.onSlotTouchMove, this);
          slot.node.on(Node.EventType.TOUCH_END, this.onSlotTouchEnd, this);
          slot.node.on(Node.EventType.TOUCH_CANCEL, this.onSlotTouchCancel, this);
          slot.node.on(Node.EventType.MOUSE_ENTER, this.onSlotMouseEnter, this);
          slot.node.on(Node.EventType.MOUSE_MOVE, this.onSlotMouseMove, this);
          slot.node.on(Node.EventType.MOUSE_LEAVE, this.onSlotMouseLeave, this);
          slot.node.on(Node.EventType.MOUSE_UP, this.onSlotMouseUp, this);
        };
        _proto.unbindSlotTouchEvents = function unbindSlotTouchEvents(slot) {
          slot.node.off(Node.EventType.TOUCH_START, this.onSlotTouchStart, this);
          slot.node.off(Node.EventType.TOUCH_MOVE, this.onSlotTouchMove, this);
          slot.node.off(Node.EventType.TOUCH_END, this.onSlotTouchEnd, this);
          slot.node.off(Node.EventType.TOUCH_CANCEL, this.onSlotTouchCancel, this);
          slot.node.off(Node.EventType.MOUSE_ENTER, this.onSlotMouseEnter, this);
          slot.node.off(Node.EventType.MOUSE_MOVE, this.onSlotMouseMove, this);
          slot.node.off(Node.EventType.MOUSE_LEAVE, this.onSlotMouseLeave, this);
          slot.node.off(Node.EventType.MOUSE_UP, this.onSlotMouseUp, this);
        };
        _proto.onSlotTouchStart = function onSlotTouchStart(event) {
          if (this.dragDropAnimating) {
            return;
          }
          this.hideContextMenu();
          this.hideRarityMenu();
          var localIndex = this.findEventSlotIndex(event);
          if (localIndex < 0) {
            return;
          }
          this.activeTouchLocalIndex = localIndex;
          this.dragCandidate = false;
          if (this.swapMode) {
            return;
          }
          var entry = this.getEntryAtLocalIndex(localIndex);
          if (!entry) {
            return;
          }
          var location = event.getUILocation();
          this.dragStartLocation.set(location);
          this.lastDragLocation.set(location);
          this.dragCandidate = true;
          this.dragSourceLocalIndex = localIndex;
          this.dragSourceInventoryIndex = this.getInventoryIndex(localIndex);
          this.dragSourcePage = this.currentPage;
        };
        _proto.onSlotTouchMove = function onSlotTouchMove(event) {
          if (this.dragDropAnimating || !this.dragCandidate && !this.dragging) {
            return;
          }
          var location = event.getUILocation();
          this.lastDragLocation.set(location);
          if (!this.dragging) {
            var distance = Vec2.distance(location, this.dragStartLocation);
            if (distance < this.dragFeel.triggerDistance) {
              return;
            }
            this.beginDrag(location);
          }
          this.updateDragPosition(location);
          this.updateDragPageSwitch(location);
          this.updateDragHover(location);
        };
        _proto.onSlotTouchEnd = function onSlotTouchEnd(event) {
          var location = event.getUILocation();
          this.lastDragLocation.set(location);
          if (this.dragging) {
            this.finishDrag(location);
            return;
          }
          var localIndex = this.activeTouchLocalIndex;
          this.resetTouchState();
          if (localIndex < 0) {
            return;
          }
          if (this.swapMode) {
            this.finishSwap(localIndex);
            return;
          }
          this.toggleSlotSelection(localIndex);
        };
        _proto.onSlotTouchCancel = function onSlotTouchCancel(event) {
          if (this.dragging) {
            this.finishDrag(this.lastDragLocation);
            return;
          }
          this.resetTouchState();
        };
        _proto.findEventSlotIndex = function findEventSlotIndex(event) {
          var targetNode = event.currentTarget;
          return this.slots.findIndex(function (slot) {
            return slot.node === targetNode;
          });
        };
        _proto.onSlotMouseEnter = function onSlotMouseEnter(event) {
          var _this$itemCatalog$get2, _text$rarityNames$thi;
          if (this.dragging) {
            return;
          }
          var targetNode = event.currentTarget;
          var localIndex = this.slots.findIndex(function (slot) {
            return slot.node === targetNode;
          });
          var entry = localIndex >= 0 ? this.getEntryAtLocalIndex(localIndex) : null;
          if (!entry || !this.itemTooltipNode || !this.itemTooltipLabel) {
            this.hideItemTooltip();
            return;
          }
          var config = this.getItemConfig(entry.itemId);
          if (!config) {
            this.hideItemTooltip();
            return;
          }
          var text = this.itemTooltipTextConfig;
          var category = (_this$itemCatalog$get2 = this.itemCatalog.getCategory(entry.itemId)) != null ? _this$itemCatalog$get2 : text.otherCategoryText;
          var rarityName = (_text$rarityNames$thi = text.rarityNames[this.getItemRarityIndex(entry.itemId)]) != null ? _text$rarityNames$thi : text.unknownRarityText;
          var specificDetails = this.getItemSpecificDetailLines(config).join('\n');
          this.hideButtonTooltip();
          this.itemTooltipLabel.string = this.applyItemTooltipTemplate(text.tooltipTemplate, {
            name: config.itemName,
            rarity: rarityName,
            type: config.itemType || text.uncategorizedText,
            category: category,
            count: entry.count,
            maxStack: this.getItemMaxStack(entry.itemId),
            weight: config.weight,
            specificDetails: specificDetails,
            description: config.description,
            usage: config.usage || text.noUsageText,
            useAction: config.canUse ? text.useActionText : text.cannotUseActionText,
            discardAction: config.canDiscard ? text.discardActionText : text.cannotDiscardActionText
          }).split(/\r?\n/).filter(function (line) {
            return line.trim().length > 0;
          }).join('\n');
          this.itemTooltipNode.active = true;
          this.itemTooltipNode.setSiblingIndex(this.node.children.length - 1);
          this.updateItemTooltipPosition(event.getUILocation());
        };
        _proto.onSlotMouseMove = function onSlotMouseMove(event) {
          var _this$itemTooltipNode;
          if ((_this$itemTooltipNode = this.itemTooltipNode) != null && _this$itemTooltipNode.active) {
            this.updateItemTooltipPosition(event.getUILocation());
          }
        };
        _proto.onSlotMouseLeave = function onSlotMouseLeave() {
          this.hideItemTooltip();
        };
        _proto.onSlotMouseUp = function onSlotMouseUp(event) {
          if (event.getButton() !== EventMouse.BUTTON_RIGHT || this.dragging) {
            return;
          }
          var targetNode = event.currentTarget;
          var localIndex = this.slots.findIndex(function (slot) {
            return slot.node === targetNode;
          });
          if (localIndex < 0 || !this.getEntryAtLocalIndex(localIndex)) {
            this.hideContextMenu();
            return;
          }
          this.playUiSound(this.itemClickSound);
          this.setSelectedIndex(localIndex);
          this.showContextMenu(event.getUILocation());
          event.propagationStopped = true;
        };
        _proto.toggleSlotSelection = function toggleSlotSelection(localIndex) {
          if (!this.getEntryAtLocalIndex(localIndex)) {
            return;
          }
          var nextIndex = this.selectedLocalIndex === localIndex ? -1 : localIndex;
          this.playUiSound(this.itemClickSound);
          this.setSelectedIndex(nextIndex);
        };
        _proto.setSelectedIndex = function setSelectedIndex(index) {
          if (this.selectedLocalIndex >= 0) {
            this.setSlotSelected(this.selectedLocalIndex, false);
          }
          this.selectedLocalIndex = index;
          if (this.selectedLocalIndex >= 0) {
            this.setSlotSelected(this.selectedLocalIndex, true);
            console.log("\u9009\u62E9\u80CC\u5305\u683C\u5B50\uFF1A" + this.getInventoryIndex(this.selectedLocalIndex));
          }
          this.updateActionButtons();
        };
        _proto.setSlotSelected = function setSlotSelected(index, selected) {
          var _this$slots$index;
          var sprite = (_this$slots$index = this.slots[index]) == null ? void 0 : _this$slots$index.getComponent(Sprite);
          if (sprite) {
            sprite.color = selected ? new Color(196, 164, 104, 245) : new Color(92, 88, 108, 224);
          }
        };
        _proto.beginDrag = function beginDrag(location) {
          var _this$slots$this$drag;
          var entry = this.inventory[this.dragSourceInventoryIndex];
          var config = entry ? this.getItemConfig(entry.itemId) : null;
          if (!entry || !(config != null && config.icon)) {
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
              var _this$rarityFrames$th3;
              this.dragRaritySprite.spriteFrame = (_this$rarityFrames$th3 = this.rarityFrames[this.getItemRarityIndex(entry.itemId)]) != null ? _this$rarityFrames$th3 : null;
              this.dragRaritySprite.node.active = this.dragRaritySprite.spriteFrame !== null;
            }
            if (this.dragCountLabel) {
              this.dragCountLabel.string = entry.count > 1 ? String(entry.count) : '';
            }
            this.dragIconNode.active = true;
            this.dragIconNode.setSiblingIndex(this.node.children.length - 1);
            Tween.stopAllByTarget(this.dragIconNode);
            this.dragIconNode.setRotationFromEuler(0, 0, 0);
            this.dragIconNode.setScale(this.dragFeel.pickupStartScale, this.dragFeel.pickupStartScale, 1);
            if (this.dragIconOpacity) {
              Tween.stopAllByTarget(this.dragIconOpacity);
              this.dragIconOpacity.opacity = 0;
              tween(this.dragIconOpacity).to(this.dragFeel.pickupDuration, {
                opacity: this.dragFeel.draggingOpacity
              }, {
                easing: 'quadOut'
              }).start();
            }
            tween(this.dragIconNode).to(this.dragFeel.pickupDuration, {
              scale: new Vec3(this.dragFeel.pickupPeakScale, this.dragFeel.pickupPeakScale, 1)
            }, {
              easing: 'quadOut'
            }).to(this.dragFeel.pickupSettleDuration, {
              scale: new Vec3(this.dragFeel.draggingScale, this.dragFeel.draggingScale, 1)
            }, {
              easing: 'backOut'
            }).start();
          }
          (_this$slots$this$drag = this.slots[this.dragSourceLocalIndex]) == null || _this$slots$this$drag.setContentVisible(false);
          this.updateDragPosition(location, true);
        };
        _proto.ensureDragIcon = function ensureDragIcon() {
          var _this$dragIconNode3;
          if ((_this$dragIconNode3 = this.dragIconNode) != null && _this$dragIconNode3.isValid && this.dragIconSprite && this.dragRaritySprite && this.dragCountLabel) {
            return;
          }
          var dragNode = new Node('DragItemIcon');
          dragNode.layer = this.node.layer;
          this.node.addChild(dragNode);
          var transform = dragNode.addComponent(UITransform);
          transform.setContentSize(96, 96);
          var shadow = dragNode.addComponent(Graphics);
          shadow.fillColor = new Color(0, 0, 0, 105);
          shadow.roundRect(-40, -43, 86, 86, 12);
          shadow.fill();
          shadow.strokeColor = new Color(255, 238, 195, 70);
          shadow.lineWidth = 2;
          shadow.roundRect(-43, -40, 86, 86, 12);
          shadow.stroke();
          var iconNode = new Node('Icon');
          iconNode.layer = this.node.layer;
          dragNode.addChild(iconNode);
          iconNode.addComponent(UITransform).setContentSize(64, 64);
          var sprite = iconNode.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var rarityNode = new Node('RarityFrame');
          rarityNode.layer = this.node.layer;
          dragNode.addChild(rarityNode);
          rarityNode.addComponent(UITransform).setContentSize(96, 96);
          var raritySprite = rarityNode.addComponent(Sprite);
          raritySprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var countNode = new Node('Count');
          countNode.layer = this.node.layer;
          dragNode.addChild(countNode);
          countNode.setPosition(29, -29, 0);
          countNode.addComponent(UITransform).setContentSize(34, 26);
          var countLabel = countNode.addComponent(Label);
          countLabel.fontSize = 20;
          countLabel.lineHeight = 23;
          countLabel.isBold = true;
          countLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          countLabel.verticalAlign = Label.VerticalAlign.CENTER;
          countLabel.color = new Color(255, 250, 230, 255);
          var countOutline = countNode.addComponent(LabelOutline);
          countOutline.color = new Color(40, 24, 16, 255);
          countOutline.width = 3;
          var opacity = dragNode.addComponent(UIOpacity);
          this.dragIconNode = dragNode;
          this.dragIconSprite = sprite;
          this.dragRaritySprite = raritySprite;
          this.dragCountLabel = countLabel;
          this.dragIconOpacity = opacity;
        };
        _proto.updateDragPosition = function updateDragPosition(location, immediate) {
          if (immediate === void 0) {
            immediate = false;
          }
          if (!this.dragIconNode) {
            return;
          }
          var rootTransform = this.node.getComponent(UITransform);
          if (!rootTransform) {
            return;
          }
          var localPosition = rootTransform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          this.dragTargetPosition.set(localPosition.x + this.dragFeel.pointerOffsetX, localPosition.y + this.dragFeel.pointerOffsetY, 0);
          if (immediate) {
            this.dragVelocity.set(0, 0, 0);
            this.dragIconNode.setPosition(this.dragTargetPosition);
          }
        };
        _proto.updateDragPageSwitch = function updateDragPageSwitch(location) {
          var _this$previousButton, _this$nextButton, _previousTransform$hi, _nextTransform$hitTes;
          var pageCount = this.getPageCount();
          if (!this.previousButton && !this.nextButton || pageCount <= 1) {
            return;
          }
          var previousTransform = (_this$previousButton = this.previousButton) == null ? void 0 : _this$previousButton.node.getComponent(UITransform);
          var nextTransform = (_this$nextButton = this.nextButton) == null ? void 0 : _this$nextButton.node.getComponent(UITransform);
          var overPreviousButton = (_previousTransform$hi = previousTransform == null ? void 0 : previousTransform.hitTest(location)) != null ? _previousTransform$hi : false;
          var overNextButton = (_nextTransform$hitTes = nextTransform == null ? void 0 : nextTransform.hitTest(location)) != null ? _nextTransform$hitTes : false;
          if (overPreviousButton && this.previousPageSwitchArmed) {
            this.previousPageSwitchArmed = false;
            this.clearDragHover();
            this.currentPage = (this.currentPage - 1 + pageCount) % pageCount;
            this.playUiSound(this.pageTurnSound);
            this.renderCurrentPage();
            console.log("\u62D6\u62FD\u5207\u6362\u5230\u80CC\u5305\u7B2C " + (this.currentPage + 1) + " \u9875");
          } else if (overNextButton && this.nextPageSwitchArmed) {
            this.nextPageSwitchArmed = false;
            this.clearDragHover();
            this.currentPage = (this.currentPage + 1) % pageCount;
            this.playUiSound(this.pageTurnSound);
            this.renderCurrentPage();
            console.log("\u62D6\u62FD\u5207\u6362\u5230\u80CC\u5305\u7B2C " + (this.currentPage + 1) + " \u9875");
          }
          if (!overPreviousButton) {
            this.previousPageSwitchArmed = true;
          }
          if (!overNextButton) {
            this.nextPageSwitchArmed = true;
          }
        };
        _proto.updateDragHover = function updateDragHover(location) {
          var localIndex = this.findSlotAtLocation(location);
          var validTarget = localIndex >= 0 && this.resolveTargetInventoryIndex(localIndex) >= 0;
          var nextHoverIndex = validTarget ? localIndex : -1;
          if (nextHoverIndex === this.dragHoverLocalIndex) {
            return;
          }
          this.clearDragHover();
          if (nextHoverIndex >= 0) {
            var _this$slots$nextHover;
            var targetNode = (_this$slots$nextHover = this.slots[nextHoverIndex]) == null ? void 0 : _this$slots$nextHover.node;
            var sprite = targetNode == null ? void 0 : targetNode.getComponent(Sprite);
            if (sprite) {
              sprite.color = new Color(132, 151, 184, 245);
            }
            if (targetNode) {
              Tween.stopAllByTarget(targetNode);
              tween(targetNode).to(this.dragFeel.targetHoverDuration, {
                scale: new Vec3(this.dragFeel.targetHoverScale, this.dragFeel.targetHoverScale, 1)
              }, {
                easing: 'quadOut'
              }).start();
            }
            this.dragHoverLocalIndex = nextHoverIndex;
          }
        };
        _proto.clearDragHover = function clearDragHover() {
          if (this.dragHoverLocalIndex >= 0) {
            var _this$slots$this$drag2;
            var targetNode = (_this$slots$this$drag2 = this.slots[this.dragHoverLocalIndex]) == null ? void 0 : _this$slots$this$drag2.node;
            this.setSlotSelected(this.dragHoverLocalIndex, false);
            if (targetNode) {
              Tween.stopAllByTarget(targetNode);
              tween(targetNode).to(this.dragFeel.targetHoverDuration, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'quadOut'
              }).start();
            }
          }
          this.dragHoverLocalIndex = -1;
        };
        _proto.finishDrag = function finishDrag(location, forceReturn) {
          var _this8 = this;
          if (forceReturn === void 0) {
            forceReturn = false;
          }
          if (this.dragDropAnimating) {
            return;
          }
          var targetLocalIndex = forceReturn ? -1 : this.findSlotAtLocation(location);
          var sourceInventoryIndex = this.dragSourceInventoryIndex;
          var sourcePage = this.dragSourcePage;
          var targetInventoryIndex = -1;
          var destinationLocalIndex = targetLocalIndex;
          var returningToSource = forceReturn || targetLocalIndex < 0;
          if (!returningToSource && sourceInventoryIndex >= 0) {
            targetInventoryIndex = this.resolveTargetInventoryIndex(targetLocalIndex);
            returningToSource = targetInventoryIndex < 0;
          }
          this.clearDragHover();
          if (returningToSource && sourcePage >= 0) {
            this.currentPage = sourcePage;
            destinationLocalIndex = this.dragSourceLocalIndex;
            this.renderCurrentPage();
          }
          var completeDrop = function completeDrop() {
            if (!returningToSource && sourceInventoryIndex >= 0 && targetInventoryIndex >= 0 && sourceInventoryIndex !== targetInventoryIndex) {
              var sourceEntry = _this8.inventory[sourceInventoryIndex];
              _this8.inventory[sourceInventoryIndex] = _this8.inventory[targetInventoryIndex];
              _this8.inventory[targetInventoryIndex] = sourceEntry;
              _this8.playUiSound(_this8.itemSwapSound);
              console.log("\u62D6\u62FD\u4EA4\u6362\uFF1A" + sourceInventoryIndex + " <-> " + targetInventoryIndex);
            } else if (returningToSource) {
              console.log('拖拽取消，物品返回原格子');
            }
            _this8.endDragVisual();
            _this8.resetTouchState();
            _this8.renderCurrentPage();
            _this8.saveInventory();
          };
          this.animateDragToSlot(destinationLocalIndex, completeDrop);
        };
        _proto.animateDragToSlot = function animateDragToSlot(localIndex, onComplete) {
          var destination = this.getSlotPositionInRoot(localIndex);
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
            tween(this.dragIconOpacity).delay(this.dragFeel.dropFadeDelay).to(this.dragFeel.dropFadeDuration, {
              opacity: 0
            }, {
              easing: 'quadIn'
            }).start();
          }
          tween(this.dragIconNode).to(this.dragFeel.dropDuration, {
            position: destination,
            scale: new Vec3(this.dragFeel.dropScale, this.dragFeel.dropScale, 1)
          }, {
            easing: 'cubicOut'
          }).call(onComplete).start();
        };
        _proto.getSlotPositionInRoot = function getSlotPositionInRoot(localIndex) {
          var slot = this.slots[localIndex];
          var rootTransform = this.node.getComponent(UITransform);
          if (!(slot != null && slot.node.activeInHierarchy) || !rootTransform) {
            return null;
          }
          return rootTransform.convertToNodeSpaceAR(slot.node.worldPosition.clone());
        };
        _proto.findSlotAtLocation = function findSlotAtLocation(location) {
          for (var index = 0; index < this.slots.length; index++) {
            if (!this.slots[index].node.activeInHierarchy) {
              continue;
            }
            var transform = this.slots[index].node.getComponent(UITransform);
            if (transform != null && transform.hitTest(location)) {
              return index;
            }
          }
          return -1;
        };
        _proto.endDragVisual = function endDragVisual() {
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
        };
        _proto.resetTouchState = function resetTouchState() {
          this.activeTouchLocalIndex = -1;
          this.dragCandidate = false;
        };
        _proto.updateActionButtons = function updateActionButtons() {
          var enabled = this.selectedLocalIndex >= 0 && !this.swapMode;
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
            this.sortButton.interactable = this.inventory.some(function (entry) {
              return entry !== null;
            }) && !this.swapMode;
          }
        };
        _proto.ensureSortButton = function ensureSortButton() {
          var _this$sortButton, _sortNode$getComponen, _sortNode$getComponen2, _layout$constraintNum, _layout$spacingY;
          if ((_this$sortButton = this.sortButton) != null && _this$sortButton.isValid || !this.stackButton) {
            return;
          }
          var buttonGroup = this.stackButton.node.parent;
          if (!buttonGroup) {
            return;
          }
          var sortNode = instantiate(this.stackButton.node);
          sortNode.name = 'SortButton';
          buttonGroup.addChild(sortNode);
          var sortButton = sortNode.getComponent(Button);
          if (!sortButton) {
            sortNode.destroy();
            return;
          }
          sortButton.target = sortNode;
          sortButton.interactable = true;
          this.sortButton = sortButton;
          var directionNode = new Node('SortDirectionLabel');
          directionNode.layer = sortNode.layer;
          sortNode.addChild(directionNode);
          directionNode.setPosition(0, 8, 0);
          directionNode.addComponent(UITransform).setContentSize(72, 56);
          var directionLabel = directionNode.addComponent(Label);
          directionLabel.fontSize = 42;
          directionLabel.lineHeight = 46;
          directionLabel.isBold = true;
          directionLabel.enableWrapText = false;
          directionLabel.overflow = Label.Overflow.CLAMP;
          directionLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          directionLabel.verticalAlign = Label.VerticalAlign.CENTER;
          directionLabel.color = new Color(255, 235, 155, 255);
          var outline = directionNode.addComponent(LabelOutline);
          outline.color = new Color(62, 29, 14, 255);
          outline.width = 3;
          this.sortDirectionLabel = directionLabel;
          var groupTransform = buttonGroup.getComponent(UITransform);
          var layout = buttonGroup.getComponent(Layout);
          var buttonHeight = (_sortNode$getComponen = (_sortNode$getComponen2 = sortNode.getComponent(UITransform)) == null ? void 0 : _sortNode$getComponen2.contentSize.height) != null ? _sortNode$getComponen : 128;
          var columnCount = Math.max(1, (_layout$constraintNum = layout == null ? void 0 : layout.constraintNum) != null ? _layout$constraintNum : 2);
          var rowCount = Math.ceil(buttonGroup.children.length / columnCount);
          var spacingY = (_layout$spacingY = layout == null ? void 0 : layout.spacingY) != null ? _layout$spacingY : 12;
          var requiredHeight = rowCount * buttonHeight + Math.max(0, rowCount - 1) * spacingY;
          if (groupTransform) {
            groupTransform.setContentSize(groupTransform.contentSize.width, requiredHeight);
          }
          layout == null || layout.updateLayout();
          this.updateSortButtonVisual();
        };
        _proto.ensurePreviousButton = function ensurePreviousButton() {
          var _this$nextButton$node, _this$nextButton$node2, _layout$constraintNum2, _layout$spacingY2;
          if (!this.nextButton) {
            return;
          }
          var buttonGroup = this.nextButton.node.parent;
          if (!buttonGroup) {
            return;
          }
          var existingPreviousNodes = buttonGroup.children.filter(function (node) {
            return node.name === 'PreviousButton';
          });
          if (!this.previousButton || this.previousButton.node.parent !== buttonGroup) {
            var _existingPreviousNode;
            this.previousButton = (_existingPreviousNode = existingPreviousNodes.map(function (node) {
              return node.getComponent(Button);
            }).find(function (button) {
              return button !== null;
            })) != null ? _existingPreviousNode : null;
          }
          if (!this.previousButton) {
            var _previousNode = instantiate(this.nextButton.node);
            _previousNode.name = 'PreviousButton';
            _previousNode.setScale(-1, 1, 1);
            buttonGroup.addChild(_previousNode);
            this.previousButton = _previousNode.getComponent(Button);
          }
          if (!this.previousButton) {
            return;
          }
          var previousNode = this.previousButton.node;
          buttonGroup.children.filter(function (node) {
            return node.name === 'PreviousButton' && node !== previousNode;
          }).forEach(function (node) {
            node.removeFromParent();
            node.destroy();
          });
          var previousScale = previousNode.scale;
          previousNode.setScale(previousScale.x === 0 ? -1 : -Math.abs(previousScale.x), previousScale.y, previousScale.z);
          previousNode.setSiblingIndex(buttonGroup.children.length - 1);
          this.nextButton.node.setSiblingIndex(buttonGroup.children.length - 1);
          var layout = buttonGroup.getComponent(Layout);
          var groupTransform = buttonGroup.getComponent(UITransform);
          var buttonHeight = (_this$nextButton$node = (_this$nextButton$node2 = this.nextButton.node.getComponent(UITransform)) == null ? void 0 : _this$nextButton$node2.contentSize.height) != null ? _this$nextButton$node : 128;
          var columnCount = Math.max(1, (_layout$constraintNum2 = layout == null ? void 0 : layout.constraintNum) != null ? _layout$constraintNum2 : 2);
          var rowCount = Math.ceil(buttonGroup.children.length / columnCount);
          var spacingY = (_layout$spacingY2 = layout == null ? void 0 : layout.spacingY) != null ? _layout$spacingY2 : 12;
          var requiredHeight = rowCount * buttonHeight + Math.max(0, rowCount - 1) * spacingY;
          if (groupTransform) {
            groupTransform.setContentSize(groupTransform.contentSize.width, requiredHeight);
          }
          layout == null || layout.updateLayout();
        };
        _proto.updateSortButtonVisual = function updateSortButtonVisual() {
          var arrow = this.sortAscending ? '↑' : '↓';
          if (this.sortDirectionLabel) {
            this.sortDirectionLabel.string = arrow;
          }
          if (this.sortButton) {
            var configuredText = this.createConfiguredButtonHelpDefinition(this.sortButton, this.buttonTextConfig.sort);
            this.createButtonTextLabel(this.sortButton.node, configuredText.label);
            var definition = this.buttonHelpByNode.get(this.sortButton.node);
            if (definition) {
              definition.label = configuredText.label;
              definition.title = configuredText.title;
              definition.description = configuredText.description;
            }
          }
        };
        _proto.ensureFilterControls = function ensureFilterControls() {
          var _this$filterBarNode,
            _this9 = this;
          if ((_this$filterBarNode = this.filterBarNode) != null && _this$filterBarNode.isValid) {
            return;
          }
          var filterBar = new Node('InventoryFilterBar');
          filterBar.layer = this.node.layer;
          this.node.addChild(filterBar);
          filterBar.setPosition(-80, 295, 0);
          filterBar.addComponent(UITransform).setContentSize(620, 96);
          this.filterBarNode = filterBar;
          var tabWidth = 78;
          var tabSpacing = 8;
          var totalWidth = INVENTORY_CATEGORIES.length * tabWidth + (INVENTORY_CATEGORIES.length - 1) * tabSpacing;
          var startX = -totalWidth * 0.5 + tabWidth * 0.5;
          INVENTORY_CATEGORIES.forEach(function (category, index) {
            var button = _this9.createFilterButton(filterBar, "Category_" + category, category, startX + index * (tabWidth + tabSpacing), 0, tabWidth, 36, function () {
              return _this9.selectInventoryCategory(category);
            });
            _this9.categoryButtons.set(category, button);
          });
          var selectionIndicator = new Node('CategorySelectionIndicator');
          selectionIndicator.layer = this.node.layer;
          filterBar.addChild(selectionIndicator);
          selectionIndicator.addComponent(UITransform).setContentSize(58, 6);
          var indicatorGraphics = selectionIndicator.addComponent(Graphics);
          indicatorGraphics.fillColor = new Color(255, 225, 155, 255);
          indicatorGraphics.roundRect(-29, -2, 58, 4, 2);
          indicatorGraphics.fill();
          this.categorySelectionIndicator = selectionIndicator;
          this.moveCategorySelectionIndicator(this.activeCategory, false);
          var searchNode = new Node('ItemNameSearch');
          searchNode.layer = this.node.layer;
          filterBar.addChild(searchNode);
          searchNode.setPosition(-120, -52, 0);
          searchNode.addComponent(UITransform).setContentSize(300, 38);
          var searchBackground = searchNode.addComponent(Graphics);
          searchBackground.fillColor = new Color(24, 19, 17, 245);
          searchBackground.strokeColor = new Color(224, 167, 96, 255);
          searchBackground.lineWidth = 2;
          searchBackground.roundRect(-150, -19, 300, 38, 7);
          searchBackground.fill();
          searchBackground.stroke();
          var searchEditBox = searchNode.addComponent(EditBox);
          searchEditBox.inputMode = EditBox.InputMode.SINGLE_LINE;
          searchEditBox.maxLength = 20;
          searchEditBox.placeholder = '输入物品名称…';
          searchEditBox.string = '';
          this.configureSearchLabel(searchEditBox.textLabel, false);
          this.configureSearchLabel(searchEditBox.placeholderLabel, true);
          searchNode.on(EditBox.EventType.TEXT_CHANGED, this.onSearchTextChanged, this);
          this.searchEditBox = searchEditBox;
          this.createFilterButton(filterBar, 'ResetFilterButton', '重置', 70, -52, 60, 38, this.resetInventoryFilters);
          this.rarityFilterButton = this.createFilterButton(filterBar, 'RarityFilterButton', '稀有度：全部', 195, -52, 170, 38, this.toggleRarityMenu);
          var statusNode = new Node('FilterStatus');
          statusNode.layer = this.node.layer;
          filterBar.addChild(statusNode);
          statusNode.setPosition(-220, -88, 0);
          statusNode.addComponent(UITransform).setContentSize(220, 22);
          var statusLabel = statusNode.addComponent(Label);
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
            this.panelNode.setPosition(this.panelNode.position.x, -35, this.panelNode.position.z);
          }
          if (this.slotGrid) {
            this.slotGrid.setPosition(this.slotGrid.position.x, -35, this.slotGrid.position.z);
            this.slotGridRestPosition = this.slotGrid.position.clone();
          }
          this.updateFilterVisuals();
        };
        _proto.ensureInventoryBackdrop = function ensureInventoryBackdrop() {
          if (!this.slotGrid) {
            return;
          }
          var gridTransform = this.slotGrid.getComponent(UITransform);
          var backdrop = this.node.getChildByName('InventoryBackdrop');
          var createdAtRuntime = !backdrop;
          if (!backdrop) {
            backdrop = new Node('InventoryBackdrop');
            backdrop.layer = this.node.layer;
            this.node.addChild(backdrop);
            backdrop.setPosition(this.slotGrid.position);
          }
          var transform = backdrop.getComponent(UITransform);
          if (!transform) {
            var _gridTransform$conten, _gridTransform$conten2;
            transform = backdrop.addComponent(UITransform);
            transform.setContentSize(((_gridTransform$conten = gridTransform == null ? void 0 : gridTransform.contentSize.width) != null ? _gridTransform$conten : 426) + 30, ((_gridTransform$conten2 = gridTransform == null ? void 0 : gridTransform.contentSize.height) != null ? _gridTransform$conten2 : 417) + 30);
          }
          var graphics = backdrop.getComponent(Graphics);
          if (!graphics) {
            graphics = backdrop.addComponent(Graphics);
            graphics.fillColor = new Color(15, 18, 28, 255);
            graphics.strokeColor = new Color(181, 164, 205, 90);
            graphics.lineWidth = 2;
          }
          var opacity = backdrop.getComponent(UIOpacity);
          if (!opacity) {
            opacity = backdrop.addComponent(UIOpacity);
            opacity.opacity = 224;
          }
          var width = transform.contentSize.width;
          var height = transform.contentSize.height;
          graphics.clear();
          graphics.roundRect(-width * 0.5, -height * 0.5, width, height, 14);
          graphics.fill();
          graphics.roundRect(-width * 0.5, -height * 0.5, width, height, 14);
          graphics.stroke();
          if (createdAtRuntime) {
            backdrop.setSiblingIndex(this.slotGrid.getSiblingIndex());
          }
          this.inventoryBackdropNode = backdrop;
          this.applySlotBackgroundStyle();
        };
        _proto.applySlotBackgroundStyle = function applySlotBackgroundStyle() {
          this.slots.forEach(function (slot) {
            var sprite = slot.node.getComponent(Sprite);
            if (sprite) {
              sprite.color = new Color(92, 88, 108, 224);
            }
          });
        };
        _proto.configureSearchLabel = function configureSearchLabel(label, placeholder) {
          var _label$node$getCompon;
          if (!label) {
            return;
          }
          (_label$node$getCompon = label.node.getComponent(UITransform)) == null || _label$node$getCompon.setAnchorPoint(0, 1);
          label.fontSize = 18;
          label.lineHeight = 22;
          label.enableWrapText = false;
          label.overflow = Label.Overflow.CLAMP;
          label.horizontalAlign = Label.HorizontalAlign.LEFT;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          label.color = placeholder ? new Color(155, 139, 122, 255) : new Color(255, 244, 218, 255);
        };
        _proto.createFilterButton = function createFilterButton(parent, name, text, x, y, width, height, callback) {
          var node = new Node(name);
          node.layer = this.node.layer;
          parent.addChild(node);
          node.setPosition(x, y, 0);
          node.addComponent(UITransform).setContentSize(width, height);
          node.addComponent(Graphics);
          var button = node.addComponent(Button);
          button.target = node;
          button.interactable = true;
          node.on(Button.EventType.CLICK, callback, this);
          var labelNode = new Node('FilterLabel');
          labelNode.layer = this.node.layer;
          node.addChild(labelNode);
          labelNode.addComponent(UITransform).setContentSize(Math.max(20, width - 10), Math.max(20, height - 4));
          var label = labelNode.addComponent(Label);
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
        };
        _proto.redrawFilterButton = function redrawFilterButton(button, selected) {
          var _button$node$getChild;
          var transform = button.node.getComponent(UITransform);
          var graphics = button.node.getComponent(Graphics);
          var label = (_button$node$getChild = button.node.getChildByName('FilterLabel')) == null ? void 0 : _button$node$getChild.getComponent(Label);
          if (!transform || !graphics) {
            return;
          }
          var width = transform.contentSize.width;
          var height = transform.contentSize.height;
          graphics.clear();
          graphics.fillColor = selected ? new Color(154, 103, 48, 255) : new Color(55, 39, 29, 245);
          graphics.strokeColor = selected ? new Color(255, 218, 142, 255) : new Color(184, 129, 75, 255);
          graphics.lineWidth = selected ? 3 : 2;
          graphics.roundRect(-width * 0.5, -height * 0.5, width, height, 7);
          graphics.fill();
          graphics.stroke();
          if (label) {
            label.color = selected ? new Color(255, 247, 207, 255) : new Color(222, 207, 183, 255);
          }
        };
        _proto.setFilterButtonText = function setFilterButtonText(button, text) {
          var _button$node$getChild2;
          var label = button == null || (_button$node$getChild2 = button.node.getChildByName('FilterLabel')) == null ? void 0 : _button$node$getChild2.getComponent(Label);
          if (label) {
            label.string = text;
          }
        };
        _proto.ensureRarityMenu = function ensureRarityMenu(parent) {
          var _this10 = this;
          var menu = new Node('RarityFilterMenu');
          menu.layer = this.node.layer;
          parent.addChild(menu);
          menu.setPosition(195, -185, 0);
          menu.addComponent(UITransform).setContentSize(190, 246);
          menu.addComponent(BlockInputEvents);
          var background = menu.addComponent(Graphics);
          background.fillColor = new Color(31, 23, 19, 252);
          background.strokeColor = new Color(238, 181, 105, 255);
          background.lineWidth = 3;
          background.roundRect(-95, -123, 190, 246, 9);
          background.fill();
          background.stroke();
          var options = [{
            index: null,
            label: '全部稀有度'
          }].concat(RARITY_NAMES.map(function (label, index) {
            return {
              index: index,
              label: label
            };
          }));
          options.forEach(function (option, optionIndex) {
            var _option$index;
            var button = _this10.createFilterButton(menu, "RarityOption_" + ((_option$index = option.index) != null ? _option$index : 'all'), option.label, 0, 102 - optionIndex * 34, 170, 30, function () {
              return _this10.selectRarity(option.index);
            });
            _this10.rarityOptionButtons.set(option.index, button);
          });
          menu.active = false;
          this.rarityMenuNode = menu;
        };
        _proto.selectInventoryCategory = function selectInventoryCategory(category) {
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
        };
        _proto.startCategoryTransition = function startCategoryTransition(category) {
          var _grid$getComponent,
            _this$slotGridRestPos,
            _this$slotGridRestPos2,
            _this11 = this;
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
          var grid = this.slotGrid;
          var opacity = (_grid$getComponent = grid.getComponent(UIOpacity)) != null ? _grid$getComponent : grid.addComponent(UIOpacity);
          var basePosition = (_this$slotGridRestPos = (_this$slotGridRestPos2 = this.slotGridRestPosition) == null ? void 0 : _this$slotGridRestPos2.clone()) != null ? _this$slotGridRestPos : grid.position.clone();
          var exitPosition = new Vec3(basePosition.x - 24, basePosition.y, basePosition.z);
          var enterPosition = new Vec3(basePosition.x + 28, basePosition.y, basePosition.z);
          Tween.stopAllByTarget(grid);
          Tween.stopAllByTarget(opacity);
          this.resetSlotTransitionState();
          grid.setPosition(basePosition);
          opacity.opacity = 255;
          tween(opacity).to(0.14, {
            opacity: 0
          }, {
            easing: 'quadIn'
          }).delay(0.01).to(0.21, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          tween(grid).to(0.14, {
            position: exitPosition
          }, {
            easing: 'quadIn'
          }).call(function () {
            _this11.activeCategory = category;
            grid.setPosition(enterPosition);
            _this11.applyInventoryFilterChange();
            _this11.animateVisibleSlotsIn();
          }).to(0.22, {
            position: basePosition
          }, {
            easing: 'cubicOut'
          }).call(function () {
            grid.setPosition(basePosition);
            opacity.opacity = 255;
            _this11.categoryTransitioning = false;
            var pendingCategory = _this11.pendingInventoryCategory;
            _this11.pendingInventoryCategory = null;
            if (pendingCategory !== null && pendingCategory !== _this11.activeCategory) {
              _this11.moveCategorySelectionIndicator(pendingCategory, true);
              _this11.animateCategoryButton(pendingCategory);
              _this11.startCategoryTransition(pendingCategory);
            }
          }).start();
        };
        _proto.resetSlotTransitionState = function resetSlotTransitionState() {
          this.slots.forEach(function (slot) {
            var opacity = slot.node.getComponent(UIOpacity);
            Tween.stopAllByTarget(slot.node);
            slot.node.setScale(1, 1, 1);
            if (opacity) {
              Tween.stopAllByTarget(opacity);
              opacity.opacity = 255;
            }
          });
        };
        _proto.animateVisibleSlotsIn = function animateVisibleSlotsIn() {
          var visibleIndex = 0;
          this.slots.forEach(function (slot) {
            var _slot$node$getCompone;
            if (!slot.node.activeInHierarchy) {
              return;
            }
            var delay = Math.min(visibleIndex, 15) * 0.012;
            var opacity = (_slot$node$getCompone = slot.node.getComponent(UIOpacity)) != null ? _slot$node$getCompone : slot.node.addComponent(UIOpacity);
            Tween.stopAllByTarget(slot.node);
            Tween.stopAllByTarget(opacity);
            slot.node.setScale(0.92, 0.92, 1);
            opacity.opacity = 0;
            tween(opacity).delay(delay).to(0.17, {
              opacity: 255
            }, {
              easing: 'quadOut'
            }).start();
            tween(slot.node).delay(delay).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            visibleIndex++;
          });
        };
        _proto.moveCategorySelectionIndicator = function moveCategorySelectionIndicator(category, animated) {
          var indicator = this.categorySelectionIndicator;
          var button = this.categoryButtons.get(category);
          if (!indicator || !button) {
            return;
          }
          var targetPosition = new Vec3(button.node.position.x, -21, 0);
          Tween.stopAllByTarget(indicator);
          if (!animated) {
            indicator.setPosition(targetPosition);
            return;
          }
          tween(indicator).to(0.22, {
            position: targetPosition
          }, {
            easing: 'cubicOut'
          }).start();
        };
        _proto.animateCategoryButton = function animateCategoryButton(category) {
          var button = this.categoryButtons.get(category);
          if (!button) {
            return;
          }
          var node = button.node;
          Tween.stopAllByTarget(node);
          node.setScale(0.94, 0.94, 1);
          tween(node).to(0.1, {
            scale: new Vec3(1.08, 1.08, 1)
          }, {
            easing: 'quadOut'
          }).to(0.14, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
        };
        _proto.stopCategoryTransition = function stopCategoryTransition() {
          this.categoryTransitioning = false;
          this.pendingInventoryCategory = null;
          if (this.slotGrid) {
            Tween.stopAllByTarget(this.slotGrid);
            var opacity = this.slotGrid.getComponent(UIOpacity);
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
        };
        _proto.selectRarity = function selectRarity(rarityIndex) {
          this.activeRarityIndex = rarityIndex;
          this.hideRarityMenu();
          this.applyInventoryFilterChange();
        };
        _proto.toggleRarityMenu = function toggleRarityMenu() {
          if (!this.rarityMenuNode) {
            return;
          }
          this.rarityMenuNode.active = !this.rarityMenuNode.active;
          if (this.rarityMenuNode.active) {
            var _this$rarityMenuNode$, _this$rarityMenuNode$2;
            this.rarityMenuNode.setSiblingIndex(Math.max(0, ((_this$rarityMenuNode$ = (_this$rarityMenuNode$2 = this.rarityMenuNode.parent) == null ? void 0 : _this$rarityMenuNode$2.children.length) != null ? _this$rarityMenuNode$ : 1) - 1));
          }
        };
        _proto.hideRarityMenu = function hideRarityMenu() {
          if (this.rarityMenuNode) {
            this.rarityMenuNode.active = false;
          }
        };
        _proto.onSearchTextChanged = function onSearchTextChanged(editBox) {
          this.searchQuery = editBox.string.trim().toLocaleLowerCase();
          this.applyInventoryFilterChange();
        };
        _proto.resetInventoryFilters = function resetInventoryFilters() {
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
        };
        _proto.applyInventoryFilterChange = function applyInventoryFilterChange() {
          this.cancelActiveInteraction();
          this.hideItemTooltip();
          this.hideContextMenu();
          this.currentPage = 0;
          this.updateFilterVisuals();
          this.renderCurrentPage();
        };
        _proto.updateFilterVisuals = function updateFilterVisuals() {
          var _this12 = this,
            _RARITY_NAMES$this$ac;
          this.categoryButtons.forEach(function (button, category) {
            _this12.redrawFilterButton(button, category === _this12.activeCategory);
          });
          var rarityText = this.activeRarityIndex === null ? '全部' : (_RARITY_NAMES$this$ac = RARITY_NAMES[this.activeRarityIndex]) != null ? _RARITY_NAMES$this$ac : '全部';
          this.setFilterButtonText(this.rarityFilterButton, "\u7A00\u6709\u5EA6\uFF1A" + rarityText);
          if (this.rarityFilterButton) {
            this.redrawFilterButton(this.rarityFilterButton, this.activeRarityIndex !== null);
          }
          this.rarityOptionButtons.forEach(function (button, rarityIndex) {
            _this12.redrawFilterButton(button, rarityIndex === _this12.activeRarityIndex);
          });
        };
        _proto.ensurePageIndicator = function ensurePageIndicator() {
          var _this$pageIndicatorNo,
            _this13 = this;
          if ((_this$pageIndicatorNo = this.pageIndicatorNode) != null && _this$pageIndicatorNo.isValid) {
            return;
          }
          var indicator = new Node('PageIndicator');
          indicator.layer = this.node.layer;
          this.node.addChild(indicator);
          indicator.setPosition(0, -318, 0);
          indicator.addComponent(UITransform).setContentSize(150, 30);
          this.pageIndicatorNode = indicator;
          var _loop = function _loop(index) {
            var dotNode = new Node("PageDot_" + index);
            dotNode.layer = _this13.node.layer;
            indicator.addChild(dotNode);
            dotNode.addComponent(UITransform).setContentSize(24, 24);
            dotNode.addComponent(Graphics);
            var button = dotNode.addComponent(Button);
            button.target = dotNode;
            button.transition = Button.Transition.NONE;
            dotNode.on(Button.EventType.CLICK, function () {
              return _this13.onPageDotClicked(index);
            }, _this13);
            dotNode.active = false;
            _this13.pageDotNodes.push(dotNode);
            _this13.pageDotPageIndices.push(-1);
          };
          for (var index = 0; index < this.maxVisiblePageDots; index++) {
            _loop(index);
          }
        };
        _proto.updatePageIndicator = function updatePageIndicator() {
          var _this14 = this;
          if (!this.pageIndicatorNode) {
            return;
          }
          var pageCount = this.getPageCount();
          var visibleCount = Math.min(pageCount, this.maxVisiblePageDots);
          var maximumStart = Math.max(0, pageCount - visibleCount);
          var startPage = Math.min(maximumStart, Math.max(0, this.currentPage - Math.floor(visibleCount * 0.5)));
          var spacing = 24;
          var pageChanged = this.currentPage !== this.lastPageIndicatorPage;
          var selectedDotNode = null;
          this.pageDotNodes.forEach(function (dotNode, index) {
            if (pageChanged) {
              Tween.stopAllByTarget(dotNode);
              dotNode.setScale(1, 1, 1);
            }
            var active = index < visibleCount;
            dotNode.active = active;
            if (!active) {
              _this14.pageDotPageIndices[index] = -1;
              return;
            }
            var pageIndex = startPage + index;
            var selected = pageIndex === _this14.currentPage;
            if (selected) {
              selectedDotNode = dotNode;
            }
            _this14.pageDotPageIndices[index] = pageIndex;
            dotNode.setPosition((index - (visibleCount - 1) * 0.5) * spacing, 0, 0);
            var graphics = dotNode.getComponent(Graphics);
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
            var button = dotNode.getComponent(Button);
            if (button) {
              button.interactable = true;
            }
          });
          if (pageChanged && selectedDotNode) {
            this.animateSelectedPageDot(selectedDotNode);
          }
          this.lastPageIndicatorPage = this.currentPage;
        };
        _proto.animateSelectedPageDot = function animateSelectedPageDot(dotNode) {
          dotNode.setScale(0.62, 0.62, 1);
          tween(dotNode).to(0.1, {
            scale: new Vec3(1.75, 1.75, 1)
          }, {
            easing: 'quadOut'
          }).to(0.13, {
            scale: new Vec3(0.9, 0.9, 1)
          }, {
            easing: 'sineInOut'
          }).to(0.12, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
        };
        _proto.onPageDotClicked = function onPageDotClicked(dotIndex) {
          var _this$pageDotPageIndi;
          var pageIndex = (_this$pageDotPageIndi = this.pageDotPageIndices[dotIndex]) != null ? _this$pageDotPageIndi : -1;
          if (pageIndex < 0 || pageIndex >= this.getPageCount() || pageIndex === this.currentPage) {
            return;
          }
          this.cancelActiveInteraction();
          this.currentPage = pageIndex;
          this.playUiSound(this.pageTurnSound);
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.ensureCapacityControl = function ensureCapacityControl() {
          var _this$capacityControl, _expandButton$node$ge;
          if ((_this$capacityControl = this.capacityControlNode) != null && _this$capacityControl.isValid) {
            return;
          }
          var control = new Node('InventoryCapacityControl');
          control.layer = this.node.layer;
          this.node.addChild(control);
          control.setPosition(-180, -318, 0);
          control.addComponent(UITransform).setContentSize(160, 32);
          this.capacityControlNode = control;
          var labelNode = new Node('CapacityLabel');
          labelNode.layer = this.node.layer;
          control.addChild(labelNode);
          labelNode.setPosition(-10, 0, 0);
          labelNode.addComponent(UITransform).setContentSize(120, 28);
          var label = labelNode.addComponent(Label);
          label.fontSize = 17;
          label.lineHeight = 20;
          label.isBold = true;
          label.enableWrapText = false;
          label.overflow = Label.Overflow.CLAMP;
          label.horizontalAlign = Label.HorizontalAlign.CENTER;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          label.color = new Color(255, 244, 218, 255);
          var outline = labelNode.addComponent(LabelOutline);
          outline.color = new Color(62, 29, 14, 255);
          outline.width = 2;
          this.capacityLabel = label;
          var expandButton = this.createFilterButton(control, 'ExpandCapacityButton', '+', 70, 0, 32, 30, this.showCapacityExpansionDialog);
          var plusLabel = (_expandButton$node$ge = expandButton.node.getChildByName('FilterLabel')) == null ? void 0 : _expandButton$node$ge.getComponent(Label);
          if (plusLabel) {
            plusLabel.fontSize = 24;
            plusLabel.lineHeight = 26;
          }
          this.ensureCapacityExpansionDialog();
          this.updateCapacityDisplay();
        };
        _proto.ensureCapacityExpansionDialog = function ensureCapacityExpansionDialog() {
          var _this$capacityExpansi,
            _this$node$parent2,
            _canvasSize$width,
            _canvasSize$height,
            _this15 = this;
          if ((_this$capacityExpansi = this.capacityExpansionOverlay) != null && _this$capacityExpansi.isValid) {
            return;
          }
          var canvasSize = (_this$node$parent2 = this.node.parent) == null || (_this$node$parent2 = _this$node$parent2.getComponent(UITransform)) == null ? void 0 : _this$node$parent2.contentSize;
          var width = (_canvasSize$width = canvasSize == null ? void 0 : canvasSize.width) != null ? _canvasSize$width : 1280;
          var height = (_canvasSize$height = canvasSize == null ? void 0 : canvasSize.height) != null ? _canvasSize$height : 720;
          var overlay = new Node('CapacityExpansionOverlay');
          overlay.layer = this.node.layer;
          this.node.addChild(overlay);
          overlay.addComponent(UITransform).setContentSize(width, height);
          overlay.addComponent(BlockInputEvents);
          overlay.on(Node.EventType.TOUCH_END, this.onCapacityOverlayTouchEnd, this);
          var shade = overlay.addComponent(Graphics);
          shade.fillColor = new Color(0, 0, 0, 145);
          shade.rect(-width * 0.5, -height * 0.5, width, height);
          shade.fill();
          var dialog = new Node('Dialog');
          dialog.layer = this.node.layer;
          overlay.addChild(dialog);
          dialog.addComponent(UITransform).setContentSize(430, 270);
          dialog.addComponent(BlockInputEvents);
          var background = dialog.addComponent(Graphics);
          background.fillColor = new Color(45, 29, 20, 255);
          background.strokeColor = new Color(238, 181, 105, 255);
          background.lineWidth = 4;
          background.roundRect(-215, -135, 430, 270, 12);
          background.fill();
          background.stroke();
          var titleNode = new Node('Title');
          titleNode.layer = this.node.layer;
          dialog.addChild(titleNode);
          titleNode.setPosition(0, 96, 0);
          titleNode.addComponent(UITransform).setContentSize(390, 34);
          var titleLabel = titleNode.addComponent(Label);
          titleLabel.string = '扩充背包格子';
          titleLabel.fontSize = 24;
          titleLabel.lineHeight = 28;
          titleLabel.isBold = true;
          titleLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          titleLabel.verticalAlign = Label.VerticalAlign.CENTER;
          titleLabel.color = new Color(255, 244, 218, 255);
          var descriptionNode = new Node('Description');
          descriptionNode.layer = this.node.layer;
          dialog.addChild(descriptionNode);
          descriptionNode.setPosition(0, 62, 0);
          descriptionNode.addComponent(UITransform).setContentSize(390, 28);
          var descriptionLabel = descriptionNode.addComponent(Label);
          descriptionLabel.string = '请选择本次增加的格子数量';
          descriptionLabel.fontSize = 18;
          descriptionLabel.lineHeight = 22;
          descriptionLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          descriptionLabel.verticalAlign = Label.VerticalAlign.CENTER;
          descriptionLabel.color = new Color(230, 213, 185, 255);
          var options = [{
            amount: 4,
            x: -92,
            y: 18
          }, {
            amount: 8,
            x: 92,
            y: 18
          }, {
            amount: 16,
            x: -92,
            y: -30
          }, {
            amount: 32,
            x: 92,
            y: -30
          }];
          options.forEach(function (option) {
            _this15.createRuntimeTextButton(dialog, "Expand_" + option.amount, "+" + option.amount + " \u683C", option.y, function () {
              return _this15.expandInventoryCapacity(option.amount);
            }, option.x);
          });
          var noteNode = new Node('TestModeNote');
          noteNode.layer = this.node.layer;
          dialog.addChild(noteNode);
          noteNode.setPosition(0, -94, 0);
          noteNode.addComponent(UITransform).setContentSize(390, 28);
          var noteLabel = noteNode.addComponent(Label);
          noteLabel.string = '测试模式：当前扩充不消耗任何道具';
          noteLabel.fontSize = 16;
          noteLabel.lineHeight = 20;
          noteLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          noteLabel.verticalAlign = Label.VerticalAlign.CENTER;
          noteLabel.color = new Color(201, 178, 143, 255);
          overlay.active = false;
          this.capacityExpansionOverlay = overlay;
        };
        _proto.showCapacityExpansionDialog = function showCapacityExpansionDialog() {
          if (!this.capacityExpansionOverlay) {
            return;
          }
          this.hideButtonTooltip();
          this.hideItemTooltip();
          this.hideContextMenu();
          this.hideRarityMenu();
          this.capacityExpansionOverlay.active = true;
          this.capacityExpansionOverlay.setSiblingIndex(this.node.children.length - 1);
        };
        _proto.onCapacityOverlayTouchEnd = function onCapacityOverlayTouchEnd(event) {
          if (event.target === this.capacityExpansionOverlay) {
            this.hideCapacityExpansionDialog();
          }
        };
        _proto.hideCapacityExpansionDialog = function hideCapacityExpansionDialog() {
          if (this.capacityExpansionOverlay) {
            this.capacityExpansionOverlay.active = false;
          }
        };
        _proto.expandInventoryCapacity = function expandInventoryCapacity(amount) {
          var addedSlots = Math.max(1, Math.floor(amount));
          for (var index = 0; index < addedSlots; index++) {
            this.inventory.push(null);
          }
          this.hideCapacityExpansionDialog();
          this.renderCurrentPage();
          this.saveInventory();
          console.log("\u80CC\u5305\u6269\u5145\u5B8C\u6210\uFF1A+" + addedSlots + " \u683C\uFF0C\u603B\u5BB9\u91CF " + this.inventory.length + " \u683C");
        };
        _proto.updateCapacityDisplay = function updateCapacityDisplay() {
          if (!this.capacityLabel) {
            return;
          }
          var occupiedSlots = this.inventory.reduce(function (total, entry) {
            return total + (entry ? 1 : 0);
          }, 0);
          this.capacityLabel.string = "\u683C\u5B50\uFF1A" + occupiedSlots + "/" + this.inventory.length;
        };
        _proto.resolveButtonTextTemplate = function resolveButtonTextTemplate(text) {
          var direction = this.sortAscending ? '↑' : '↓';
          return (text != null ? text : '').replace(/\{direction\}/g, direction);
        };
        _proto.createConfiguredButtonHelpDefinition = function createConfiguredButtonHelpDefinition(button, text) {
          return {
            button: button,
            label: this.resolveButtonTextTemplate(text.label),
            title: this.resolveButtonTextTemplate(text.title),
            description: this.resolveButtonTextTemplate(text.description)
          };
        };
        _proto.setupButtonHelp = function setupButtonHelp() {
          var _this16 = this;
          var text = this.buttonTextConfig;
          var definitions = [this.createConfiguredButtonHelpDefinition(this.backpackButton, text.backpack), this.createConfiguredButtonHelpDefinition(this.closeButton, text.close), this.createConfiguredButtonHelpDefinition(this.stackButton, text.stack), this.createConfiguredButtonHelpDefinition(this.swapButton, text.swap), this.createConfiguredButtonHelpDefinition(this.craftButton, text.craft), this.createConfiguredButtonHelpDefinition(this.previousButton, text.previous), this.createConfiguredButtonHelpDefinition(this.nextButton, text.next), this.createConfiguredButtonHelpDefinition(this.sortButton, text.sort)];
          definitions.forEach(function (definition) {
            var button = definition.button;
            if (!button) {
              return;
            }
            _this16.buttonHelpByNode.set(button.node, definition);
            _this16.createButtonTextLabel(button.node, definition.label);
            button.node.on(Node.EventType.MOUSE_ENTER, _this16.onButtonMouseEnter, _this16);
            button.node.on(Node.EventType.MOUSE_MOVE, _this16.onButtonMouseMove, _this16);
            button.node.on(Node.EventType.MOUSE_LEAVE, _this16.onButtonMouseLeave, _this16);
          });
          this.ensureTooltipNode();
          this.ensureItemTooltipNode();
          this.ensureContextMenu();
          this.ensureQuantityDialog();
        };
        _proto.teardownButtonHelp = function teardownButtonHelp() {
          var _this17 = this;
          this.buttonHelpByNode.forEach(function (_definition, node) {
            node.off(Node.EventType.MOUSE_ENTER, _this17.onButtonMouseEnter, _this17);
            node.off(Node.EventType.MOUSE_MOVE, _this17.onButtonMouseMove, _this17);
            node.off(Node.EventType.MOUSE_LEAVE, _this17.onButtonMouseLeave, _this17);
          });
          this.buttonHelpByNode.clear();
        };
        _proto.createButtonTextLabel = function createButtonTextLabel(buttonNode, text) {
          var labelNode = buttonNode.getChildByName('FunctionLabel');
          if (!labelNode) {
            labelNode = new Node('FunctionLabel');
            labelNode.layer = buttonNode.layer;
            buttonNode.addChild(labelNode);
            var transform = labelNode.addComponent(UITransform);
            transform.setContentSize(112, 24);
            labelNode.setPosition(0, -43, 0);
            var _label = labelNode.addComponent(Label);
            _label.fontSize = 18;
            _label.lineHeight = 20;
            _label.isBold = true;
            _label.enableWrapText = false;
            _label.overflow = Label.Overflow.CLAMP;
            _label.horizontalAlign = Label.HorizontalAlign.CENTER;
            _label.verticalAlign = Label.VerticalAlign.CENTER;
            _label.color = new Color(255, 246, 218, 255);
            var outline = labelNode.addComponent(LabelOutline);
            outline.color = new Color(62, 29, 14, 255);
            outline.width = 2;
          }
          var label = labelNode.getComponent(Label);
          if (label) {
            label.string = text;
          }
          labelNode.setScale(buttonNode.scale.x < 0 ? -1 : 1, 1, 1);
        };
        _proto.ensureTooltipNode = function ensureTooltipNode() {
          var _this$tooltipNode;
          if ((_this$tooltipNode = this.tooltipNode) != null && _this$tooltipNode.isValid && this.tooltipLabel) {
            return;
          }
          var tooltip = new Node('ButtonTooltip');
          tooltip.layer = this.node.layer;
          this.node.addChild(tooltip);
          var tooltipTransform = tooltip.addComponent(UITransform);
          tooltipTransform.setContentSize(360, 124);
          var background = tooltip.addComponent(Graphics);
          background.fillColor = new Color(38, 25, 18, 244);
          background.strokeColor = new Color(238, 181, 105, 255);
          background.lineWidth = 3;
          background.roundRect(-180, -62, 360, 124, 10);
          background.fill();
          background.stroke();
          var textNode = new Node('TooltipText');
          textNode.layer = this.node.layer;
          tooltip.addChild(textNode);
          textNode.addComponent(UITransform).setContentSize(324, 94);
          var label = textNode.addComponent(Label);
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
        };
        _proto.ensureItemTooltipNode = function ensureItemTooltipNode() {
          var _this$itemTooltipNode2;
          if ((_this$itemTooltipNode2 = this.itemTooltipNode) != null && _this$itemTooltipNode2.isValid && this.itemTooltipLabel) {
            return;
          }
          var tooltip = new Node('ItemTooltip');
          tooltip.layer = this.node.layer;
          this.node.addChild(tooltip);
          var tooltipTransform = tooltip.addComponent(UITransform);
          tooltipTransform.setContentSize(460, 320);
          var background = tooltip.addComponent(Graphics);
          background.fillColor = new Color(28, 24, 22, 246);
          background.strokeColor = new Color(218, 174, 104, 255);
          background.lineWidth = 3;
          background.roundRect(-230, -160, 460, 320, 10);
          background.fill();
          background.stroke();
          var textNode = new Node('ItemTooltipText');
          textNode.layer = this.node.layer;
          tooltip.addChild(textNode);
          textNode.addComponent(UITransform).setContentSize(420, 284);
          var label = textNode.addComponent(Label);
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
        };
        _proto.ensureContextMenu = function ensureContextMenu() {
          var _this$contextMenuNode;
          if ((_this$contextMenuNode = this.contextMenuNode) != null && _this$contextMenuNode.isValid) {
            return;
          }
          var menu = new Node('ItemContextMenu');
          menu.layer = this.node.layer;
          this.node.addChild(menu);
          menu.addComponent(UITransform).setContentSize(190, 100);
          menu.addComponent(BlockInputEvents);
          var background = menu.addComponent(Graphics);
          background.fillColor = new Color(38, 25, 18, 248);
          background.strokeColor = new Color(238, 181, 105, 255);
          background.lineWidth = 3;
          background.roundRect(-95, -50, 190, 100, 9);
          background.fill();
          background.stroke();
          this.contextUseButton = this.createRuntimeTextButton(menu, 'UseButton', '使用', 20, this.useSelectedItem);
          this.contextDiscardButton = this.createRuntimeTextButton(menu, 'DiscardButton', '丢弃', -20, this.requestDiscardSelectedItem);
          menu.active = false;
          this.contextMenuNode = menu;
        };
        _proto.ensureQuantityDialog = function ensureQuantityDialog() {
          var _this$quantityDialogN, _this$node$parent3, _canvasSize$width2, _canvasSize$height2;
          if ((_this$quantityDialogN = this.quantityDialogNode) != null && _this$quantityDialogN.isValid && this.quantityDialogLabel && this.quantitySlider && this.quantityEditBox) {
            return;
          }
          var canvasSize = (_this$node$parent3 = this.node.parent) == null || (_this$node$parent3 = _this$node$parent3.getComponent(UITransform)) == null ? void 0 : _this$node$parent3.contentSize;
          var width = (_canvasSize$width2 = canvasSize == null ? void 0 : canvasSize.width) != null ? _canvasSize$width2 : 1280;
          var height = (_canvasSize$height2 = canvasSize == null ? void 0 : canvasSize.height) != null ? _canvasSize$height2 : 720;
          var overlay = new Node('QuantityOperationOverlay');
          overlay.layer = this.node.layer;
          this.node.addChild(overlay);
          overlay.addComponent(UITransform).setContentSize(width, height);
          overlay.addComponent(BlockInputEvents);
          overlay.on(Node.EventType.TOUCH_END, this.onQuantityOverlayTouchEnd, this);
          var shade = overlay.addComponent(Graphics);
          shade.fillColor = new Color(0, 0, 0, 145);
          shade.rect(-width * 0.5, -height * 0.5, width, height);
          shade.fill();
          var dialog = new Node('Dialog');
          dialog.layer = this.node.layer;
          overlay.addChild(dialog);
          dialog.addComponent(UITransform).setContentSize(580, 350);
          dialog.addComponent(BlockInputEvents);
          var dialogBackground = dialog.addComponent(Graphics);
          dialogBackground.fillColor = new Color(45, 29, 20, 255);
          dialogBackground.strokeColor = new Color(238, 181, 105, 255);
          dialogBackground.lineWidth = 4;
          dialogBackground.roundRect(-290, -175, 580, 350, 12);
          dialogBackground.fill();
          dialogBackground.stroke();
          var textNode = new Node('OperationText');
          textNode.layer = this.node.layer;
          dialog.addChild(textNode);
          textNode.setPosition(0, 118, 0);
          textNode.addComponent(UITransform).setContentSize(520, 74);
          var label = textNode.addComponent(Label);
          label.fontSize = 22;
          label.lineHeight = 31;
          label.enableWrapText = true;
          label.overflow = Label.Overflow.CLAMP;
          label.horizontalAlign = Label.HorizontalAlign.CENTER;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          label.color = new Color(255, 244, 218, 255);
          var sliderNode = new Node('QuantitySlider');
          sliderNode.layer = this.node.layer;
          dialog.addChild(sliderNode);
          sliderNode.setPosition(0, 48, 0);
          sliderNode.addComponent(UITransform).setContentSize(330, 30);
          var sliderTrack = sliderNode.addComponent(Graphics);
          sliderTrack.fillColor = new Color(82, 58, 42, 255);
          sliderTrack.strokeColor = new Color(211, 157, 91, 255);
          sliderTrack.lineWidth = 2;
          sliderTrack.roundRect(-165, -6, 330, 12, 6);
          sliderTrack.fill();
          sliderTrack.stroke();
          var handleNode = new Node('Handle');
          handleNode.layer = this.node.layer;
          sliderNode.addChild(handleNode);
          handleNode.addComponent(UITransform).setContentSize(30, 30);
          var handleSprite = handleNode.addComponent(Sprite);
          var handleVisual = new Node('HandleVisual');
          handleVisual.layer = this.node.layer;
          handleNode.addChild(handleVisual);
          handleVisual.addComponent(UITransform).setContentSize(30, 30);
          var handleGraphics = handleVisual.addComponent(Graphics);
          handleGraphics.fillColor = new Color(240, 174, 91, 255);
          handleGraphics.strokeColor = new Color(75, 39, 20, 255);
          handleGraphics.lineWidth = 3;
          handleGraphics.circle(0, 0, 13);
          handleGraphics.fill();
          handleGraphics.stroke();
          var slider = sliderNode.addComponent(Slider);
          slider.direction = Slider.Direction.Horizontal;
          slider.handle = handleSprite;
          slider.progress = 0;
          sliderNode.on('slide', this.onQuantitySliderChanged, this);
          var quantityCaption = new Node('QuantityCaption');
          quantityCaption.layer = this.node.layer;
          dialog.addChild(quantityCaption);
          quantityCaption.setPosition(-185, -20, 0);
          quantityCaption.addComponent(UITransform).setContentSize(90, 38);
          var captionLabel = quantityCaption.addComponent(Label);
          captionLabel.string = '数量：';
          captionLabel.fontSize = 20;
          captionLabel.lineHeight = 24;
          captionLabel.horizontalAlign = Label.HorizontalAlign.RIGHT;
          captionLabel.verticalAlign = Label.VerticalAlign.CENTER;
          captionLabel.color = new Color(255, 244, 218, 255);
          var editNode = new Node('QuantityEditBox');
          editNode.layer = this.node.layer;
          dialog.addChild(editNode);
          editNode.setPosition(-92, -20, 0);
          editNode.addComponent(UITransform).setContentSize(104, 42);
          var editBackground = editNode.addComponent(Graphics);
          editBackground.fillColor = new Color(24, 19, 17, 255);
          editBackground.strokeColor = new Color(224, 167, 96, 255);
          editBackground.lineWidth = 2;
          editBackground.roundRect(-52, -21, 104, 42, 5);
          editBackground.fill();
          editBackground.stroke();
          var editBox = editNode.addComponent(EditBox);
          editBox.inputMode = EditBox.InputMode.NUMERIC;
          editBox.maxLength = 3;
          editBox.placeholder = '';
          editBox.string = '1';
          var editTextLabel = editBox.textLabel;
          if (editTextLabel) {
            var _editTextLabel$node$g;
            (_editTextLabel$node$g = editTextLabel.node.getComponent(UITransform)) == null || _editTextLabel$node$g.setAnchorPoint(0, 1);
            editTextLabel.fontSize = 21;
            editTextLabel.lineHeight = 25;
            editTextLabel.enableWrapText = false;
            editTextLabel.overflow = Label.Overflow.CLAMP;
            editTextLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
            editTextLabel.verticalAlign = Label.VerticalAlign.CENTER;
            editTextLabel.color = new Color(255, 244, 218, 255);
            editTextLabel.string = '1';
          }
          var placeholderLabel = editBox.placeholderLabel;
          if (placeholderLabel) {
            var _placeholderLabel$nod;
            (_placeholderLabel$nod = placeholderLabel.node.getComponent(UITransform)) == null || _placeholderLabel$nod.setAnchorPoint(0, 1);
            placeholderLabel.string = '';
            placeholderLabel.fontSize = 21;
            placeholderLabel.lineHeight = 25;
            placeholderLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
            placeholderLabel.verticalAlign = Label.VerticalAlign.CENTER;
            placeholderLabel.color = new Color(150, 135, 120, 255);
          }
          editNode.on(EditBox.EventType.TEXT_CHANGED, this.onQuantityTextChanged, this);
          editNode.on(EditBox.EventType.EDITING_DID_ENDED, this.onQuantityEditingEnded, this);
          this.createRuntimeTextButton(dialog, 'MaximumButton', '最大', -20, this.setMaximumQuantity, 70);
          this.quantityConfirmButton = this.createRuntimeTextButton(dialog, 'ConfirmQuantityButton', '确认', -122, this.confirmQuantityOperation, 0);
          overlay.active = false;
          this.quantityDialogNode = overlay;
          this.quantityDialogLabel = label;
          this.quantitySlider = slider;
          this.quantityEditBox = editBox;
        };
        _proto.createRuntimeTextButton = function createRuntimeTextButton(parent, name, text, y, callback, x) {
          if (x === void 0) {
            x = 0;
          }
          var node = new Node(name);
          node.layer = this.node.layer;
          parent.addChild(node);
          node.setPosition(x, y, 0);
          node.addComponent(UITransform).setContentSize(164, 32);
          var background = node.addComponent(Graphics);
          background.fillColor = new Color(108, 67, 39, 255);
          background.strokeColor = new Color(229, 167, 91, 255);
          background.lineWidth = 2;
          background.roundRect(-82, -16, 164, 32, 5);
          background.fill();
          background.stroke();
          var button = node.addComponent(Button);
          button.target = node;
          button.transition = Button.Transition.COLOR;
          button.normalColor = new Color(255, 255, 255, 255);
          button.hoverColor = new Color(255, 225, 170, 255);
          button.pressedColor = new Color(210, 170, 120, 255);
          button.disabledColor = new Color(105, 105, 105, 190);
          node.on(Button.EventType.CLICK, callback, this);
          var labelNode = new Node('Label');
          labelNode.layer = this.node.layer;
          node.addChild(labelNode);
          labelNode.addComponent(UITransform).setContentSize(154, 28);
          var label = labelNode.addComponent(Label);
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
        };
        _proto.showContextMenu = function showContextMenu(location) {
          if (!this.contextMenuNode || this.selectedLocalIndex < 0) {
            return;
          }
          var entry = this.getEntryAtLocalIndex(this.selectedLocalIndex);
          var config = entry ? this.getItemConfig(entry.itemId) : null;
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
        };
        _proto.hideContextMenu = function hideContextMenu() {
          if (this.contextMenuNode) {
            this.contextMenuNode.active = false;
          }
        };
        _proto.updateContextMenuPosition = function updateContextMenuPosition(location) {
          var _this$node$parent4;
          if (!this.contextMenuNode) {
            return;
          }
          var rootTransform = this.node.getComponent(UITransform);
          var canvasTransform = (_this$node$parent4 = this.node.parent) == null ? void 0 : _this$node$parent4.getComponent(UITransform);
          if (!rootTransform || !canvasTransform) {
            return;
          }
          var local = rootTransform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          var halfWidth = canvasTransform.contentSize.width * 0.5;
          var halfHeight = canvasTransform.contentSize.height * 0.5;
          var xOffset = local.x >= 0 ? -112 : 112;
          var x = Math.max(-halfWidth + 95, Math.min(halfWidth - 95, local.x + xOffset));
          var y = Math.max(-halfHeight + 50, Math.min(halfHeight - 50, local.y));
          this.contextMenuNode.setPosition(x, y, 0);
        };
        _proto.onQuantityOverlayTouchEnd = function onQuantityOverlayTouchEnd(event) {
          if (event.target === this.quantityDialogNode) {
            this.cancelQuantityOperation();
          }
        };
        _proto.useSelectedItem = function useSelectedItem() {
          this.openQuantityDialog('use');
        };
        _proto.requestDiscardSelectedItem = function requestDiscardSelectedItem() {
          this.openQuantityDialog('discard');
        };
        _proto.openQuantityDialog = function openQuantityDialog(operation) {
          var index = this.getInventoryIndex(this.selectedLocalIndex);
          var entry = this.inventory[index];
          if (!entry || !this.quantityDialogNode || !this.quantityDialogLabel || !this.quantitySlider || !this.quantityEditBox) {
            return;
          }
          var config = this.getItemConfig(entry.itemId);
          var allowed = operation === 'use' ? config == null ? void 0 : config.canUse : config == null ? void 0 : config.canDiscard;
          if (!config || !allowed) {
            return;
          }
          this.pendingQuantityOperation = operation;
          this.pendingQuantityIndex = index;
          this.pendingQuantityMaximum = operation === 'use' && !config.consumeOnUse ? 1 : entry.count;
          this.pendingQuantity = 1;
          var actionName = operation === 'use' ? '使用' : '丢弃';
          this.quantityDialogLabel.string = actionName + " " + config.itemName + "\n\u8BF7\u9009\u62E9\u6570\u91CF\uFF081 - " + this.pendingQuantityMaximum + "\uFF09";
          this.setRuntimeButtonText(this.quantityConfirmButton, "\u786E\u8BA4" + actionName);
          this.setPendingQuantity(1);
          this.hideContextMenu();
          this.quantityDialogNode.active = true;
          this.quantityDialogNode.setSiblingIndex(this.node.children.length - 1);
        };
        _proto.onQuantitySliderChanged = function onQuantitySliderChanged(slider) {
          var range = Math.max(0, this.pendingQuantityMaximum - 1);
          var quantity = 1 + Math.round(slider.progress * range);
          this.setPendingQuantity(quantity, false);
        };
        _proto.onQuantityTextChanged = function onQuantityTextChanged(editBox) {
          var quantity = Number.parseInt(editBox.string, 10);
          if (Number.isFinite(quantity)) {
            this.setPendingQuantity(quantity, true);
          }
        };
        _proto.onQuantityEditingEnded = function onQuantityEditingEnded(editBox) {
          var quantity = Number.parseInt(editBox.string, 10);
          this.setPendingQuantity(Number.isFinite(quantity) ? quantity : 1);
        };
        _proto.setMaximumQuantity = function setMaximumQuantity() {
          this.setPendingQuantity(this.pendingQuantityMaximum);
        };
        _proto.setPendingQuantity = function setPendingQuantity(quantity, updateSlider) {
          if (updateSlider === void 0) {
            updateSlider = true;
          }
          var clamped = Math.max(1, Math.min(this.pendingQuantityMaximum, Math.floor(quantity)));
          this.pendingQuantity = clamped;
          if (this.quantityEditBox) {
            this.quantityEditBox.string = String(clamped);
            if (this.quantityEditBox.textLabel) {
              this.quantityEditBox.textLabel.string = String(clamped);
            }
          }
          if (this.quantitySlider && updateSlider) {
            var range = this.pendingQuantityMaximum - 1;
            this.quantitySlider.progress = range > 0 ? (clamped - 1) / range : 0;
          }
        };
        _proto.setRuntimeButtonText = function setRuntimeButtonText(button, text) {
          var _button$node$getChild3;
          var label = button == null || (_button$node$getChild3 = button.node.getChildByName('Label')) == null ? void 0 : _button$node$getChild3.getComponent(Label);
          if (label) {
            label.string = text;
          }
        };
        _proto.confirmQuantityOperation = function confirmQuantityOperation() {
          var _this18 = this;
          var index = this.pendingQuantityIndex;
          var operation = this.pendingQuantityOperation;
          var entry = index >= 0 ? this.inventory[index] : null;
          if (!entry || !operation) {
            this.cancelQuantityOperation();
            return;
          }
          var quantity = Math.min(this.pendingQuantity, entry.count);
          var config = this.getItemConfig(entry.itemId);
          if (!config) {
            this.cancelQuantityOperation();
            return;
          }
          if (operation === 'discard' && this.worldScenario.enabled && !this.spawnWorldItem(entry.itemId, quantity, this.getWorldDiscardLifetime())) {
            console.warn("\u4E22\u5F03\u5931\u8D25\uFF0C\u80CC\u5305\u672A\u6263\u9664\uFF1A" + config.itemName + " \xD7" + quantity);
            this.cancelQuantityOperation();
            return;
          }
          if (operation === 'use') {
            this.node.emit('inventory-item-used', {
              itemId: entry.itemId,
              itemName: config.itemName,
              quantity: quantity,
              config: config
            });
            config.effects.forEach(function (effect) {
              _this18.node.emit('inventory-item-effect', {
                itemId: entry.itemId,
                quantity: quantity,
                effect: effect
              });
            });
          }
          var shouldRemove = operation === 'discard' || config.consumeOnUse;
          if (shouldRemove) {
            entry.count -= quantity;
            if (entry.count <= 0) {
              this.inventory[index] = null;
            }
          }
          console.log(operation === 'use' ? "\u4F7F\u7528\u7269\u54C1\uFF1A" + config.itemName + " \xD7" + quantity : "\u4E22\u5F03\u7269\u54C1\uFF1A" + config.itemName + " \xD7" + quantity);
          this.cancelQuantityOperation();
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.cancelQuantityOperation = function cancelQuantityOperation() {
          this.pendingQuantityOperation = null;
          this.pendingQuantityIndex = -1;
          this.pendingQuantityMaximum = 1;
          this.pendingQuantity = 1;
          if (this.quantityDialogNode) {
            this.quantityDialogNode.active = false;
          }
        };
        _proto.onButtonMouseEnter = function onButtonMouseEnter(event) {
          var _definition$button;
          var node = event.currentTarget;
          var definition = this.buttonHelpByNode.get(node);
          if (!definition || !this.tooltipNode || !this.tooltipLabel) {
            return;
          }
          this.hideItemTooltip();
          this.hideContextMenu();
          var unavailableHint = this.buttonTextConfig.unavailableHint.trim();
          var unavailableText = ((_definition$button = definition.button) == null ? void 0 : _definition$button.interactable) === false && unavailableHint.length > 0 ? "\n" + unavailableHint : '';
          this.tooltipLabel.string = definition.title + "\n" + definition.description + unavailableText;
          this.tooltipNode.active = true;
          this.tooltipNode.setSiblingIndex(this.node.children.length - 1);
          this.updateTooltipPosition(event.getUILocation());
        };
        _proto.onButtonMouseMove = function onButtonMouseMove(event) {
          var _this$tooltipNode2;
          if ((_this$tooltipNode2 = this.tooltipNode) != null && _this$tooltipNode2.active) {
            this.updateTooltipPosition(event.getUILocation());
          }
        };
        _proto.onButtonMouseLeave = function onButtonMouseLeave() {
          this.hideButtonTooltip();
        };
        _proto.hideButtonTooltip = function hideButtonTooltip() {
          if (this.tooltipNode) {
            this.tooltipNode.active = false;
          }
        };
        _proto.hideItemTooltip = function hideItemTooltip() {
          if (this.itemTooltipNode) {
            this.itemTooltipNode.active = false;
          }
        };
        _proto.updateTooltipPosition = function updateTooltipPosition(location) {
          var _this$node$parent5;
          if (!this.tooltipNode) {
            return;
          }
          var rootTransform = this.node.getComponent(UITransform);
          var canvasTransform = (_this$node$parent5 = this.node.parent) == null ? void 0 : _this$node$parent5.getComponent(UITransform);
          if (!rootTransform || !canvasTransform) {
            return;
          }
          var local = rootTransform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          var halfWidth = canvasTransform.contentSize.width * 0.5;
          var halfHeight = canvasTransform.contentSize.height * 0.5;
          var tooltipHalfWidth = 180;
          var tooltipHalfHeight = 62;
          var horizontalOffset = local.x >= 0 ? -205 : 205;
          var x = Math.max(-halfWidth + tooltipHalfWidth, Math.min(halfWidth - tooltipHalfWidth, local.x + horizontalOffset));
          var y = Math.max(-halfHeight + tooltipHalfHeight, Math.min(halfHeight - tooltipHalfHeight, local.y + 74));
          this.tooltipNode.setPosition(x, y, 0);
        };
        _proto.updateItemTooltipPosition = function updateItemTooltipPosition(location) {
          var _this$node$parent6;
          if (!this.itemTooltipNode) {
            return;
          }
          var rootTransform = this.node.getComponent(UITransform);
          var canvasTransform = (_this$node$parent6 = this.node.parent) == null ? void 0 : _this$node$parent6.getComponent(UITransform);
          if (!rootTransform || !canvasTransform) {
            return;
          }
          var local = rootTransform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          var halfWidth = canvasTransform.contentSize.width * 0.5;
          var halfHeight = canvasTransform.contentSize.height * 0.5;
          var tooltipHalfWidth = 230;
          var tooltipHalfHeight = 160;
          var horizontalOffset = local.x >= 0 ? -260 : 260;
          var x = Math.max(-halfWidth + tooltipHalfWidth, Math.min(halfWidth - tooltipHalfWidth, local.x + horizontalOffset));
          var y = Math.max(-halfHeight + tooltipHalfHeight, Math.min(halfHeight - tooltipHalfHeight, local.y + 160));
          this.itemTooltipNode.setPosition(x, y, 0);
        };
        _proto.setBackpackVisible = function setBackpackVisible(visible) {
          var _this$closeButton, _this$stackButton, _this$swapButton, _this$craftButton, _this$previousButton2, _this$nextButton2, _this$sortButton2, _this$backpackButton, _buttonGroup$getCompo;
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
          ((_this$closeButton = this.closeButton) == null ? void 0 : _this$closeButton.node) && (this.closeButton.node.active = visible);
          ((_this$stackButton = this.stackButton) == null ? void 0 : _this$stackButton.node) && (this.stackButton.node.active = visible);
          ((_this$swapButton = this.swapButton) == null ? void 0 : _this$swapButton.node) && (this.swapButton.node.active = visible);
          ((_this$craftButton = this.craftButton) == null ? void 0 : _this$craftButton.node) && (this.craftButton.node.active = visible);
          ((_this$previousButton2 = this.previousButton) == null ? void 0 : _this$previousButton2.node) && (this.previousButton.node.active = visible);
          ((_this$nextButton2 = this.nextButton) == null ? void 0 : _this$nextButton2.node) && (this.nextButton.node.active = visible);
          ((_this$sortButton2 = this.sortButton) == null ? void 0 : _this$sortButton2.node) && (this.sortButton.node.active = visible);
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
          var buttonGroup = (_this$backpackButton = this.backpackButton) == null ? void 0 : _this$backpackButton.node.parent;
          buttonGroup == null || (_buttonGroup$getCompo = buttonGroup.getComponent(Layout)) == null || _buttonGroup$getCompo.updateLayout(true);
          if (visible) {
            this.renderCurrentPage();
          } else {
            this.saveInventory();
          }
        };
        _proto.cancelActiveInteraction = function cancelActiveInteraction() {
          if (this.dragging) {
            if (this.dragSourcePage >= 0) {
              this.currentPage = this.dragSourcePage;
            }
            this.endDragVisual();
            this.resetTouchState();
          }
          this.cancelSwapMode();
          this.setSelectedIndex(-1);
        };
        _proto.createDemoInventory = function createDemoInventory() {
          var _this19 = this;
          var entries = [];
          var appendConfiguredStacks = function appendConfiguredStacks(config, configuredCount) {
            var remaining = Math.max(0, Math.floor(configuredCount));
            var maxStack = _this19.getItemMaxStack(config.id);
            while (remaining > 0) {
              var count = Math.min(maxStack, remaining);
              entries.push({
                itemId: config.id,
                count: count
              });
              remaining -= count;
            }
          };
          this.itemCatalog.getAll().forEach(function (config) {
            if (!config.icon) {
              return;
            }
            appendConfiguredStacks(config, config.initialCount);
            appendConfiguredStacks(config, config.initialExtraStackCount);
          });
          var capacity = Math.max(this.pageSize, Math.ceil(entries.length / this.pageSize) * this.pageSize);
          this.inventory = [].concat(entries, new Array(capacity - entries.length).fill(null));
        };
        _proto.saveInventory = function saveInventory() {
          if (this.inventory.length === 0) {
            return;
          }
          var data = {
            version: this.saveVersion,
            currentPage: this.currentPage,
            inventory: this.inventory.map(function (entry) {
              if (!entry) {
                return null;
              }
              return {
                itemId: entry.itemId,
                count: entry.count
              };
            })
          };
          try {
            sys.localStorage.setItem(this.saveKey, JSON.stringify(data));
          } catch (error) {
            console.warn('背包存档写入失败', error);
          }
        };
        _proto.loadInventory = function loadInventory() {
          var _this20 = this;
          var raw = '';
          try {
            var _sys$localStorage$get;
            raw = (_sys$localStorage$get = sys.localStorage.getItem(this.saveKey)) != null ? _sys$localStorage$get : '';
          } catch (error) {
            console.warn('背包存档读取失败', error);
            return false;
          }
          if (!raw) {
            return false;
          }
          try {
            var data = JSON.parse(raw);
            if (data.version !== this.saveVersion || !Array.isArray(data.inventory)) {
              return false;
            }
            var capacity = Math.max(this.pageSize, data.inventory.length);
            this.inventory = new Array(capacity).fill(null);
            var overflowEntries = [];
            data.inventory.forEach(function (savedEntry, index) {
              if (!savedEntry || index >= capacity) {
                return;
              }
              var itemId = Math.floor(savedEntry.itemId);
              var config = _this20.getItemConfig(itemId);
              if (!(config != null && config.icon) || savedEntry.count <= 0) {
                return;
              }
              var savedCount = Math.max(1, Math.floor(savedEntry.count));
              var maxStack = _this20.getItemMaxStack(itemId);
              _this20.inventory[index] = {
                itemId: itemId,
                count: Math.min(maxStack, savedCount)
              };
              var overflow = savedCount - maxStack;
              while (overflow > 0) {
                var count = Math.min(maxStack, overflow);
                overflowEntries.push({
                  itemId: itemId,
                  count: count
                });
                overflow -= count;
              }
            });
            overflowEntries.forEach(function (entry) {
              var emptyIndex = _this20.inventory.findIndex(function (candidate) {
                return candidate === null;
              });
              if (emptyIndex < 0) {
                var _this20$inventory;
                emptyIndex = _this20.inventory.length;
                (_this20$inventory = _this20.inventory).push.apply(_this20$inventory, new Array(_this20.pageSize).fill(null));
              }
              _this20.inventory[emptyIndex] = entry;
            });
            var pageCount = this.getPageCount();
            this.currentPage = Math.min(pageCount - 1, Math.max(0, Math.floor(data.currentPage)));
            console.log('背包存档读取成功');
            return true;
          } catch (error) {
            console.warn('背包存档格式无效，将使用初始数据', error);
            try {
              sys.localStorage.removeItem(this.saveKey);
            } catch (_unused) {
              // Ignore storage cleanup errors and continue with demo data.
            }
            return false;
          }
        };
        _proto.renderCurrentPage = function renderCurrentPage() {
          var _this21 = this,
            _this$slotGrid;
          this.rebuildInventoryView();
          this.hideItemTooltip();
          this.hideContextMenu();
          this.setSelectedIndex(-1);
          this.slots.forEach(function (slot, localIndex) {
            var _this21$rarityFrames$;
            var inventoryIndex = _this21.getInventoryIndex(localIndex);
            var ownedSlot = inventoryIndex >= 0;
            slot.node.active = ownedSlot;
            if (!ownedSlot) {
              slot.clear();
              return;
            }
            var entry = _this21.getEntryAtLocalIndex(localIndex);
            if (!entry) {
              slot.clear();
              return;
            }
            var config = _this21.getItemConfig(entry.itemId);
            if (!(config != null && config.icon)) {
              slot.clear();
              return;
            }
            var rarity = (_this21$rarityFrames$ = _this21.rarityFrames[_this21.getItemRarityIndex(entry.itemId)]) != null ? _this21$rarityFrames$ : null;
            slot.showItem(config.icon, entry.count, rarity);
          });
          (_this$slotGrid = this.slotGrid) == null || (_this$slotGrid = _this$slotGrid.getComponent(Layout)) == null || _this$slotGrid.updateLayout(true);
          if (this.dragging && this.currentPage === this.dragSourcePage) {
            var _this$slots$this$drag3;
            (_this$slots$this$drag3 = this.slots[this.dragSourceLocalIndex]) == null || _this$slots$this$drag3.setContentVisible(false);
          }
          this.updateActionButtons();
          this.updatePageIndicator();
          this.updateCapacityDisplay();
          console.log("\u80CC\u5305\u9875\uFF1A" + (this.currentPage + 1) + "/" + this.getPageCount());
        };
        _proto.rebuildInventoryView = function rebuildInventoryView() {
          var _this22 = this;
          var hasActiveFilter = this.isInventoryFilterActive();
          if (!hasActiveFilter) {
            this.viewInventoryIndices = this.inventory.map(function (_entry, index) {
              return index;
            });
            this.filteredItemCount = this.inventory.reduce(function (total, entry) {
              return total + (entry ? 1 : 0);
            }, 0);
          } else {
            var matchingIndices = [];
            var emptyIndices = [];
            this.inventory.forEach(function (entry, index) {
              if (!entry) {
                emptyIndices.push(index);
                return;
              }
              var config = _this22.getItemConfig(entry.itemId);
              if (!config) {
                return;
              }
              var category = _this22.itemCatalog.getCategory(entry.itemId);
              var matchesCategory = _this22.activeCategory === '全部' || category === _this22.activeCategory;
              var matchesRarity = _this22.activeRarityIndex === null || _this22.getItemRarityIndex(entry.itemId) === _this22.activeRarityIndex;
              var matchesName = _this22.searchQuery.length === 0 || config.itemName.toLocaleLowerCase().includes(_this22.searchQuery);
              if (matchesCategory && matchesRarity && matchesName) {
                matchingIndices.push(index);
              }
            });
            this.filteredItemCount = matchingIndices.length;
            var displayLength = Math.max(this.pageSize, Math.ceil(matchingIndices.length / this.pageSize) * this.pageSize);
            var paddingCount = displayLength - matchingIndices.length;
            this.viewInventoryIndices = [].concat(matchingIndices, emptyIndices.slice(0, paddingCount));
            while (this.viewInventoryIndices.length < displayLength) {
              this.viewInventoryIndices.push(-1);
            }
          }
          var pageCount = this.getPageCount();
          this.currentPage = Math.max(0, Math.min(this.currentPage, pageCount - 1));
          if (this.filterStatusLabel) {
            this.filterStatusLabel.string = "\u68C0\u7D22\u7ED3\u679C\uFF1A" + this.filteredItemCount + " \u683C";
          }
        };
        _proto.getInventoryIndex = function getInventoryIndex(localIndex) {
          var _this$viewInventoryIn;
          var viewIndex = this.currentPage * this.pageSize + localIndex;
          return (_this$viewInventoryIn = this.viewInventoryIndices[viewIndex]) != null ? _this$viewInventoryIn : -1;
        };
        _proto.getEntryAtLocalIndex = function getEntryAtLocalIndex(localIndex) {
          var _this$inventory$this$;
          return (_this$inventory$this$ = this.inventory[this.getInventoryIndex(localIndex)]) != null ? _this$inventory$this$ : null;
        };
        _proto.getPageCount = function getPageCount() {
          var visibleLength = this.viewInventoryIndices.length > 0 ? this.viewInventoryIndices.length : this.inventory.length;
          return Math.max(1, Math.ceil(visibleLength / this.pageSize));
        };
        _proto.isInventoryFilterActive = function isInventoryFilterActive() {
          return this.activeCategory !== '全部' || this.activeRarityIndex !== null || this.searchQuery.length > 0;
        };
        _proto.resolveTargetInventoryIndex = function resolveTargetInventoryIndex(localIndex) {
          var mappedIndex = this.getInventoryIndex(localIndex);
          if (this.isInventoryFilterActive() && (mappedIndex < 0 || !this.inventory[mappedIndex])) {
            return -1;
          }
          if (mappedIndex >= 0) {
            return mappedIndex;
          }
          return this.inventory.findIndex(function (entry) {
            return entry === null;
          });
        };
        _proto.finishSwap = function finishSwap(targetLocalIndex) {
          var sourceIndex = this.swapSourceInventoryIndex;
          var targetIndex = this.resolveTargetInventoryIndex(targetLocalIndex);
          if (sourceIndex >= 0 && targetIndex >= 0 && sourceIndex !== targetIndex) {
            var sourceEntry = this.inventory[sourceIndex];
            this.inventory[sourceIndex] = this.inventory[targetIndex];
            this.inventory[targetIndex] = sourceEntry;
            this.playUiSound(this.itemSwapSound);
            console.log("\u5907\u7528\u4EA4\u6362\uFF1A" + sourceIndex + " <-> " + targetIndex);
          }
          this.cancelSwapMode();
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.cancelSwapMode = function cancelSwapMode() {
          this.swapMode = false;
          this.swapSourceInventoryIndex = -1;
        };
        _proto.stackSelectedItem = function stackSelectedItem() {
          if (this.selectedLocalIndex < 0) {
            return;
          }
          var targetIndex = this.getInventoryIndex(this.selectedLocalIndex);
          var target = this.inventory[targetIndex];
          if (!target) {
            return;
          }
          var maxStack = this.getItemMaxStack(target.itemId);
          var moved = 0;
          for (var index = 0; index < this.inventory.length; index++) {
            if (index === targetIndex) {
              continue;
            }
            var source = this.inventory[index];
            if (!source || source.itemId !== target.itemId) {
              continue;
            }
            var available = maxStack - target.count;
            if (available <= 0) {
              break;
            }
            var transfer = Math.min(available, source.count);
            target.count += transfer;
            source.count -= transfer;
            moved += transfer;
            if (source.count <= 0) {
              this.inventory[index] = null;
            }
          }
          console.log(moved > 0 ? "\u5DF2\u5806\u53E0 " + moved + " \u4E2A\u7269\u54C1\u5230\u683C\u5B50 " + targetIndex : '没有可以合并的同类物品');
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.canCraftSelectedItem = function canCraftSelectedItem() {
          var _this23 = this;
          if (this.selectedLocalIndex < 0) {
            return false;
          }
          var target = this.getEntryAtLocalIndex(this.selectedLocalIndex);
          if (!target) {
            return false;
          }
          var recipe = this.getCraftRecipe(target.itemId);
          if (!recipe || target.count + recipe.craftOutputCount > this.getItemMaxStack(target.itemId)) {
            return false;
          }
          return recipe.craftingIngredients.every(function (ingredient) {
            return _this23.getTotalItemCount(ingredient.itemId) >= ingredient.count;
          });
        };
        _proto.craftSelectedItem = function craftSelectedItem() {
          var _this24 = this;
          if (!this.canCraftSelectedItem()) {
            console.log('当前物品不可合成或材料不足');
            return;
          }
          var targetIndex = this.getInventoryIndex(this.selectedLocalIndex);
          var target = this.inventory[targetIndex];
          if (!target) {
            return;
          }
          var recipe = this.getCraftRecipe(target.itemId);
          if (!recipe) {
            return;
          }
          recipe.craftingIngredients.forEach(function (ingredient) {
            if (ingredient.consume) {
              _this24.consumeItem(ingredient.itemId, ingredient.count);
            }
          });
          target.count += recipe.craftOutputCount;
          console.log("\u5408\u6210\u6210\u529F\uFF1A" + recipe.itemName + " +" + recipe.craftOutputCount);
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.getCraftRecipe = function getCraftRecipe(itemId) {
          var config = this.getItemConfig(itemId);
          return config && config.craftingIngredients.length > 0 ? config : null;
        };
        _proto.getTotalItemCount = function getTotalItemCount(itemId) {
          return this.inventory.reduce(function (total, entry) {
            return (entry == null ? void 0 : entry.itemId) === itemId ? total + entry.count : total;
          }, 0);
        };
        _proto.consumeItem = function consumeItem(itemId, requestedCount) {
          var remaining = requestedCount;
          for (var index = 0; index < this.inventory.length; index++) {
            var entry = this.inventory[index];
            if (!entry || entry.itemId !== itemId) {
              continue;
            }
            var consumed = Math.min(entry.count, remaining);
            entry.count -= consumed;
            remaining -= consumed;
            if (entry.count <= 0) {
              this.inventory[index] = null;
            }
            if (remaining <= 0) {
              return;
            }
          }
        };
        _proto.bindButtons = function bindButtons() {
          var _this$backpackButton2, _this$closeButton2, _this$stackButton2, _this$swapButton2, _this$craftButton2, _this$previousButton3, _this$nextButton3, _this$sortButton3;
          (_this$backpackButton2 = this.backpackButton) == null || _this$backpackButton2.node.on(Button.EventType.CLICK, this.onBackpackClicked, this);
          (_this$closeButton2 = this.closeButton) == null || _this$closeButton2.node.on(Button.EventType.CLICK, this.onCloseClicked, this);
          (_this$stackButton2 = this.stackButton) == null || _this$stackButton2.node.on(Button.EventType.CLICK, this.onStackClicked, this);
          (_this$swapButton2 = this.swapButton) == null || _this$swapButton2.node.on(Button.EventType.CLICK, this.onSwapClicked, this);
          (_this$craftButton2 = this.craftButton) == null || _this$craftButton2.node.on(Button.EventType.CLICK, this.onCraftClicked, this);
          (_this$previousButton3 = this.previousButton) == null || _this$previousButton3.node.on(Button.EventType.CLICK, this.onPreviousClicked, this);
          (_this$nextButton3 = this.nextButton) == null || _this$nextButton3.node.on(Button.EventType.CLICK, this.onNextClicked, this);
          (_this$sortButton3 = this.sortButton) == null || _this$sortButton3.node.on(Button.EventType.CLICK, this.onSortClicked, this);
        };
        _proto.unbindButtons = function unbindButtons() {
          var _this$backpackButton3, _this$closeButton3, _this$stackButton3, _this$swapButton3, _this$craftButton3, _this$previousButton4, _this$nextButton4, _this$sortButton4;
          (_this$backpackButton3 = this.backpackButton) == null || _this$backpackButton3.node.off(Button.EventType.CLICK, this.onBackpackClicked, this);
          (_this$closeButton3 = this.closeButton) == null || _this$closeButton3.node.off(Button.EventType.CLICK, this.onCloseClicked, this);
          (_this$stackButton3 = this.stackButton) == null || _this$stackButton3.node.off(Button.EventType.CLICK, this.onStackClicked, this);
          (_this$swapButton3 = this.swapButton) == null || _this$swapButton3.node.off(Button.EventType.CLICK, this.onSwapClicked, this);
          (_this$craftButton3 = this.craftButton) == null || _this$craftButton3.node.off(Button.EventType.CLICK, this.onCraftClicked, this);
          (_this$previousButton4 = this.previousButton) == null || _this$previousButton4.node.off(Button.EventType.CLICK, this.onPreviousClicked, this);
          (_this$nextButton4 = this.nextButton) == null || _this$nextButton4.node.off(Button.EventType.CLICK, this.onNextClicked, this);
          (_this$sortButton4 = this.sortButton) == null || _this$sortButton4.node.off(Button.EventType.CLICK, this.onSortClicked, this);
        };
        _proto.onBackpackClicked = function onBackpackClicked() {
          if (!this.backpackVisible) {
            this.setBackpackVisible(true);
            this.playUiSound(this.backpackOpenSound);
            console.log('打开背包');
          }
        };
        _proto.onCloseClicked = function onCloseClicked() {
          if (!this.backpackVisible) {
            return;
          }
          this.setBackpackVisible(false);
          this.playUiSound(this.backpackCloseSound);
          console.log('关闭背包');
        };
        _proto.onStackClicked = function onStackClicked() {
          this.stackSelectedItem();
        };
        _proto.onSwapClicked = function onSwapClicked() {
          if (this.selectedLocalIndex < 0) {
            return;
          }
          this.swapMode = true;
          this.swapSourceInventoryIndex = this.getInventoryIndex(this.selectedLocalIndex);
          console.log("\u5907\u7528\u4EA4\u6362\u6A21\u5F0F\uFF1A\u8BF7\u9009\u62E9\u683C\u5B50 " + this.swapSourceInventoryIndex + " \u7684\u76EE\u6807\u4F4D\u7F6E");
          this.updateActionButtons();
        };
        _proto.onCraftClicked = function onCraftClicked() {
          this.craftSelectedItem();
        };
        _proto.onPreviousClicked = function onPreviousClicked() {
          var pageCount = this.getPageCount();
          var previousPage = (this.currentPage - 1 + pageCount) % pageCount;
          if (previousPage === this.currentPage) {
            return;
          }
          this.currentPage = previousPage;
          this.playUiSound(this.pageTurnSound);
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.onNextClicked = function onNextClicked() {
          var nextPage = (this.currentPage + 1) % this.getPageCount();
          if (nextPage === this.currentPage) {
            return;
          }
          this.currentPage = nextPage;
          this.playUiSound(this.pageTurnSound);
          this.renderCurrentPage();
          this.saveInventory();
        };
        _proto.onSortClicked = function onSortClicked() {
          var _this25 = this;
          var ascending = this.sortAscending;
          var entries = this.inventory.filter(function (entry) {
            return entry !== null;
          });
          entries.sort(function (left, right) {
            var rarityDifference = _this25.getItemRarityIndex(left.itemId) - _this25.getItemRarityIndex(right.itemId);
            if (rarityDifference !== 0) {
              return ascending ? rarityDifference : -rarityDifference;
            }
            var itemDifference = left.itemId - right.itemId;
            if (itemDifference !== 0) {
              return itemDifference;
            }
            return right.count - left.count;
          });
          var emptyCount = this.inventory.length - entries.length;
          this.inventory = [].concat(entries, new Array(emptyCount).fill(null));
          this.cancelActiveInteraction();
          this.currentPage = 0;
          this.sortAscending = !ascending;
          this.updateSortButtonVisual();
          this.renderCurrentPage();
          this.saveInventory();
          this.playUiSound(this.backpackSortSound);
          console.log(ascending ? '背包整理完成：稀有度升序' : '背包整理完成：稀有度降序');
        };
        _proto.playUiSound = function playUiSound(clip) {
          var _this$uiAudioSource, _this$getComponent2;
          if (!clip) {
            return;
          }
          var volume = Math.max(0, Math.min(1, this.soundVolume));
          if (volume <= 0) {
            return;
          }
          (_this$uiAudioSource = this.uiAudioSource) != null ? _this$uiAudioSource : this.uiAudioSource = (_this$getComponent2 = this.getComponent(AudioSource)) != null ? _this$getComponent2 : this.node.addComponent(AudioSource);
          this.uiAudioSource.playOneShot(clip, volume);
        };
        return BackpackController;
      }(Component), _class21.WORLD_SCENARIO_DEFAULTS = new WorldItemScenarioConfig(), _class21), (_descriptor74 = _applyDecoratedDescriptor(_class20.prototype, "slotGrid", [_dec81], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor75 = _applyDecoratedDescriptor(_class20.prototype, "backpackButton", [_dec82], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor76 = _applyDecoratedDescriptor(_class20.prototype, "closeButton", [_dec83], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor77 = _applyDecoratedDescriptor(_class20.prototype, "backgroundDimmer", [_dec84], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor78 = _applyDecoratedDescriptor(_class20.prototype, "stackButton", [_dec85], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor79 = _applyDecoratedDescriptor(_class20.prototype, "swapButton", [_dec86], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor80 = _applyDecoratedDescriptor(_class20.prototype, "craftButton", [_dec87], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor81 = _applyDecoratedDescriptor(_class20.prototype, "previousButton", [_dec88], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor82 = _applyDecoratedDescriptor(_class20.prototype, "nextButton", [_dec89], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor83 = _applyDecoratedDescriptor(_class20.prototype, "buttonTextConfig", [_dec90], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new BackpackButtonTextInspectorConfig();
        }
      }), _descriptor84 = _applyDecoratedDescriptor(_class20.prototype, "itemTooltipTextConfig", [_dec91], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new ItemTooltipTextInspectorConfig();
        }
      }), _descriptor85 = _applyDecoratedDescriptor(_class20.prototype, "pageTurnSound", [_dec92], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor86 = _applyDecoratedDescriptor(_class20.prototype, "backpackSwitchSound", [_dec93], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor87 = _applyDecoratedDescriptor(_class20.prototype, "itemClickSound", [_dec94], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor88 = _applyDecoratedDescriptor(_class20.prototype, "itemSwapSound", [_dec95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor89 = _applyDecoratedDescriptor(_class20.prototype, "backpackCloseSound", [_dec96], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor90 = _applyDecoratedDescriptor(_class20.prototype, "backpackOpenSound", [_dec97], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor91 = _applyDecoratedDescriptor(_class20.prototype, "backpackSortSound", [_dec98], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor92 = _applyDecoratedDescriptor(_class20.prototype, "soundVolume", [_dec99], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.85;
        }
      }), _descriptor93 = _applyDecoratedDescriptor(_class20.prototype, "rarityFrames", [_dec100], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor94 = _applyDecoratedDescriptor(_class20.prototype, "weaponItems", [_dec101], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor95 = _applyDecoratedDescriptor(_class20.prototype, "armorItems", [_dec102], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor96 = _applyDecoratedDescriptor(_class20.prototype, "consumableItems", [_dec103], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor97 = _applyDecoratedDescriptor(_class20.prototype, "materialItems", [_dec104], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor98 = _applyDecoratedDescriptor(_class20.prototype, "questItems", [_dec105], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor99 = _applyDecoratedDescriptor(_class20.prototype, "otherItems", [_dec106], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor100 = _applyDecoratedDescriptor(_class20.prototype, "dragFeel", [_dec107], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new DragFeelInspectorConfig();
        }
      }), _descriptor101 = _applyDecoratedDescriptor(_class20.prototype, "worldScenario", [_dec108], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new WorldItemScenarioConfig();
        }
      })), _class20)) || _class19));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemCatalog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Enum, SpriteFrame;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class7, _class8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class10, _class11, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _dec38, _dec39, _dec40, _dec41, _dec42, _class13, _class14, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class16, _class17, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _dec49, _dec50, _dec51, _dec52, _class19, _class20, _descriptor43, _descriptor44, _descriptor45, _dec53, _dec54, _dec55, _dec56, _class22, _class23, _descriptor46, _descriptor47, _descriptor48, _dec57, _dec58, _dec59, _dec60, _class25, _class26, _descriptor49, _descriptor50, _descriptor51, _dec61, _dec62, _dec63, _dec64, _dec65, _class28, _class29, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _dec66, _dec67, _dec68, _dec69, _class31, _class32, _descriptor56, _descriptor57, _descriptor58;
      cclegacy._RF.push({}, "c5e69TZwDZNVZL3JHhBmFwY", "ItemCatalog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var INVENTORY_CATEGORIES = exports('INVENTORY_CATEGORIES', ['全部', '武器', '防具', '消耗品', '材料', '任务', '其他']);
      var RARITY_NAMES = exports('RARITY_NAMES', ['普通', '优秀', '稀有', '史诗', '传说', '特殊']);
      var ItemRarity = exports('ItemRarity', /*#__PURE__*/function (ItemRarity) {
        ItemRarity[ItemRarity["\u666E\u901A"] = 0] = "\u666E\u901A";
        ItemRarity[ItemRarity["\u4F18\u79C0"] = 1] = "\u4F18\u79C0";
        ItemRarity[ItemRarity["\u7A00\u6709"] = 2] = "\u7A00\u6709";
        ItemRarity[ItemRarity["\u53F2\u8BD7"] = 3] = "\u53F2\u8BD7";
        ItemRarity[ItemRarity["\u4F20\u8BF4"] = 4] = "\u4F20\u8BF4";
        ItemRarity[ItemRarity["\u7279\u6B8A"] = 5] = "\u7279\u6B8A";
        return ItemRarity;
      }({}));
      var CraftIngredientConfig = exports('CraftIngredientConfig', (_dec = ccclass('CraftIngredientConfig'), _dec2 = property({
        displayName: '材料物品 ID',
        tooltip: '所需材料的物品 ID，可使用不连续 ID。'
      }), _dec3 = property({
        displayName: '需要数量',
        min: 1,
        tooltip: '单次合成需要消耗的数量。'
      }), _dec4 = property({
        displayName: '是否消耗',
        tooltip: '关闭后，该材料只作为合成条件，不会被扣除。'
      }), _dec(_class = (_class2 = function CraftIngredientConfig() {
        _initializerDefineProperty(this, "itemId", _descriptor, this);
        _initializerDefineProperty(this, "count", _descriptor2, this);
        _initializerDefineProperty(this, "consume", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "consume", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      var ItemExtraAttributeConfig = exports('ItemExtraAttributeConfig', (_dec5 = ccclass('ItemExtraAttributeConfig'), _dec6 = property({
        displayName: '属性键',
        tooltip: '供游戏逻辑识别的稳定键名，例如 criticalRate。'
      }), _dec7 = property({
        displayName: '显示名称',
        tooltip: '展示给玩家的属性名称。'
      }), _dec8 = property({
        displayName: '数值',
        tooltip: '用于计算的数值；不需要数值时可保持为 0。'
      }), _dec9 = property({
        displayName: '文本值',
        tooltip: '用于无法用单一数字表达的属性。'
      }), _dec10 = property({
        displayName: '百分比显示',
        tooltip: '开启后，界面可将数值按百分比展示。'
      }), _dec5(_class4 = (_class5 = function ItemExtraAttributeConfig() {
        _initializerDefineProperty(this, "key", _descriptor4, this);
        _initializerDefineProperty(this, "displayName", _descriptor5, this);
        _initializerDefineProperty(this, "value", _descriptor6, this);
        _initializerDefineProperty(this, "textValue", _descriptor7, this);
        _initializerDefineProperty(this, "isPercentage", _descriptor8, this);
      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "key", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "displayName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "value", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "textValue", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "isPercentage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class5)) || _class4));
      var ItemEffectConfig = exports('ItemEffectConfig', (_dec11 = ccclass('ItemEffectConfig'), _dec12 = property({
        displayName: '效果类型',
        tooltip: '供效果系统识别的类型键，例如 restoreHealth。'
      }), _dec13 = property({
        displayName: '作用目标',
        tooltip: '效果目标，例如 self、target 或 area。'
      }), _dec14 = property({
        displayName: '效果数值',
        tooltip: '效果的基础数值。'
      }), _dec15 = property({
        displayName: '持续时间（秒）',
        min: 0,
        tooltip: '0 表示立即生效。'
      }), _dec16 = property({
        displayName: '触发概率',
        range: [0, 1, 0.01],
        slide: true,
        tooltip: '0 到 1，1 表示必定触发。'
      }), _dec17 = property({
        displayName: '可叠加',
        tooltip: '相同效果是否允许叠加。'
      }), _dec11(_class7 = (_class8 = function ItemEffectConfig() {
        _initializerDefineProperty(this, "effectType", _descriptor9, this);
        _initializerDefineProperty(this, "target", _descriptor10, this);
        _initializerDefineProperty(this, "value", _descriptor11, this);
        _initializerDefineProperty(this, "duration", _descriptor12, this);
        _initializerDefineProperty(this, "probability", _descriptor13, this);
        _initializerDefineProperty(this, "stackable", _descriptor14, this);
      }, (_descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "effectType", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "target", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'self';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "value", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class8.prototype, "duration", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class8.prototype, "probability", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class8.prototype, "stackable", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class8)) || _class7));
      var ItemConfigBase = exports('ItemConfigBase', (_dec18 = ccclass('ItemConfigBase'), _dec19 = property({
        displayName: '物品 ID',
        tooltip: '全表唯一的非负整数，可跳号但不可重复。'
      }), _dec20 = property({
        displayName: '物品名称',
        tooltip: '展示给玩家的名称。'
      }), _dec21 = property({
        type: Enum(ItemRarity),
        displayName: '稀有度',
        tooltip: '影响稀有度外框、筛选和排序。'
      }), _dec22 = property({
        type: SpriteFrame,
        displayName: '物品图标',
        tooltip: '背包和详情界面使用的图标。'
      }), _dec23 = property({
        displayName: '物品类型',
        tooltip: '分类内的细分类型，例如长剑、头盔、药剂。'
      }), _dec24 = property({
        displayName: '物品描述',
        multiline: true,
        tooltip: '物品背景或功能说明。'
      }), _dec25 = property({
        displayName: '用途说明',
        multiline: true,
        tooltip: '物品的使用、装备或合成说明。'
      }), _dec26 = property({
        displayName: '最大堆叠数',
        min: 1,
        tooltip: '单个格子允许堆叠的最大数量。'
      }), _dec27 = property({
        displayName: '单件重量',
        min: 0,
        tooltip: '单个物品占用的重量。'
      }), _dec28 = property({
        displayName: '可使用',
        tooltip: '该物品是否能触发使用行为。'
      }), _dec29 = property({
        displayName: '使用后消耗',
        tooltip: '成功使用后是否扣除一个物品。'
      }), _dec30 = property({
        displayName: '可丢弃',
        tooltip: '是否允许玩家从背包丢弃。'
      }), _dec31 = property({
        displayName: '可交易',
        tooltip: '是否允许出售、交换或转移。'
      }), _dec32 = property({
        displayName: '初始数量',
        min: 0,
        tooltip: '新存档首次创建时放入背包的数量。'
      }), _dec33 = property({
        displayName: '初始额外堆叠数',
        min: 0,
        tooltip: '需要额外测试堆叠或跨格分配时追加的初始数量。'
      }), _dec34 = property({
        displayName: '单次合成产出',
        min: 1,
        tooltip: '完成一次配方后获得的物品数量。'
      }), _dec35 = property({
        type: [CraftIngredientConfig],
        displayName: '合成材料',
        tooltip: '留空表示该物品没有合成配方。'
      }), _dec36 = property({
        type: [ItemExtraAttributeConfig],
        displayName: '额外属性',
        tooltip: '配置该物品独有、但不值得新增字段的属性。'
      }), _dec37 = property({
        type: [ItemEffectConfig],
        displayName: '物品效果',
        tooltip: '配置使用、装备或持有时触发的效果。'
      }), _dec18(_class10 = (_class11 = function ItemConfigBase() {
        _initializerDefineProperty(this, "id", _descriptor15, this);
        _initializerDefineProperty(this, "itemName", _descriptor16, this);
        _initializerDefineProperty(this, "rarity", _descriptor17, this);
        _initializerDefineProperty(this, "icon", _descriptor18, this);
        _initializerDefineProperty(this, "itemType", _descriptor19, this);
        _initializerDefineProperty(this, "description", _descriptor20, this);
        _initializerDefineProperty(this, "usage", _descriptor21, this);
        _initializerDefineProperty(this, "maxStack", _descriptor22, this);
        _initializerDefineProperty(this, "weight", _descriptor23, this);
        _initializerDefineProperty(this, "canUse", _descriptor24, this);
        _initializerDefineProperty(this, "consumeOnUse", _descriptor25, this);
        _initializerDefineProperty(this, "canDiscard", _descriptor26, this);
        _initializerDefineProperty(this, "canTrade", _descriptor27, this);
        _initializerDefineProperty(this, "initialCount", _descriptor28, this);
        _initializerDefineProperty(this, "initialExtraStackCount", _descriptor29, this);
        _initializerDefineProperty(this, "craftOutputCount", _descriptor30, this);
        _initializerDefineProperty(this, "craftingIngredients", _descriptor31, this);
        _initializerDefineProperty(this, "extraAttributes", _descriptor32, this);
        _initializerDefineProperty(this, "effects", _descriptor33, this);
      }, (_descriptor15 = _applyDecoratedDescriptor(_class11.prototype, "id", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class11.prototype, "itemName", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class11.prototype, "rarity", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ItemRarity.普通;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class11.prototype, "icon", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class11.prototype, "itemType", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class11.prototype, "description", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class11.prototype, "usage", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class11.prototype, "maxStack", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class11.prototype, "weight", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class11.prototype, "canUse", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class11.prototype, "consumeOnUse", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class11.prototype, "canDiscard", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class11.prototype, "canTrade", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class11.prototype, "initialCount", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class11.prototype, "initialExtraStackCount", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class11.prototype, "craftOutputCount", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class11.prototype, "craftingIngredients", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class11.prototype, "extraAttributes", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class11.prototype, "effects", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class11)) || _class10));
      var EquipmentItemConfigBase = exports('EquipmentItemConfigBase', (_dec38 = ccclass('EquipmentItemConfigBase'), _dec39 = property({
        displayName: '装备槽位',
        tooltip: '装备系统使用的槽位键，例如 mainHand、head。'
      }), _dec40 = property({
        displayName: '需求等级',
        min: 0,
        tooltip: '0 表示没有等级要求。'
      }), _dec41 = property({
        displayName: '最大耐久度',
        min: 0,
        tooltip: '0 表示不启用耐久度。'
      }), _dec42 = property({
        displayName: '装备后绑定',
        tooltip: '装备后是否禁止交易或转移。'
      }), _dec38(_class13 = (_class14 = /*#__PURE__*/function (_ItemConfigBase) {
        _inheritsLoose(EquipmentItemConfigBase, _ItemConfigBase);
        function EquipmentItemConfigBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ItemConfigBase.call.apply(_ItemConfigBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "equipmentSlot", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "requiredLevel", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDurability", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bindOnEquip", _descriptor37, _assertThisInitialized(_this));
          return _this;
        }
        return EquipmentItemConfigBase;
      }(ItemConfigBase), (_descriptor34 = _applyDecoratedDescriptor(_class14.prototype, "equipmentSlot", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class14.prototype, "requiredLevel", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class14.prototype, "maxDurability", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class14.prototype, "bindOnEquip", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class14)) || _class13));
      var WeaponItemConfig = exports('WeaponItemConfig', (_dec43 = ccclass('WeaponItemConfig'), _dec44 = property({
        displayName: '攻击力',
        tooltip: '武器提供的基础攻击力。'
      }), _dec45 = property({
        displayName: '攻击速度',
        min: 0,
        tooltip: '武器的基础攻击速度系数。'
      }), _dec46 = property({
        displayName: '攻击距离',
        min: 0,
        tooltip: '武器的有效攻击距离。'
      }), _dec47 = property({
        displayName: '暴击率',
        range: [0, 1, 0.01],
        slide: true,
        tooltip: '0 到 1 的基础暴击概率。'
      }), _dec48 = property({
        displayName: '弹药物品 ID',
        tooltip: '-1 表示该武器不需要弹药。'
      }), _dec43(_class16 = (_class17 = /*#__PURE__*/function (_EquipmentItemConfigB) {
        _inheritsLoose(WeaponItemConfig, _EquipmentItemConfigB);
        function WeaponItemConfig() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _EquipmentItemConfigB.call.apply(_EquipmentItemConfigB, [this].concat(args)) || this;
          _initializerDefineProperty(_this2, "attackPower", _descriptor38, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "attackSpeed", _descriptor39, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "attackRange", _descriptor40, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "criticalRate", _descriptor41, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "ammoItemId", _descriptor42, _assertThisInitialized(_this2));
          return _this2;
        }
        return WeaponItemConfig;
      }(EquipmentItemConfigBase), (_descriptor38 = _applyDecoratedDescriptor(_class17.prototype, "attackPower", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class17.prototype, "attackSpeed", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class17.prototype, "attackRange", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class17.prototype, "criticalRate", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class17.prototype, "ammoItemId", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      })), _class17)) || _class16));
      var ArmorItemConfig = exports('ArmorItemConfig', (_dec49 = ccclass('ArmorItemConfig'), _dec50 = property({
        displayName: '防御力',
        tooltip: '防具提供的基础物理防御。'
      }), _dec51 = property({
        displayName: '魔法抗性',
        tooltip: '防具提供的基础魔法抗性。'
      }), _dec52 = property({
        displayName: '移动速度修正',
        tooltip: '对移动速度的加减值，负数表示减速。'
      }), _dec49(_class19 = (_class20 = /*#__PURE__*/function (_EquipmentItemConfigB2) {
        _inheritsLoose(ArmorItemConfig, _EquipmentItemConfigB2);
        function ArmorItemConfig() {
          var _this3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this3 = _EquipmentItemConfigB2.call.apply(_EquipmentItemConfigB2, [this].concat(args)) || this;
          _initializerDefineProperty(_this3, "defense", _descriptor43, _assertThisInitialized(_this3));
          _initializerDefineProperty(_this3, "magicResistance", _descriptor44, _assertThisInitialized(_this3));
          _initializerDefineProperty(_this3, "movementSpeedModifier", _descriptor45, _assertThisInitialized(_this3));
          return _this3;
        }
        return ArmorItemConfig;
      }(EquipmentItemConfigBase), (_descriptor43 = _applyDecoratedDescriptor(_class20.prototype, "defense", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class20.prototype, "magicResistance", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class20.prototype, "movementSpeedModifier", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class20)) || _class19));
      var ConsumableItemConfig = exports('ConsumableItemConfig', (_dec53 = ccclass('ConsumableItemConfig'), _dec54 = property({
        displayName: '冷却时间（秒）',
        min: 0,
        tooltip: '两次使用之间的最短间隔。'
      }), _dec55 = property({
        displayName: '使用耗时（秒）',
        min: 0,
        tooltip: '0 表示立即使用。'
      }), _dec56 = property({
        displayName: '单件可用次数',
        min: 1,
        tooltip: '单个物品可触发效果的次数。'
      }), _dec53(_class22 = (_class23 = /*#__PURE__*/function (_ItemConfigBase2) {
        _inheritsLoose(ConsumableItemConfig, _ItemConfigBase2);
        function ConsumableItemConfig() {
          var _this4;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          _this4 = _ItemConfigBase2.call.apply(_ItemConfigBase2, [this].concat(args)) || this;
          _initializerDefineProperty(_this4, "cooldown", _descriptor46, _assertThisInitialized(_this4));
          _initializerDefineProperty(_this4, "useDuration", _descriptor47, _assertThisInitialized(_this4));
          _initializerDefineProperty(_this4, "charges", _descriptor48, _assertThisInitialized(_this4));
          return _this4;
        }
        return ConsumableItemConfig;
      }(ItemConfigBase), (_descriptor46 = _applyDecoratedDescriptor(_class23.prototype, "cooldown", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class23.prototype, "useDuration", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class23.prototype, "charges", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class23)) || _class22));
      var MaterialItemConfig = exports('MaterialItemConfig', (_dec57 = ccclass('MaterialItemConfig'), _dec58 = property({
        displayName: '材料等级',
        min: 0,
        tooltip: '用于配方或强化条件判断。'
      }), _dec59 = property({
        displayName: '材料品质',
        tooltip: '材料体系内部使用的品质标识。'
      }), _dec60 = property({
        displayName: '作为货币',
        tooltip: '是否允许货币系统直接消费该材料。'
      }), _dec57(_class25 = (_class26 = /*#__PURE__*/function (_ItemConfigBase3) {
        _inheritsLoose(MaterialItemConfig, _ItemConfigBase3);
        function MaterialItemConfig() {
          var _this5;
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          _this5 = _ItemConfigBase3.call.apply(_ItemConfigBase3, [this].concat(args)) || this;
          _initializerDefineProperty(_this5, "materialLevel", _descriptor49, _assertThisInitialized(_this5));
          _initializerDefineProperty(_this5, "materialQuality", _descriptor50, _assertThisInitialized(_this5));
          _initializerDefineProperty(_this5, "isCurrency", _descriptor51, _assertThisInitialized(_this5));
          return _this5;
        }
        return MaterialItemConfig;
      }(ItemConfigBase), (_descriptor49 = _applyDecoratedDescriptor(_class26.prototype, "materialLevel", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class26.prototype, "materialQuality", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class26.prototype, "isCurrency", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class26)) || _class25));
      var QuestItemConfig = exports('QuestItemConfig', (_dec61 = ccclass('QuestItemConfig'), _dec62 = property({
        displayName: '关联任务 ID',
        tooltip: '关联的任务标识，留空表示由其他逻辑决定。'
      }), _dec63 = property({
        displayName: '任务阶段',
        min: 0,
        tooltip: '该物品对应的任务阶段。'
      }), _dec64 = property({
        displayName: '关键任务物品',
        tooltip: '关键物品通常不可丢弃、不可交易。'
      }), _dec65 = property({
        displayName: '完成后移除',
        tooltip: '关联任务完成时是否自动从背包移除。'
      }), _dec61(_class28 = (_class29 = /*#__PURE__*/function (_ItemConfigBase4) {
        _inheritsLoose(QuestItemConfig, _ItemConfigBase4);
        function QuestItemConfig() {
          var _this6;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          _this6 = _ItemConfigBase4.call.apply(_ItemConfigBase4, [this].concat(args)) || this;
          _initializerDefineProperty(_this6, "questId", _descriptor52, _assertThisInitialized(_this6));
          _initializerDefineProperty(_this6, "questStage", _descriptor53, _assertThisInitialized(_this6));
          _initializerDefineProperty(_this6, "isKeyItem", _descriptor54, _assertThisInitialized(_this6));
          _initializerDefineProperty(_this6, "removeOnQuestComplete", _descriptor55, _assertThisInitialized(_this6));
          return _this6;
        }
        return QuestItemConfig;
      }(ItemConfigBase), (_descriptor52 = _applyDecoratedDescriptor(_class29.prototype, "questId", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class29.prototype, "questStage", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class29.prototype, "isKeyItem", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class29.prototype, "removeOnQuestComplete", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class29)) || _class28));
      var OtherItemConfig = exports('OtherItemConfig', (_dec66 = ccclass('OtherItemConfig'), _dec67 = property({
        displayName: '自定义分类',
        tooltip: '“其他”背包内进一步区分物品的分类键。'
      }), _dec68 = property({
        displayName: '交互动作',
        tooltip: '供交互系统识别的动作键，留空表示无专用动作。'
      }), _dec69 = property({
        displayName: '最大耐久度',
        min: 0,
        tooltip: '工具类物品可使用；0 表示不启用耐久度。'
      }), _dec66(_class31 = (_class32 = /*#__PURE__*/function (_ItemConfigBase5) {
        _inheritsLoose(OtherItemConfig, _ItemConfigBase5);
        function OtherItemConfig() {
          var _this7;
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          _this7 = _ItemConfigBase5.call.apply(_ItemConfigBase5, [this].concat(args)) || this;
          _initializerDefineProperty(_this7, "customCategory", _descriptor56, _assertThisInitialized(_this7));
          _initializerDefineProperty(_this7, "interactionAction", _descriptor57, _assertThisInitialized(_this7));
          _initializerDefineProperty(_this7, "maxDurability", _descriptor58, _assertThisInitialized(_this7));
          return _this7;
        }
        return OtherItemConfig;
      }(ItemConfigBase), (_descriptor56 = _applyDecoratedDescriptor(_class32.prototype, "customCategory", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class32.prototype, "interactionAction", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class32.prototype, "maxDurability", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class32)) || _class31));
      /**
       * 由 Inspector 配置构建的运行时索引。物品 ID 只要求唯一、非负，允许任意跳号。
       */
      var ItemConfigCatalog = exports('ItemConfigCatalog', /*#__PURE__*/function () {
        function ItemConfigCatalog(groups) {
          var _groups$weapons, _groups$armors, _groups$consumables, _groups$materials, _groups$quests, _groups$others;
          if (groups === void 0) {
            groups = {};
          }
          this.itemsById = new Map();
          this.categoryById = new Map();
          this.itemsByCategory = new Map();
          this.registerGroup('武器', (_groups$weapons = groups.weapons) != null ? _groups$weapons : []);
          this.registerGroup('防具', (_groups$armors = groups.armors) != null ? _groups$armors : []);
          this.registerGroup('消耗品', (_groups$consumables = groups.consumables) != null ? _groups$consumables : []);
          this.registerGroup('材料', (_groups$materials = groups.materials) != null ? _groups$materials : []);
          this.registerGroup('任务', (_groups$quests = groups.quests) != null ? _groups$quests : []);
          this.registerGroup('其他', (_groups$others = groups.others) != null ? _groups$others : []);
        }
        var _proto = ItemConfigCatalog.prototype;
        _proto.get = function get(itemId) {
          return this.itemsById.get(itemId);
        };
        _proto.getAll = function getAll(category) {
          if (category === void 0) {
            category = '全部';
          }
          var source = category === '全部' ? this.itemsById : this.itemsByCategory.get(category);
          return source ? Array.from(source.values()) : [];
        };
        _proto.getCategory = function getCategory(itemId) {
          return this.categoryById.get(itemId);
        };
        _proto.registerGroup = function registerGroup(category, items) {
          var _this8 = this;
          var group = new Map();
          this.itemsByCategory.set(category, group);
          items.forEach(function (item, index) {
            if (!item) {
              throw new Error("[ItemConfigCatalog] " + category + "\u914D\u7F6E\u7B2C " + (index + 1) + " \u9879\u4E3A\u7A7A\u3002");
            }
            if (!Number.isSafeInteger(item.id) || item.id < 0) {
              throw new Error("[ItemConfigCatalog] " + category + "\u7269\u54C1\u201C" + (item.itemName || index + 1) + "\u201D\u7684 ID " + item.id + " \u975E\u6CD5\uFF1BID \u5FC5\u987B\u662F\u975E\u8D1F\u5B89\u5168\u6574\u6570\u3002");
            }
            var duplicate = _this8.itemsById.get(item.id);
            if (duplicate) {
              var duplicateCategory = _this8.categoryById.get(item.id);
              throw new Error("[ItemConfigCatalog] \u7269\u54C1 ID " + item.id + " \u91CD\u590D\uFF1A\u201C" + duplicate.itemName + "\u201D(" + duplicateCategory + ") \u4E0E\u201C" + item.itemName + "\u201D(" + category + ")\u3002");
            }
            group.set(item.id, item);
            _this8.itemsById.set(item.id, item);
            _this8.categoryById.set(item.id, category);
          });
        };
        _createClass(ItemConfigCatalog, [{
          key: "size",
          get: function get() {
            return this.itemsById.size;
          }
        }]);
        return ItemConfigCatalog;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ca5bawi+wZO3ZN202VLKmvN", "ItemSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ItemSlot = exports('ItemSlot', (_dec = ccclass('ItemSlot'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemSlot, _Component);
        function ItemSlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rarityFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countLabel", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ItemSlot.prototype;
        _proto.showItem = function showItem(icon, count, rarity) {
          if (this.itemIcon) {
            this.itemIcon.spriteFrame = icon;
            this.itemIcon.node.active = true;
          }
          if (this.rarityFrame) {
            this.rarityFrame.spriteFrame = rarity;
            this.rarityFrame.node.active = rarity !== null;
          }
          if (this.countLabel) {
            this.countLabel.node.active = true;
            this.countLabel.string = count > 1 ? String(count) : '';
          }
        };
        _proto.clear = function clear() {
          if (this.itemIcon) {
            this.itemIcon.spriteFrame = null;
            this.itemIcon.node.active = false;
          }
          if (this.rarityFrame) {
            this.rarityFrame.spriteFrame = null;
            this.rarityFrame.node.active = false;
          }
          if (this.countLabel) {
            this.countLabel.node.active = true;
            this.countLabel.string = '';
          }
        };
        _proto.setContentVisible = function setContentVisible(visible) {
          if (this.itemIcon && this.itemIcon.spriteFrame) {
            this.itemIcon.node.active = visible;
          }
          if (this.rarityFrame && this.rarityFrame.spriteFrame) {
            this.rarityFrame.node.active = visible;
          }
          if (this.countLabel) {
            this.countLabel.node.active = visible;
          }
        };
        return ItemSlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rarityFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./BackpackController.ts', './ItemCatalog.ts', './ItemSlot.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});