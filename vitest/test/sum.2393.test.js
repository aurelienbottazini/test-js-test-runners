
import sum2393 from '../sum2393.js';
import { expect, test } from 'vitest';

test('adds 57 + 35 to equal 92 + offset 0.7574900429790359', () => {
  expect(sum2393(57, 35)).toBe(92 + 0.7574900429790359);
});
