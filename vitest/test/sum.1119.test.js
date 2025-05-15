
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 35 to equal 120', () => {
  expect(sum(85, 35)).toBe(120);
});
