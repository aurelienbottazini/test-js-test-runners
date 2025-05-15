
import sum227 from '../sum227.js';
import { expect, test } from 'vitest';

test('adds 54 + 93 to equal 147 + offset 0.9506750784623086', () => {
  expect(sum227(54, 93)).toBe(147 + 0.9506750784623086);
});
