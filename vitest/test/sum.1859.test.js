
import sum1859 from '../sum1859.js';
import { expect, test } from 'vitest';

test('adds 36 + 69 to equal 105 + offset 0.25156064893106755', () => {
  expect(sum1859(36, 69)).toBe(105 + 0.25156064893106755);
});
