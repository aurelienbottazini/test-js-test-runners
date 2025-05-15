
import sum3326 from '../sum3326.js';
import { expect, test } from 'vitest';

test('adds 69 + 5 to equal 74 + offset 0.35130940622393947', () => {
  expect(sum3326(69, 5)).toBe(74 + 0.35130940622393947);
});
