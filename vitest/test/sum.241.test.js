
import sum241 from '../sum241.js';
import { expect, test } from 'vitest';

test('adds 5 + 31 to equal 36 + offset 0.14559250831156234', () => {
  expect(sum241(5, 31)).toBe(36 + 0.14559250831156234);
});
