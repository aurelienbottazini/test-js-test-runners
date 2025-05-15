
import sum1185 from '../sum1185.js';
import { expect, test } from 'vitest';

test('adds 11 + 31 to equal 42 + offset 0.3279414311892068', () => {
  expect(sum1185(11, 31)).toBe(42 + 0.3279414311892068);
});
