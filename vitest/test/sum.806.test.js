
import sum806 from '../sum806.js';
import { expect, test } from 'vitest';

test('adds 76 + 84 to equal 160 + offset 0.26739136474446934', () => {
  expect(sum806(76, 84)).toBe(160 + 0.26739136474446934);
});
