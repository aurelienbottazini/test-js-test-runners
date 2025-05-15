
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 33 to equal 120', () => {
  expect(sum(87, 33)).toBe(120);
});
