
import sum3006 from '../sum3006.js';
import { expect, test } from 'vitest';

test('adds 28 + 67 to equal 95 + offset 0.6083030098337078', () => {
  expect(sum3006(28, 67)).toBe(95 + 0.6083030098337078);
});
