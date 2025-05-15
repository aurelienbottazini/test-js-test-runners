
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 95 to equal 144', () => {
  expect(sum(49, 95)).toBe(144);
});
