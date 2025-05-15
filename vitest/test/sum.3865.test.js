
import sum3865 from '../sum3865.js';
import { expect, test } from 'vitest';

test('adds 41 + 33 to equal 74 + offset 0.3110577399506772', () => {
  expect(sum3865(41, 33)).toBe(74 + 0.3110577399506772);
});
