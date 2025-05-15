
import sum455 from '../sum455.js';
import { expect, test } from 'vitest';

test('adds 37 + 58 to equal 95 + offset 0.6325299041390173', () => {
  expect(sum455(37, 58)).toBe(95 + 0.6325299041390173);
});
