
import sum3750 from '../sum3750.js';
import { expect, test } from 'vitest';

test('adds 62 + 96 to equal 158 + offset 0.39831545378340427', () => {
  expect(sum3750(62, 96)).toBe(158 + 0.39831545378340427);
});
