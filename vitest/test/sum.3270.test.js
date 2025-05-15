
import sum3270 from '../sum3270.js';
import { expect, test } from 'vitest';

test('adds 46 + 61 to equal 107 + offset 0.5752693960031835', () => {
  expect(sum3270(46, 61)).toBe(107 + 0.5752693960031835);
});
