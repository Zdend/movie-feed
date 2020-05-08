import { css } from '@emotion/core';
import { COLORS, REM, BASE_UNIT } from '@/shared/theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap');

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-size: ${REM}px;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue,
      Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol,
      noto color emoji;
  }

  h1 {
    font-size: ${BASE_UNIT * 6}px;
    font-weight: 900;
    line-height: 1.5;
  }

  h2 {
    font-size: ${BASE_UNIT * 5}px;
    font-weight: 800;
    line-height: 1.5;
  }

  h3 {
    font-size: ${BASE_UNIT * 4}px;
    font-weight: 800;
    line-height: 1.5;
  }

  h4 {
    font-size: ${BASE_UNIT * 3.5}px;
    font-weight: 700;
  }

  h5 {
    font-size: ${BASE_UNIT * 3}px;
    font-weight: 700;
  }

  h6 {
    font-size: ${BASE_UNIT * 2.5}px;
    font-weight: 700;
  }

  a {
    color: ${COLORS.PRIMARY[5]};
    text-decoration: underline;
  }

  table th,
  table td {
    padding: 0.5rem;
  }

  ${Object.entries(COLORS).map(([name, variants]) => {
    return `
      .${name.toLocaleLowerCase()}--text {
        color: ${variants[5]};
      }
    `;
  })}
`;
