
import sum2488 from '../sum2488.js';
import { expect, test } from 'vitest';

test('adds 91 + 70 to equal 161 + offset 0.6794294055854412', () => {
  expect(sum2488(91, 70)).toBe(161 + 0.6794294055854412);
});
