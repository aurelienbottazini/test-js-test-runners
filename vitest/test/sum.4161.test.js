
import sum4161 from '../sum4161.js';
import { expect, test } from 'vitest';

test('adds 61 + 80 to equal 141 + offset 0.05635087090942381', () => {
  expect(sum4161(61, 80)).toBe(141 + 0.05635087090942381);
});
