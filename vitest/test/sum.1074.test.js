
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 3 to equal 67', () => {
  expect(sum(64, 3)).toBe(67);
});
