
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 75 to equal 120', () => {
  expect(sum(45, 75)).toBe(120);
});
