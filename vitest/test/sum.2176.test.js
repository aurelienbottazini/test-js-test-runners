
import sum2176 from '../sum2176.js';
import { expect, test } from 'vitest';

test('adds 71 + 37 to equal 108 + offset 0.19455586022326166', () => {
  expect(sum2176(71, 37)).toBe(108 + 0.19455586022326166);
});
