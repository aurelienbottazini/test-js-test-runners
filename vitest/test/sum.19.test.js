
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 97 to equal 164', () => {
  expect(sum(67, 97)).toBe(164);
});
