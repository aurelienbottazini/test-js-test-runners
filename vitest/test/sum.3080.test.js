
import sum3080 from '../sum3080.js';
import { expect, test } from 'vitest';

test('adds 98 + 37 to equal 135 + offset 0.47462557503780956', () => {
  expect(sum3080(98, 37)).toBe(135 + 0.47462557503780956);
});
