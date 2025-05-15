
import sum2077 from '../sum2077.js';
import { expect, test } from 'vitest';

test('adds 4 + 70 to equal 74 + offset 0.9663631089401736', () => {
  expect(sum2077(4, 70)).toBe(74 + 0.9663631089401736);
});
