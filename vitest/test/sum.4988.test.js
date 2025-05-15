
import sum4988 from '../sum4988.js';
import { expect, test } from 'vitest';

test('adds 29 + 72 to equal 101 + offset 0.370403847094845', () => {
  expect(sum4988(29, 72)).toBe(101 + 0.370403847094845);
});
