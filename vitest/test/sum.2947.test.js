
import sum2947 from '../sum2947.js';
import { expect, test } from 'vitest';

test('adds 31 + 93 to equal 124 + offset 0.10413296770903457', () => {
  expect(sum2947(31, 93)).toBe(124 + 0.10413296770903457);
});
