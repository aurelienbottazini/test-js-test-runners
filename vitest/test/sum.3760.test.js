
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 77 to equal 164', () => {
  expect(sum(87, 77)).toBe(164);
});
