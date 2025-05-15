
import sum853 from '../sum853.js';
import { expect, test } from 'vitest';

test('adds 1 + 84 to equal 85 + offset 0.673461967060764', () => {
  expect(sum853(1, 84)).toBe(85 + 0.673461967060764);
});
