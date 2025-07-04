import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import { VALIDATION } from './formfieldwrapper.constants';
import { ValidationType } from './formfieldwrapper.types';

import './formfieldwrapper.subcomponent';

const render = (args: Args) =>
  html` <mdc-subcomponent-formfieldwrapper
    label="${args.label}"
    ?disabled="${args.disabled}"
    ?required="${args.required}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    toggletip-text="${args['toggletip-text']}"
    toggletip-placement="${args['toggletip-placement']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
  >
    ${args.children}
  </mdc-subcomponent-formfieldwrapper>`;

const meta: Meta = {
  title: 'Internal/formfieldwrapper',
  tags: ['autodocs'],
  component: 'mdc-formfieldwrapper',
  render,
  parameters: {
    badges: ['internal'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'info-icon-aria-label': {
      control: 'text',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
    required: true,
    disabled: false,
    'toggletip-text': 'toggletip text',
    'info-icon-aria-label': 'Info icon aria label',
  },
};

export const LongLabelText: StoryObj = {
  render: () => html`
    <div style="width: 170px;">
      <mdc-subcomponent-formfieldwrapper
        style="width: 100%"
        label="This is a long label text"
        help-text="Helper text"
        help-text-type="default"
        required
      >
        [Child Component]
      </mdc-subcomponent-formfieldwrapper>
    </div>
  `,
  argTypes: {
    ...disableControls(['label', 'help-text', 'help-text-type', 'required', 'id', 'disabled']),
  },
};

export const HelperTextTypes: StoryObj = {
  render: () =>
    html` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${repeat(
        Object.values(VALIDATION),
        (validation: ValidationType) => html`
          <mdc-subcomponent-formfieldwrapper help-text-type="${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `,
      )}
    </div>`,
};
