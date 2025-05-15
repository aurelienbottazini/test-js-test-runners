
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 91 to equal 164', () => {
  expect(sum(73, 91)).toBe(164);
});
