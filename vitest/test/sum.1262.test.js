
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 21 to equal 120', () => {
  expect(sum(99, 21)).toBe(120);
});
