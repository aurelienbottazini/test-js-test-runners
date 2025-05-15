
import sum4643 from '../sum4643.js';
import { expect, test } from 'vitest';

test('adds 37 + 22 to equal 59 + offset 0.9449449288758096', () => {
  expect(sum4643(37, 22)).toBe(59 + 0.9449449288758096);
});
