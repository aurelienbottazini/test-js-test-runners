
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 79 to equal 134', () => {
  expect(sum(55, 79)).toBe(134);
});
