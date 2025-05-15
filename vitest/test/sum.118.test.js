
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 0 to equal 52', () => {
  expect(sum(52, 0)).toBe(52);
});
