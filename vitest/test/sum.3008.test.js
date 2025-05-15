
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 84 to equal 86', () => {
  expect(sum(2, 84)).toBe(86);
});
