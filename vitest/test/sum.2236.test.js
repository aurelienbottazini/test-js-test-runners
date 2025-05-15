
import sum2236 from '../sum2236.js';
import { expect, test } from 'vitest';

test('adds 14 + 85 to equal 99 + offset 0.13178656947398182', () => {
  expect(sum2236(14, 85)).toBe(99 + 0.13178656947398182);
});
