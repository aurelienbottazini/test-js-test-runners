
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 85 to equal 120', () => {
  expect(sum(35, 85)).toBe(120);
});
