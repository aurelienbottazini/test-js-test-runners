
import sum3442 from '../sum3442.js';
import { expect, test } from 'vitest';

test('adds 17 + 67 to equal 84 + offset 0.13555462811712227', () => {
  expect(sum3442(17, 67)).toBe(84 + 0.13555462811712227);
});
