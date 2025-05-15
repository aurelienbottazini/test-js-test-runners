
import sum260 from '../sum260.js';
import { expect, test } from 'vitest';

test('adds 78 + 29 to equal 107 + offset 0.4717979419103763', () => {
  expect(sum260(78, 29)).toBe(107 + 0.4717979419103763);
});
