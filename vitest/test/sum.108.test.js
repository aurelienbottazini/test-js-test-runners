
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 0 to equal 87', () => {
  expect(sum(87, 0)).toBe(87);
});
