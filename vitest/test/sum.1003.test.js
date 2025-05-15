
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 21 to equal 56', () => {
  expect(sum(35, 21)).toBe(56);
});
