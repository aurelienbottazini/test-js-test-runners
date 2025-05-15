
import sum901 from '../sum901.js';
import { expect, test } from 'vitest';

test('adds 1 + 85 to equal 86 + offset 0.20086442580712638', () => {
  expect(sum901(1, 85)).toBe(86 + 0.20086442580712638);
});
