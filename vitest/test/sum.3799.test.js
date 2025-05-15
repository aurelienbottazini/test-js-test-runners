
import sum3799 from '../sum3799.js';
import { expect, test } from 'vitest';

test('adds 91 + 33 to equal 124 + offset 0.885612293159298', () => {
  expect(sum3799(91, 33)).toBe(124 + 0.885612293159298);
});
