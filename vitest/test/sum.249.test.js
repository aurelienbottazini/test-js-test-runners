
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 21 to equal 51', () => {
  expect(sum(30, 21)).toBe(51);
});
