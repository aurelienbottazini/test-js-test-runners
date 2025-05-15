
import sum722 from '../sum722.js';
import { expect, test } from 'vitest';

test('adds 46 + 27 to equal 73 + offset 0.4786218753840019', () => {
  expect(sum722(46, 27)).toBe(73 + 0.4786218753840019);
});
