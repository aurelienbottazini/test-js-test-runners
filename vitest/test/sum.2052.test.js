
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 88 to equal 164', () => {
  expect(sum(76, 88)).toBe(164);
});
