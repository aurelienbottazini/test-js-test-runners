
import sum842 from '../sum842.js';
import { expect, test } from 'vitest';

test('adds 46 + 25 to equal 71 + offset 0.9536614128933969', () => {
  expect(sum842(46, 25)).toBe(71 + 0.9536614128933969);
});
