import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import '../button';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <mdc-tooltip
    delay="${args.delay}"
    offset="${args.offset}"
    placement="${args.placement}"
    ?show-notch="${args['show-notch']}"
    text="${args.text}"
    type="${args.type}"
    >
    <mdc-button slot="trigger">Hover here one</mdc-button>
  </mdc-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  `;

const meta: Meta = {
  title: 'Work In Progress/tooltip',
  tags: ['autodocs'],
  component: 'mdc-tooltip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    delay: {
      control: 'text',
    },
    offset: {
      control: 'number',
    },
    placement: {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'show-notch': {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: Object.values(TOOLTIP_TYPES),
    },
    ...disableControls([
      '--mdc-tooltip-max-width',
      '--mdc-tooltip-padding',
      '--mdc-tooltip-text-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  render,
  args: {
    delay: DEFAULTS.DELAY,
    offset: DEFAULTS.OFFSET,
    placement: DEFAULTS.PLACEMENT,
    'show-notch': DEFAULTS.SHOW_NOTCH,
    text: 'This is a tooltip',
    type: DEFAULTS.TOOLTIP_TYPE,
  },
};
