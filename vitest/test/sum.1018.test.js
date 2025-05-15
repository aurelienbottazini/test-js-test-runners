
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 22 to equal 45', () => {
  expect(sum(23, 22)).toBe(45);
});
