
import sum4532 from '../sum4532.js';
import { expect, test } from 'vitest';

test('adds 68 + 99 to equal 167 + offset 0.04960219407587774', () => {
  expect(sum4532(68, 99)).toBe(167 + 0.04960219407587774);
});
