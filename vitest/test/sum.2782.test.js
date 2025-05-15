
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 84 to equal 88', () => {
  expect(sum(4, 84)).toBe(88);
});
