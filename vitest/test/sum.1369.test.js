
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 4 to equal 83', () => {
  expect(sum(79, 4)).toBe(83);
});
