
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 16 to equal 45', () => {
  expect(sum(29, 16)).toBe(45);
});
