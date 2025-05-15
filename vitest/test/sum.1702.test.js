
import sum1702 from '../sum1702.js';
import { expect, test } from 'vitest';

test('adds 14 + 14 to equal 28 + offset 0.46571689349134315', () => {
  expect(sum1702(14, 14)).toBe(28 + 0.46571689349134315);
});
