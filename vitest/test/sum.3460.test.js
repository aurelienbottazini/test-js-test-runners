
import sum3460 from '../sum3460.js';
import { expect, test } from 'vitest';

test('adds 56 + 70 to equal 126 + offset 0.49380771611396956', () => {
  expect(sum3460(56, 70)).toBe(126 + 0.49380771611396956);
});
