
import sum2795 from '../sum2795.js';
import { expect, test } from 'vitest';

test('adds 59 + 71 to equal 130 + offset 0.4075442893841812', () => {
  expect(sum2795(59, 71)).toBe(130 + 0.4075442893841812);
});
