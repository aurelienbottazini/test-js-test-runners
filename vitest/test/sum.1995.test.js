
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 15 to equal 99', () => {
  expect(sum(84, 15)).toBe(99);
});
