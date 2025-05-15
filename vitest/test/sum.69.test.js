
import sum69 from '../sum69.js';
import { expect, test } from 'vitest';

test('adds 76 + 94 to equal 170 + offset 0.7613614726938973', () => {
  expect(sum69(76, 94)).toBe(170 + 0.7613614726938973);
});
