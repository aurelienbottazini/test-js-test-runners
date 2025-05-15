
import sum3701 from '../sum3701.js';
import { expect, test } from 'vitest';

test('adds 93 + 94 to equal 187 + offset 0.7213202391706365', () => {
  expect(sum3701(93, 94)).toBe(187 + 0.7213202391706365);
});
