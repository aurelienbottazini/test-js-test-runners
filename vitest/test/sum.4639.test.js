
import sum4639 from '../sum4639.js';
import { expect, test } from 'vitest';

test('adds 30 + 90 to equal 120 + offset 0.5233824472257571', () => {
  expect(sum4639(30, 90)).toBe(120 + 0.5233824472257571);
});
