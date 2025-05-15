
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 6 to equal 28', () => {
  expect(sum(22, 6)).toBe(28);
});
