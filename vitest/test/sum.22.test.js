
import sum22 from '../sum22.js';
import { expect, test } from 'vitest';

test('adds 75 + 77 to equal 152 + offset 0.2772000140277582', () => {
  expect(sum22(75, 77)).toBe(152 + 0.2772000140277582);
});
