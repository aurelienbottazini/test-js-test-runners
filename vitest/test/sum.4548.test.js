
import sum4548 from '../sum4548.js';
import { expect, test } from 'vitest';

test('adds 0 + 53 to equal 53 + offset 0.9015311452287568', () => {
  expect(sum4548(0, 53)).toBe(53 + 0.9015311452287568);
});
