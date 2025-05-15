
import sum3100 from '../sum3100.js';
import { expect, test } from 'vitest';

test('adds 10 + 7 to equal 17 + offset 0.7486403838693783', () => {
  expect(sum3100(10, 7)).toBe(17 + 0.7486403838693783);
});
