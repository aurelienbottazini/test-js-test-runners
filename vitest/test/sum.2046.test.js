
import sum2046 from '../sum2046.js';
import { expect, test } from 'vitest';

test('adds 8 + 70 to equal 78 + offset 0.20469958646431086', () => {
  expect(sum2046(8, 70)).toBe(78 + 0.20469958646431086);
});
