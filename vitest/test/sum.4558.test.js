
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 38 to equal 77', () => {
  expect(sum(39, 38)).toBe(77);
});
