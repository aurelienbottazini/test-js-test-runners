
import sum1951 from '../sum1951.js';
import { expect, test } from 'vitest';

test('adds 38 + 48 to equal 86 + offset 0.13317706832492904', () => {
  expect(sum1951(38, 48)).toBe(86 + 0.13317706832492904);
});
