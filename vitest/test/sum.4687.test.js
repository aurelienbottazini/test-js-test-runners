
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 79 to equal 120', () => {
  expect(sum(41, 79)).toBe(120);
});
