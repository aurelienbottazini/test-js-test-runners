
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 66 to equal 141', () => {
  expect(sum(75, 66)).toBe(141);
});
