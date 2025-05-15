
import sum584 from '../sum584.js';
import { expect, test } from 'vitest';

test('adds 44 + 64 to equal 108 + offset 0.6594377141195608', () => {
  expect(sum584(44, 64)).toBe(108 + 0.6594377141195608);
});
