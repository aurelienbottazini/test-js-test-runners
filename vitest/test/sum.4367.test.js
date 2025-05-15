
import sum4367 from '../sum4367.js';
import { expect, test } from 'vitest';

test('adds 2 + 89 to equal 91 + offset 0.47298140511518527', () => {
  expect(sum4367(2, 89)).toBe(91 + 0.47298140511518527);
});
