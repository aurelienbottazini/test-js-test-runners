
import sum4416 from '../sum4416.js';
import { expect, test } from 'vitest';

test('adds 58 + 30 to equal 88 + offset 0.5089891373946364', () => {
  expect(sum4416(58, 30)).toBe(88 + 0.5089891373946364);
});
