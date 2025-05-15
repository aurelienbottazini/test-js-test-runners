
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 58 to equal 144', () => {
  expect(sum(86, 58)).toBe(144);
});
