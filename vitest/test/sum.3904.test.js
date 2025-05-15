
import sum3904 from '../sum3904.js';
import { expect, test } from 'vitest';

test('adds 73 + 68 to equal 141 + offset 0.5541510106636046', () => {
  expect(sum3904(73, 68)).toBe(141 + 0.5541510106636046);
});
