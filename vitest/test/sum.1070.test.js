
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 95 to equal 158', () => {
  expect(sum(63, 95)).toBe(158);
});
