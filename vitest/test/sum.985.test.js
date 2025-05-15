
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 25 to equal 30', () => {
  expect(sum(5, 25)).toBe(30);
});
