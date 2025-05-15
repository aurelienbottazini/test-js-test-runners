
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 16 to equal 77', () => {
  expect(sum(61, 16)).toBe(77);
});
