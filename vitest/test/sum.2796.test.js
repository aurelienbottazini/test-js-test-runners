
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 58 to equal 73', () => {
  expect(sum(15, 58)).toBe(73);
});
