
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 17 to equal 104', () => {
  expect(sum(87, 17)).toBe(104);
});
