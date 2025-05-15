
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 83 to equal 131', () => {
  expect(sum(48, 83)).toBe(131);
});
