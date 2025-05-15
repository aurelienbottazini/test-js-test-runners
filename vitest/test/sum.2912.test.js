
import sum2912 from '../sum2912.js';
import { expect, test } from 'vitest';

test('adds 60 + 4 to equal 64 + offset 0.9801416891921425', () => {
  expect(sum2912(60, 4)).toBe(64 + 0.9801416891921425);
});
