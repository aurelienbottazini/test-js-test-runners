
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 7 to equal 106', () => {
  expect(sum(99, 7)).toBe(106);
});
