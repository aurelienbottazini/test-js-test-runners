
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 94 to equal 144', () => {
  expect(sum(50, 94)).toBe(144);
});
