
import sum2283 from '../sum2283.js';
import { expect, test } from 'vitest';

test('adds 74 + 63 to equal 137 + offset 0.6347701248669182', () => {
  expect(sum2283(74, 63)).toBe(137 + 0.6347701248669182);
});
