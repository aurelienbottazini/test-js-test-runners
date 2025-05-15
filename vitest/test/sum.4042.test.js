
import sum4042 from '../sum4042.js';
import { expect, test } from 'vitest';

test('adds 25 + 62 to equal 87 + offset 0.44265825469019415', () => {
  expect(sum4042(25, 62)).toBe(87 + 0.44265825469019415);
});
