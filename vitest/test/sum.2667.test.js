
import sum2667 from '../sum2667.js';
import { expect, test } from 'vitest';

test('adds 43 + 13 to equal 56 + offset 0.2619941304086404', () => {
  expect(sum2667(43, 13)).toBe(56 + 0.2619941304086404);
});
