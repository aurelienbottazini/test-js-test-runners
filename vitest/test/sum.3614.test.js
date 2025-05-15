
import sum3614 from '../sum3614.js';
import { expect, test } from 'vitest';

test('adds 19 + 56 to equal 75 + offset 0.15653211846883663', () => {
  expect(sum3614(19, 56)).toBe(75 + 0.15653211846883663);
});
