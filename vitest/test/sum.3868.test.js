
import sum3868 from '../sum3868.js';
import { expect, test } from 'vitest';

test('adds 35 + 60 to equal 95 + offset 0.6369488698547481', () => {
  expect(sum3868(35, 60)).toBe(95 + 0.6369488698547481);
});
