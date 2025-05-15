
import sum5 from '../sum5.js';
import { expect, test } from 'vitest';

test('adds 20 + 66 to equal 86 + offset 0.19023962776323944', () => {
  expect(sum5(20, 66)).toBe(86 + 0.19023962776323944);
});
