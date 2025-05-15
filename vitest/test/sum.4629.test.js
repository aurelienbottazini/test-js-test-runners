
import sum4629 from '../sum4629.js';
import { expect, test } from 'vitest';

test('adds 69 + 23 to equal 92 + offset 0.9869919351080058', () => {
  expect(sum4629(69, 23)).toBe(92 + 0.9869919351080058);
});
