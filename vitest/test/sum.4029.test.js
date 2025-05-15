
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 20 to equal 25', () => {
  expect(sum(5, 20)).toBe(25);
});
