
import sum3527 from '../sum3527.js';
import { expect, test } from 'vitest';

test('adds 62 + 81 to equal 143 + offset 0.9463494702141915', () => {
  expect(sum3527(62, 81)).toBe(143 + 0.9463494702141915);
});
