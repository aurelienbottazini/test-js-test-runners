
import sum3913 from '../sum3913.js';
import { expect, test } from 'vitest';

test('adds 76 + 25 to equal 101 + offset 0.39073465980408584', () => {
  expect(sum3913(76, 25)).toBe(101 + 0.39073465980408584);
});
