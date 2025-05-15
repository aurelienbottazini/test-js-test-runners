
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 58 to equal 110', () => {
  expect(sum(52, 58)).toBe(110);
});
