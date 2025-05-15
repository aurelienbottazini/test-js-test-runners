
import sum1732 from '../sum1732.js';
import { expect, test } from 'vitest';

test('adds 4 + 12 to equal 16 + offset 0.33404403599700916', () => {
  expect(sum1732(4, 12)).toBe(16 + 0.33404403599700916);
});
