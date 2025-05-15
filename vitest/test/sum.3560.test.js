
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 95 to equal 120', () => {
  expect(sum(25, 95)).toBe(120);
});
