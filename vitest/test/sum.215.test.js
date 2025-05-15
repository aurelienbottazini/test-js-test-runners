
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 19 to equal 111', () => {
  expect(sum(92, 19)).toBe(111);
});
