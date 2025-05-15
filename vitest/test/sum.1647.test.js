
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 64 to equal 67', () => {
  expect(sum(3, 64)).toBe(67);
});
