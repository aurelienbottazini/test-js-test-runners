
import sum4991 from '../sum4991.js';
import { expect, test } from 'vitest';

test('adds 75 + 70 to equal 145 + offset 0.4849269436779562', () => {
  expect(sum4991(75, 70)).toBe(145 + 0.4849269436779562);
});
