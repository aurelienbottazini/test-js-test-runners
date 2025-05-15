
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 32 to equal 65', () => {
  expect(sum(33, 32)).toBe(65);
});
