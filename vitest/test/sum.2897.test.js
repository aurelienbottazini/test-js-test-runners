
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 97 to equal 176', () => {
  expect(sum(79, 97)).toBe(176);
});
