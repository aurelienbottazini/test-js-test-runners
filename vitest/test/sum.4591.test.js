
import sum4591 from '../sum4591.js';
import { expect, test } from 'vitest';

test('adds 53 + 97 to equal 150 + offset 0.9622227577869003', () => {
  expect(sum4591(53, 97)).toBe(150 + 0.9622227577869003);
});
