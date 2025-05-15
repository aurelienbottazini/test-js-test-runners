
import sum3001 from '../sum3001.js';
import { expect, test } from 'vitest';

test('adds 59 + 31 to equal 90 + offset 0.45892640775039273', () => {
  expect(sum3001(59, 31)).toBe(90 + 0.45892640775039273);
});
