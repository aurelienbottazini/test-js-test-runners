
import sum4722 from '../sum4722.js';
import { expect, test } from 'vitest';

test('adds 46 + 31 to equal 77 + offset 0.19776786618613862', () => {
  expect(sum4722(46, 31)).toBe(77 + 0.19776786618613862);
});
