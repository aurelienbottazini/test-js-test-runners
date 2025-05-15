
import sum4157 from '../sum4157.js';
import { expect, test } from 'vitest';

test('adds 49 + 22 to equal 71 + offset 0.979647009073929', () => {
  expect(sum4157(49, 22)).toBe(71 + 0.979647009073929);
});
