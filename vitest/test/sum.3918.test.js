
import sum3918 from '../sum3918.js';
import { expect, test } from 'vitest';

test('adds 38 + 83 to equal 121 + offset 0.560301926086729', () => {
  expect(sum3918(38, 83)).toBe(121 + 0.560301926086729);
});
