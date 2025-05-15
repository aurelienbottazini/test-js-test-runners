
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 84 to equal 158', () => {
  expect(sum(74, 84)).toBe(158);
});
