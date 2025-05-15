
import sum537 from '../sum537.js';
import { expect, test } from 'vitest';

test('adds 61 + 49 to equal 110 + offset 0.8772022739404789', () => {
  expect(sum537(61, 49)).toBe(110 + 0.8772022739404789);
});
