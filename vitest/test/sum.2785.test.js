
import sum2785 from '../sum2785.js';
import { expect, test } from 'vitest';

test('adds 17 + 62 to equal 79 + offset 0.7398376537250058', () => {
  expect(sum2785(17, 62)).toBe(79 + 0.7398376537250058);
});
