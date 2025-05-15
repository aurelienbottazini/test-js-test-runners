
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 83 to equal 88', () => {
  expect(sum(5, 83)).toBe(88);
});
