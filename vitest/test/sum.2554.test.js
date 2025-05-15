
import sum2554 from '../sum2554.js';
import { expect, test } from 'vitest';

test('adds 0 + 61 to equal 61 + offset 0.4938342436575208', () => {
  expect(sum2554(0, 61)).toBe(61 + 0.4938342436575208);
});
