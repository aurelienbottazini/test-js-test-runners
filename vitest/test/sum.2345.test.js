
import sum2345 from '../sum2345.js';
import { expect, test } from 'vitest';

test('adds 20 + 67 to equal 87 + offset 0.6275922326849936', () => {
  expect(sum2345(20, 67)).toBe(87 + 0.6275922326849936);
});
