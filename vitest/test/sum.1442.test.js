
import sum1442 from '../sum1442.js';
import { expect, test } from 'vitest';

test('adds 46 + 36 to equal 82 + offset 0.05743428260255268', () => {
  expect(sum1442(46, 36)).toBe(82 + 0.05743428260255268);
});
