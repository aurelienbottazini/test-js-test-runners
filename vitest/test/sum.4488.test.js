
import sum4488 from '../sum4488.js';
import { expect, test } from 'vitest';

test('adds 35 + 99 to equal 134 + offset 0.39340218931186344', () => {
  expect(sum4488(35, 99)).toBe(134 + 0.39340218931186344);
});
