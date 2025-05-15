
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 58 to equal 60', () => {
  expect(sum(2, 58)).toBe(60);
});
