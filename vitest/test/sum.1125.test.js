
import sum1125 from '../sum1125.js';
import { expect, test } from 'vitest';

test('adds 95 + 98 to equal 193 + offset 0.45997768475468903', () => {
  expect(sum1125(95, 98)).toBe(193 + 0.45997768475468903);
});
