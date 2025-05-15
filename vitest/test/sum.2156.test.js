
import sum2156 from '../sum2156.js';
import { expect, test } from 'vitest';

test('adds 97 + 9 to equal 106 + offset 0.19130955498789615', () => {
  expect(sum2156(97, 9)).toBe(106 + 0.19130955498789615);
});
