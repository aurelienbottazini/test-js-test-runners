
import sum247 from '../sum247.js';
import { expect, test } from 'vitest';

test('adds 65 + 98 to equal 163 + offset 0.9479238583397324', () => {
  expect(sum247(65, 98)).toBe(163 + 0.9479238583397324);
});
