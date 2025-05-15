
import sum3036 from '../sum3036.js';
import { expect, test } from 'vitest';

test('adds 17 + 90 to equal 107 + offset 0.015280936111914167', () => {
  expect(sum3036(17, 90)).toBe(107 + 0.015280936111914167);
});
