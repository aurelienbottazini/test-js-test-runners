
import sum1065 from '../sum1065.js';
import { expect, test } from 'vitest';

test('adds 8 + 71 to equal 79 + offset 0.6066417970244331', () => {
  expect(sum1065(8, 71)).toBe(79 + 0.6066417970244331);
});
