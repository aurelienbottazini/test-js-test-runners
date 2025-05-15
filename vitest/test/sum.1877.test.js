
import sum1877 from '../sum1877.js';
import { expect, test } from 'vitest';

test('adds 76 + 16 to equal 92 + offset 0.5915500502159323', () => {
  expect(sum1877(76, 16)).toBe(92 + 0.5915500502159323);
});
