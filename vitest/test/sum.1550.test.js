
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 39 to equal 78', () => {
  expect(sum(39, 39)).toBe(78);
});
