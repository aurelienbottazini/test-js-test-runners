
import sum3983 from '../sum3983.js';
import { expect, test } from 'vitest';

test('adds 69 + 82 to equal 151 + offset 0.28228499578293476', () => {
  expect(sum3983(69, 82)).toBe(151 + 0.28228499578293476);
});
