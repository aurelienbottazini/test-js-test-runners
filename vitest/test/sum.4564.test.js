
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 39 to equal 62', () => {
  expect(sum(23, 39)).toBe(62);
});
