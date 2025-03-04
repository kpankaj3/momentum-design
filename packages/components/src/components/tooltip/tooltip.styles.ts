import { css } from 'lit';

const styles = css`

  :host {
    --mdc-tooltip-max-width: 400px;
    --mdc-tooltip-padding: 0.875rem;
    --mdc-tooltip-text-color: var(--mds-color-theme-text-primary-normal);
  }

  ::part(popover-content) {
    max-width: var(--mdc-tooltip-max-width);
    min-width: fit-content;
    padding: var(--mdc-tooltip-padding);
    width: fit-content;
  }

  ::part(text) {
    color: var(--mdc-tooltip-text-color);
  }
`;

export default [styles];
