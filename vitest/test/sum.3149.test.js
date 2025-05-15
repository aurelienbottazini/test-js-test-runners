
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 19 to equal 66', () => {
  expect(sum(47, 19)).toBe(66);
});
