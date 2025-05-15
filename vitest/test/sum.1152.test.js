
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 84 to equal 144', () => {
  expect(sum(60, 84)).toBe(144);
});
