
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 33 to equal 72', () => {
  expect(sum(39, 33)).toBe(72);
});
