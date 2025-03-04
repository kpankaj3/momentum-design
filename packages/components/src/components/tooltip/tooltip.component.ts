import { CSSResult, html, PropertyValues } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';
import styles from './tooltip.styles';
import { Component } from '../../models';
import { PopoverPlacement } from '../popover/popover.types';
import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import '../popover';
import '../text';
import { TooltipType } from './tooltip.types';
import { TYPE } from '../text/text.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

/**
 * A tooltip is triggered by mouse hover or by keyboard focus
 * and will disappear upon mouse exit or focus change.
 *
 * Note: Tooltips cannot contain content that can be focused or interacted with.
 *
 * @dependency mdc-popover
 * @dependency mdc-text
 *
 * @tagname mdc-tooltip
 *
 * @cssproperty --mdc-tooltip-max-width - The maximum width of the tooltip.
 * @cssproperty --mdc-tooltip-padding - The padding of the tooltip.
 * @cssproperty --mdc-tooltip-text-color - The text color of the tooltip.
 *
 */
class Tooltip extends Component {
  /**
   * The delay of the show/hide tooltip.
   * @default 0,0
   */
  @property({ type: String, reflect: true })
  delay: string = DEFAULTS.DELAY;

  /**
   * The offset of the tooltip.
   * @default 4
   */
  @property({ type: Number, reflect: true })
  offset: number = DEFAULTS.OFFSET;

  /**
   * The placement of the tip of the notch.
   * - **top**
   * - **top-start**
   * - **top-end**
   * - **bottom**
   * - **bottom-start**
   * - **bottom-end**
   * - **left**
   * - **left-start**
   * - **left-end**
   * - **right**
   * - **right-start**
   * - **right-end**
   * @default bottom
   */
  @property({ type: String, reflect: true })
  placement: PopoverPlacement = DEFAULTS.PLACEMENT;

  /**
   * To show the notch of the tooltip.
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-notch' })
  showNotch: boolean = DEFAULTS.SHOW_NOTCH;

  /**
   * The text to display in the tooltip.
   * @default ''
   */
  @property({ type: String, reflect: true })
  text: string = '';

  /**
   * The type of tooltip.
   * - **description** passing aria-describedby to the trigger component which refers to the tooltip's content
   * - **label** passing content of the tooltip as aria-label prop to the trigger component
   * - **none** not passing any aria props to the trigger component and hiding the tooltip's content
   *  from the screen reader
   * @default 'description'
   */
  @property({ type: String, reflect: true })
  type: TooltipType = DEFAULTS.TOOLTIP_TYPE;

  /**
   * The ID of the element that triggers the popover.
   * @internal
   */
  @state()
  tooltipTriggerID: string = '';

  /**
   * The ID of the hidden label element appended to the trigger element..
   * @internal
   */
  @state()
  hiddenTriggerLabelID: string = `mdc-tooltip-hidden-label-${uuidv4()}`;

  /**
   * The trigger element.
   * @internal
   */
  @queryAssignedElements({ slot: 'trigger' })
  triggers!: Array<HTMLElement>;

  /**
   * Sets the id to trigger provided in slot.
   */
  private onTriggerSlotChanged() {
    if (this.triggers.length) {
      const triggerElement = this.triggers[0];
      if (triggerElement.id) {
        this.tooltipTriggerID = triggerElement.id;
      } else {
        this.tooltipTriggerID = `mdc-tooltip-trigger-${uuidv4()}`;
        triggerElement.id = this.tooltipTriggerID;
      }

      const hiddenLabel = document.createElement('div');
      hiddenLabel.innerText = this.text;
      hiddenLabel.id = this.hiddenTriggerLabelID;
      hiddenLabel.hidden = true;
      triggerElement.appendChild(hiddenLabel);

      if (this.type === TOOLTIP_TYPES.DESCRIPTION) {
        triggerElement.setAttribute('aria-describedby', this.hiddenTriggerLabelID);
      } else if (this.type === TOOLTIP_TYPES.LABEL) {
        triggerElement.setAttribute('aria-labelledby', this.text);
      }
    }
  }

  /**
   * Sets the type attribute for the tooltip component.
   * If the provided type is not included in the TOOLTIP_TYPES,
   * it defaults to the value specified in DEFAULTS.TOOLTIP_TYPE.
   *
   * @param type - The type to set.
   */
  private setType(type: TooltipType): void {
    this.setAttribute('type', Object.values(TOOLTIP_TYPES).includes(type) ? type : DEFAULTS.TOOLTIP_TYPE);
  }

  /**
   * Sets the placement attribute for the tooltip component.
   * If the provided placement is not included in the POPOVER_PLACEMENT,
   * it defaults to the value specified in DEFAULTS.PLACEMENT.
   *
   * @param placement - The placement to set.
   */
  private setPlacement(placement: PopoverPlacement): void {
    this.setAttribute(
      'placement',
      Object.values(POPOVER_PLACEMENT).includes(placement) ? placement : DEFAULTS.PLACEMENT,
    );
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('type')) {
      this.setType(this.type);
    }
    if (changedProperties.has('placement')) {
      this.setPlacement(this.placement);
    }
  }

  public override render() {
    return html`
      <slot name="trigger" @slotchange=${this.onTriggerSlotChanged}></slot>
      <mdc-popover
        trigger="mouseenter focusin"
        triggerID="${this.tooltipTriggerID}"
        placement=${this.placement}
        data-role="tooltip"
        offset=${this.offset}
        ?backdrop=${false}
        delay=${this.delay}
        ?focus-trap=${false}
        ?interactive=${false}
        ?show-arrow=${this.showNotch}
        hide-on-escape
        hide-on-blur
        color=${DEFAULTS.COLOR}
        exportparts="popover-content"
        >
        <mdc-text exportparts="text" type=${TYPE.BODY_MIDSIZE_REGULAR} tagname="span">${this.text}</mdc-text>
      </mdc-popover>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Tooltip;
