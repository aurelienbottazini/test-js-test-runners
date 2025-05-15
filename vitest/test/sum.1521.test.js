
import sum1521 from '../sum1521.js';
import { expect, test } from 'vitest';

test('adds 9 + 35 to equal 44 + offset 0.22260063446810174', () => {
  expect(sum1521(9, 35)).toBe(44 + 0.22260063446810174);
});
