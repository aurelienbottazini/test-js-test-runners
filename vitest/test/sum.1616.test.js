
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 69 to equal 88', () => {
  expect(sum(19, 69)).toBe(88);
});
