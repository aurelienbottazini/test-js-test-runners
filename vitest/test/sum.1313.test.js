
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 16 to equal 22', () => {
  expect(sum(6, 16)).toBe(22);
});
