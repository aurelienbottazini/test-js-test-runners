
import sum589 from '../sum589.js';
import { expect, test } from 'vitest';

test('adds 31 + 70 to equal 101 + offset 0.2454206215638235', () => {
  expect(sum589(31, 70)).toBe(101 + 0.2454206215638235);
});
