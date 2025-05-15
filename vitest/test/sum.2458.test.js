
import sum2458 from '../sum2458.js';
import { expect, test } from 'vitest';

test('adds 57 + 18 to equal 75 + offset 0.3641692393150492', () => {
  expect(sum2458(57, 18)).toBe(75 + 0.3641692393150492);
});
