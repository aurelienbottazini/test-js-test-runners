
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 74 to equal 141', () => {
  expect(sum(67, 74)).toBe(141);
});
