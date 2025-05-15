
import sum514 from '../sum514.js';
import { expect, test } from 'vitest';

test('adds 30 + 67 to equal 97 + offset 0.6695238693884311', () => {
  expect(sum514(30, 67)).toBe(97 + 0.6695238693884311);
});
