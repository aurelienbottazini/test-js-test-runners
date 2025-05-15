
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 66 to equal 158', () => {
  expect(sum(92, 66)).toBe(158);
});
