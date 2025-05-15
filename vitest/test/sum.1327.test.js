
import sum1327 from '../sum1327.js';
import { expect, test } from 'vitest';

test('adds 29 + 88 to equal 117 + offset 0.6821821957204908', () => {
  expect(sum1327(29, 88)).toBe(117 + 0.6821821957204908);
});
