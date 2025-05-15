
import sum4966 from '../sum4966.js';
import { expect, test } from 'vitest';

test('adds 24 + 13 to equal 37 + offset 0.9889578676965267', () => {
  expect(sum4966(24, 13)).toBe(37 + 0.9889578676965267);
});
