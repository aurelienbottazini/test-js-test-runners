
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 97 to equal 149', () => {
  expect(sum(52, 97)).toBe(149);
});
