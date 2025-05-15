
import sum4729 from '../sum4729.js';
import { expect, test } from 'vitest';

test('adds 46 + 84 to equal 130 + offset 0.42150447082904896', () => {
  expect(sum4729(46, 84)).toBe(130 + 0.42150447082904896);
});
