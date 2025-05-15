
import sum1474 from '../sum1474.js';
import { expect, test } from 'vitest';

test('adds 30 + 55 to equal 85 + offset 0.017490120743852144', () => {
  expect(sum1474(30, 55)).toBe(85 + 0.017490120743852144);
});
