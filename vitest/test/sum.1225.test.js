
import sum1225 from '../sum1225.js';
import { expect, test } from 'vitest';

test('adds 44 + 68 to equal 112 + offset 0.8815473600370706', () => {
  expect(sum1225(44, 68)).toBe(112 + 0.8815473600370706);
});
