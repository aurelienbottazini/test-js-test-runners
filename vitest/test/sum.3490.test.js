
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 84 to equal 141', () => {
  expect(sum(57, 84)).toBe(141);
});
