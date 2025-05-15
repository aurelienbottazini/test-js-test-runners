
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 11 to equal 77', () => {
  expect(sum(66, 11)).toBe(77);
});
