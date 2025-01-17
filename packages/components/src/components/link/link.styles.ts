import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`

  :host {

    --mdc-link-border-radius: 0.25rem;
    --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
    --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
    --mdc-link-icon-margin-left: 0.25rem;
    --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
    --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
    --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);
    --mdc-link-text-decoration-disabled: underline;

    color: var(--mdc-link-color-normal);
  }

  ::slotted(a) {
    align-items: center;
    border-radius: var(--mdc-link-border-radius);
    color: inherit;
    display: flex;
    gap: var(--mdc-link-icon-margin-left);
    text-decoration: inherit;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  ::slotted(a:focus-visible) {
    outline: none;
  }

  ::slotted(a:focus) {
    position: relative;
    box-shadow: 0 0 0 0.125rem var(--mds-color-theme-focus-default-0),
                0 0 0 0.25rem var(--mds-color-theme-focus-default-1),
                0 0 0 0.3125rem var(--mds-color-theme-focus-default-2);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    ::slotted(a:focus-visible), ::slotted(a:focus) {
      outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
    }
  }

  :host(:focus-visible), :host(:focus) {
    outline: none;
  }

  :host(:hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:active) {
    color: var(--mdc-link-color-active);
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([inverted]:hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([size="large"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"]) {
    font-size: var(--mds-font-apps-body-small-medium-font-size);
    font-weight: var(--mds-font-apps-body-small-medium-font-weight);
    line-height: var(--mds-font-apps-body-small-medium-line-height);
    text-decoration: var(--mds-font-apps-body-small-medium-text-decoration);
    text-transform: var(--mds-font-apps-body-small-medium-text-case);
  }

  :host([size="large"]:hover), :host([size="large"]:active), :host([size="large"][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover), :host([size="midsize"]:active), :host([size="midsize"][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover), :host([size="small"]:active), :host([size="small"][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
    text-decoration: var(--mdc-link-text-decoration-disabled);
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }
`];

export default styles;
