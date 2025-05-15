
import sum4296 from '../sum4296.js';
import { expect, test } from 'vitest';

test('adds 44 + 18 to equal 62 + offset 0.11061695233638813', () => {
  expect(sum4296(44, 18)).toBe(62 + 0.11061695233638813);
});
