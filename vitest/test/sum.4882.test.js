
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 97 to equal 142', () => {
  expect(sum(45, 97)).toBe(142);
});
