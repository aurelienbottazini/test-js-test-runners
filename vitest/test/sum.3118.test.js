
import sum3118 from '../sum3118.js';
import { expect, test } from 'vitest';

test('adds 94 + 78 to equal 172 + offset 0.6270712144838361', () => {
  expect(sum3118(94, 78)).toBe(172 + 0.6270712144838361);
});
