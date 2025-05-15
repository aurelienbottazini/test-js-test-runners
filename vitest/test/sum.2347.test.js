
import sum2347 from '../sum2347.js';
import { expect, test } from 'vitest';

test('adds 35 + 22 to equal 57 + offset 0.3721480647737875', () => {
  expect(sum2347(35, 22)).toBe(57 + 0.3721480647737875);
});
