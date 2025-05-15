
import sum3771 from '../sum3771.js';
import { expect, test } from 'vitest';

test('adds 37 + 49 to equal 86 + offset 0.1587953821676681', () => {
  expect(sum3771(37, 49)).toBe(86 + 0.1587953821676681);
});
