
import sum848 from '../sum848.js';
import { expect, test } from 'vitest';

test('adds 69 + 32 to equal 101 + offset 0.18355033444697577', () => {
  expect(sum848(69, 32)).toBe(101 + 0.18355033444697577);
});
