
import sum3181 from '../sum3181.js';
import { expect, test } from 'vitest';

test('adds 62 + 85 to equal 147 + offset 0.3533589985075737', () => {
  expect(sum3181(62, 85)).toBe(147 + 0.3533589985075737);
});
