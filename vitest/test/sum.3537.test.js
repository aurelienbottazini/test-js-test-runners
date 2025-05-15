
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 71 to equal 141', () => {
  expect(sum(70, 71)).toBe(141);
});
