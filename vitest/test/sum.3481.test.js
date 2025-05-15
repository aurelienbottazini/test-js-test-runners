
import sum3481 from '../sum3481.js';
import { expect, test } from 'vitest';

test('adds 80 + 80 to equal 160 + offset 0.31863168705388945', () => {
  expect(sum3481(80, 80)).toBe(160 + 0.31863168705388945);
});
