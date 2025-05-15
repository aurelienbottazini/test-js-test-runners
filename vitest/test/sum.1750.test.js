
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 25 to equal 51', () => {
  expect(sum(26, 25)).toBe(51);
});
