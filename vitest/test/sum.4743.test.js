
import sum4743 from '../sum4743.js';
import { expect, test } from 'vitest';

test('adds 6 + 25 to equal 31 + offset 0.5818657598581611', () => {
  expect(sum4743(6, 25)).toBe(31 + 0.5818657598581611);
});
