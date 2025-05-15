
import sum2868 from '../sum2868.js';
import { expect, test } from 'vitest';

test('adds 76 + 94 to equal 170 + offset 0.03309240588975493', () => {
  expect(sum2868(76, 94)).toBe(170 + 0.03309240588975493);
});
