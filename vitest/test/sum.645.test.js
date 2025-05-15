
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 93 to equal 121', () => {
  expect(sum(28, 93)).toBe(121);
});
