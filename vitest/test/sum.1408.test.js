
import sum1408 from '../sum1408.js';
import { expect, test } from 'vitest';

test('adds 87 + 11 to equal 98 + offset 0.22858631241856842', () => {
  expect(sum1408(87, 11)).toBe(98 + 0.22858631241856842);
});
