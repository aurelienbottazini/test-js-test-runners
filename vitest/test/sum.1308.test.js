
import sum1308 from '../sum1308.js';
import { expect, test } from 'vitest';

test('adds 30 + 61 to equal 91 + offset 0.014979102092285146', () => {
  expect(sum1308(30, 61)).toBe(91 + 0.014979102092285146);
});
