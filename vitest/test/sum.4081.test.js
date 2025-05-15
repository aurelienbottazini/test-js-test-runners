
import sum4081 from '../sum4081.js';
import { expect, test } from 'vitest';

test('adds 13 + 11 to equal 24 + offset 0.40127293530761865', () => {
  expect(sum4081(13, 11)).toBe(24 + 0.40127293530761865);
});
