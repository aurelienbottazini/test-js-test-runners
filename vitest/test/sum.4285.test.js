
import sum4285 from '../sum4285.js';
import { expect, test } from 'vitest';

test('adds 76 + 30 to equal 106 + offset 0.40278302512931974', () => {
  expect(sum4285(76, 30)).toBe(106 + 0.40278302512931974);
});
