
import sum2217 from '../sum2217.js';
import { expect, test } from 'vitest';

test('adds 39 + 83 to equal 122 + offset 0.12954861846113386', () => {
  expect(sum2217(39, 83)).toBe(122 + 0.12954861846113386);
});
