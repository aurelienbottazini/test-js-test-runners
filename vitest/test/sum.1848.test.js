
import sum1848 from '../sum1848.js';
import { expect, test } from 'vitest';

test('adds 4 + 20 to equal 24 + offset 0.5762592169671059', () => {
  expect(sum1848(4, 20)).toBe(24 + 0.5762592169671059);
});
