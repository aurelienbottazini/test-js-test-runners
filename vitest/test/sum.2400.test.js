
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 97 to equal 171', () => {
  expect(sum(74, 97)).toBe(171);
});
