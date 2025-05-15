
import sum2736 from '../sum2736.js';
import { expect, test } from 'vitest';

test('adds 60 + 73 to equal 133 + offset 0.61639353528708', () => {
  expect(sum2736(60, 73)).toBe(133 + 0.61639353528708);
});
