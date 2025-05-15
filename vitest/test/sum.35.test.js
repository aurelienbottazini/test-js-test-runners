
import sum35 from '../sum35.js';
import { expect, test } from 'vitest';

test('adds 67 + 84 to equal 151 + offset 0.3759511833613811', () => {
  expect(sum35(67, 84)).toBe(151 + 0.3759511833613811);
});
