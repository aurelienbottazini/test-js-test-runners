
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 84 to equal 173', () => {
  expect(sum(89, 84)).toBe(173);
});
