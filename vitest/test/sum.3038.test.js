
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 19 to equal 88', () => {
  expect(sum(69, 19)).toBe(88);
});
