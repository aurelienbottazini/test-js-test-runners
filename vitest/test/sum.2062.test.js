
import sum2062 from '../sum2062.js';
import { expect, test } from 'vitest';

test('adds 16 + 14 to equal 30 + offset 0.11737848121011218', () => {
  expect(sum2062(16, 14)).toBe(30 + 0.11737848121011218);
});
