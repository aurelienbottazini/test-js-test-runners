
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 19 to equal 21', () => {
  expect(sum(2, 19)).toBe(21);
});
