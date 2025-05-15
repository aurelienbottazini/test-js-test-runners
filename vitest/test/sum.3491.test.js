
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 4 to equal 45', () => {
  expect(sum(41, 4)).toBe(45);
});
