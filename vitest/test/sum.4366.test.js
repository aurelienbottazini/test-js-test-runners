
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 26 to equal 51', () => {
  expect(sum(25, 26)).toBe(51);
});
