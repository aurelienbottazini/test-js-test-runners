
import sum1005 from '../sum1005.js';
import { expect, test } from 'vitest';

test('adds 77 + 89 to equal 166 + offset 0.19583488586953957', () => {
  expect(sum1005(77, 89)).toBe(166 + 0.19583488586953957);
});
