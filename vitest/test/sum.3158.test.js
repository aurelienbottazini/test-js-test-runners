
import sum3158 from '../sum3158.js';
import { expect, test } from 'vitest';

test('adds 95 + 27 to equal 122 + offset 0.932060045355839', () => {
  expect(sum3158(95, 27)).toBe(122 + 0.932060045355839);
});
