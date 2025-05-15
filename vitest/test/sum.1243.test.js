
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 65 to equal 65', () => {
  expect(sum(0, 65)).toBe(65);
});
