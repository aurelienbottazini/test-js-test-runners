
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 86 to equal 164', () => {
  expect(sum(78, 86)).toBe(164);
});
