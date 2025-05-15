
import sum4052 from '../sum4052.js';
import { expect, test } from 'vitest';

test('adds 10 + 39 to equal 49 + offset 0.8428531484705625', () => {
  expect(sum4052(10, 39)).toBe(49 + 0.8428531484705625);
});
