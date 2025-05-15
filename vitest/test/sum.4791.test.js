
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 41 to equal 54', () => {
  expect(sum(13, 41)).toBe(54);
});
