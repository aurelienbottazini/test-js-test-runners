
import sum3011 from '../sum3011.js';
import { expect, test } from 'vitest';

test('adds 13 + 28 to equal 41 + offset 0.8888648198424142', () => {
  expect(sum3011(13, 28)).toBe(41 + 0.8888648198424142);
});
