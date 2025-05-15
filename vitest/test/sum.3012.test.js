
import sum3012 from '../sum3012.js';
import { expect, test } from 'vitest';

test('adds 52 + 48 to equal 100 + offset 0.8949672117472475', () => {
  expect(sum3012(52, 48)).toBe(100 + 0.8949672117472475);
});
