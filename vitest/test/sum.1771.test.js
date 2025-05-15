
import sum1771 from '../sum1771.js';
import { expect, test } from 'vitest';

test('adds 60 + 44 to equal 104 + offset 0.9345438504076911', () => {
  expect(sum1771(60, 44)).toBe(104 + 0.9345438504076911);
});
