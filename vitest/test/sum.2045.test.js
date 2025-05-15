
import sum2045 from '../sum2045.js';
import { expect, test } from 'vitest';

test('adds 93 + 19 to equal 112 + offset 0.7230805734106912', () => {
  expect(sum2045(93, 19)).toBe(112 + 0.7230805734106912);
});
