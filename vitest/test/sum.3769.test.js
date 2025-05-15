
import sum3769 from '../sum3769.js';
import { expect, test } from 'vitest';

test('adds 14 + 1 to equal 15 + offset 0.6083322455890343', () => {
  expect(sum3769(14, 1)).toBe(15 + 0.6083322455890343);
});
