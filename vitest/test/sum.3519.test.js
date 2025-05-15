
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 75 to equal 127', () => {
  expect(sum(52, 75)).toBe(127);
});
