
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 11 to equal 72', () => {
  expect(sum(61, 11)).toBe(72);
});
