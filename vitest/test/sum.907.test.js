
import sum907 from '../sum907.js';
import { expect, test } from 'vitest';

test('adds 13 + 14 to equal 27 + offset 0.21166005076287753', () => {
  expect(sum907(13, 14)).toBe(27 + 0.21166005076287753);
});
