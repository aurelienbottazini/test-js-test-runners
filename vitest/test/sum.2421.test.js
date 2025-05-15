
import sum2421 from '../sum2421.js';
import { expect, test } from 'vitest';

test('adds 48 + 99 to equal 147 + offset 0.7597247663641994', () => {
  expect(sum2421(48, 99)).toBe(147 + 0.7597247663641994);
});
