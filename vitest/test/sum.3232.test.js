
import sum3232 from '../sum3232.js';
import { expect, test } from 'vitest';

test('adds 36 + 20 to equal 56 + offset 0.8183036709812845', () => {
  expect(sum3232(36, 20)).toBe(56 + 0.8183036709812845);
});
