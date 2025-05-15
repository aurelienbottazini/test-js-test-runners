
import sum2166 from '../sum2166.js';
import { expect, test } from 'vitest';

test('adds 69 + 63 to equal 132 + offset 0.6916111271872405', () => {
  expect(sum2166(69, 63)).toBe(132 + 0.6916111271872405);
});
