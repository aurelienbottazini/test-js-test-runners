
import sum2878 from '../sum2878.js';
import { expect, test } from 'vitest';

test('adds 59 + 64 to equal 123 + offset 0.5808235002110901', () => {
  expect(sum2878(59, 64)).toBe(123 + 0.5808235002110901);
});
