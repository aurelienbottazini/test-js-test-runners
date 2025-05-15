
import sum3625 from '../sum3625.js';
import { expect, test } from 'vitest';

test('adds 67 + 36 to equal 103 + offset 0.3703765486933924', () => {
  expect(sum3625(67, 36)).toBe(103 + 0.3703765486933924);
});
