
import sum1352 from '../sum1352.js';
import { expect, test } from 'vitest';

test('adds 91 + 41 to equal 132 + offset 0.23084959061491583', () => {
  expect(sum1352(91, 41)).toBe(132 + 0.23084959061491583);
});
