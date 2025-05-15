
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 12 to equal 15', () => {
  expect(sum(3, 12)).toBe(15);
});
