
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 6 to equal 77', () => {
  expect(sum(71, 6)).toBe(77);
});
