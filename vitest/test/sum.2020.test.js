
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 47 to equal 126', () => {
  expect(sum(79, 47)).toBe(126);
});
