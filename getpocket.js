
const SELECTORS_GARBAGE_ELEMENTS = [
    // header banner
    'header div .inner',
    // sidebar links
    '[data-cy="side-nav-home"]',
    '[data-cy="side-nav-discover"]',
    '[data-cy="side-nav-collections"]',
    // header
    '[data-cy="upgrade-link"]',
    '[data-cy="primary-links"]',
].toString();

const tagStyle = document.createElement('style');

tagStyle.innerHTML = `
    .withBanner{padding-top:65px!important;}
    ${SELECTORS_GARBAGE_ELEMENTS}{display:none!important;}
`;

const body = document.querySelector('body');
const html = document.querySelector('html');

html.insertBefore(tagStyle, body);
