
import sum1885 from '../sum1885.js';
import { expect, test } from 'vitest';

test('adds 9 + 28 to equal 37 + offset 0.721514214230979', () => {
  expect(sum1885(9, 28)).toBe(37 + 0.721514214230979);
});
