
import sum1153 from '../sum1153.js';
import { expect, test } from 'vitest';

test('adds 46 + 88 to equal 134 + offset 0.09486204949018584', () => {
  expect(sum1153(46, 88)).toBe(134 + 0.09486204949018584);
});
