
import sum2640 from '../sum2640.js';
import { expect, test } from 'vitest';

test('adds 61 + 26 to equal 87 + offset 0.9791613979225663', () => {
  expect(sum2640(61, 26)).toBe(87 + 0.9791613979225663);
});
