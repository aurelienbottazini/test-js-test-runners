
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 87 to equal 164', () => {
  expect(sum(77, 87)).toBe(164);
});
