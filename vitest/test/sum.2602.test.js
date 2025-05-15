
import sum2602 from '../sum2602.js';
import { expect, test } from 'vitest';

test('adds 28 + 75 to equal 103 + offset 0.10258097337952587', () => {
  expect(sum2602(28, 75)).toBe(103 + 0.10258097337952587);
});
