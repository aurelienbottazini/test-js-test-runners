
import sum1857 from '../sum1857.js';
import { expect, test } from 'vitest';

test('adds 6 + 54 to equal 60 + offset 0.369275792400133', () => {
  expect(sum1857(6, 54)).toBe(60 + 0.369275792400133);
});
