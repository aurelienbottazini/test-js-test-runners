
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 58 to equal 90', () => {
  expect(sum(32, 58)).toBe(90);
});
