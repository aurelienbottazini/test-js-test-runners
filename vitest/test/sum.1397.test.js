
import sum1397 from '../sum1397.js';
import { expect, test } from 'vitest';

test('adds 75 + 23 to equal 98 + offset 0.679939190855944', () => {
  expect(sum1397(75, 23)).toBe(98 + 0.679939190855944);
});
