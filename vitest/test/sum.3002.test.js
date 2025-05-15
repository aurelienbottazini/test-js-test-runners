
import sum3002 from '../sum3002.js';
import { expect, test } from 'vitest';

test('adds 6 + 40 to equal 46 + offset 0.2390560305664311', () => {
  expect(sum3002(6, 40)).toBe(46 + 0.2390560305664311);
});
