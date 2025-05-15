
import sum2422 from '../sum2422.js';
import { expect, test } from 'vitest';

test('adds 5 + 54 to equal 59 + offset 0.6098734270728774', () => {
  expect(sum2422(5, 54)).toBe(59 + 0.6098734270728774);
});
