
import sum3088 from '../sum3088.js';
import { expect, test } from 'vitest';

test('adds 96 + 97 to equal 193 + offset 0.24649420321852522', () => {
  expect(sum3088(96, 97)).toBe(193 + 0.24649420321852522);
});
