
import sum3087 from '../sum3087.js';
import { expect, test } from 'vitest';

test('adds 43 + 21 to equal 64 + offset 0.4467041690548935', () => {
  expect(sum3087(43, 21)).toBe(64 + 0.4467041690548935);
});
