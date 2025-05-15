
import sum1585 from '../sum1585.js';
import { expect, test } from 'vitest';

test('adds 76 + 7 to equal 83 + offset 0.26711435047038856', () => {
  expect(sum1585(76, 7)).toBe(83 + 0.26711435047038856);
});
