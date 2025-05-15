
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 95 to equal 131', () => {
  expect(sum(36, 95)).toBe(131);
});
