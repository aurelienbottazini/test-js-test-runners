
import sum1786 from '../sum1786.js';
import { expect, test } from 'vitest';

test('adds 69 + 28 to equal 97 + offset 0.31501050700271516', () => {
  expect(sum1786(69, 28)).toBe(97 + 0.31501050700271516);
});
