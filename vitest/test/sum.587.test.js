
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 69 to equal 164', () => {
  expect(sum(95, 69)).toBe(164);
});
