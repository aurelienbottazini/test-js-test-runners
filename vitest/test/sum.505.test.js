
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 51 to equal 141', () => {
  expect(sum(90, 51)).toBe(141);
});
