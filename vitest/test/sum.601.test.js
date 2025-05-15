
import sum601 from '../sum601.js';
import { expect, test } from 'vitest';

test('adds 87 + 13 to equal 100 + offset 0.7829524329552242', () => {
  expect(sum601(87, 13)).toBe(100 + 0.7829524329552242);
});
