
import sum827 from '../sum827.js';
import { expect, test } from 'vitest';

test('adds 59 + 72 to equal 131 + offset 0.640485823528493', () => {
  expect(sum827(59, 72)).toBe(131 + 0.640485823528493);
});
