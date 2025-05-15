
import sum2628 from '../sum2628.js';
import { expect, test } from 'vitest';

test('adds 24 + 49 to equal 73 + offset 0.5204741681568863', () => {
  expect(sum2628(24, 49)).toBe(73 + 0.5204741681568863);
});
