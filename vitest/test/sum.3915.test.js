
import sum3915 from '../sum3915.js';
import { expect, test } from 'vitest';

test('adds 40 + 21 to equal 61 + offset 0.49984385656778685', () => {
  expect(sum3915(40, 21)).toBe(61 + 0.49984385656778685);
});
