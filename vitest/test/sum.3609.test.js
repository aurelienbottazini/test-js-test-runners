
import sum3609 from '../sum3609.js';
import { expect, test } from 'vitest';

test('adds 62 + 39 to equal 101 + offset 0.3203367694386392', () => {
  expect(sum3609(62, 39)).toBe(101 + 0.3203367694386392);
});
