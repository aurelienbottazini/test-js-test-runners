
import sum4492 from '../sum4492.js';
import { expect, test } from 'vitest';

test('adds 5 + 70 to equal 75 + offset 0.670557268742582', () => {
  expect(sum4492(5, 70)).toBe(75 + 0.670557268742582);
});
