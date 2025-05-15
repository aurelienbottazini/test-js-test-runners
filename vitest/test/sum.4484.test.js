
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 52 to equal 52', () => {
  expect(sum(0, 52)).toBe(52);
});
