
import sum2620 from '../sum2620.js';
import { expect, test } from 'vitest';

test('adds 41 + 71 to equal 112 + offset 0.6435498544279226', () => {
  expect(sum2620(41, 71)).toBe(112 + 0.6435498544279226);
});
