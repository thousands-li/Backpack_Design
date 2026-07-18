import {
    _decorator,
    Component,
    Label,
    Sprite,
    SpriteFrame,
} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ItemSlot')
export class ItemSlot extends Component {
    @property(Sprite)
    public itemIcon: Sprite | null = null;

    @property(Sprite)
    public rarityFrame: Sprite | null = null;

    @property(Label)
    public countLabel: Label | null = null;

    public showItem(
        icon: SpriteFrame,
        count: number,
        rarity: SpriteFrame | null,
    ): void {
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
    }

    public clear(): void {
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
    }

    public setContentVisible(visible: boolean): void {
        if (this.itemIcon && this.itemIcon.spriteFrame) {
            this.itemIcon.node.active = visible;
        }

        if (this.rarityFrame && this.rarityFrame.spriteFrame) {
            this.rarityFrame.node.active = visible;
        }

        if (this.countLabel) {
            this.countLabel.node.active = visible;
        }
    }
}
