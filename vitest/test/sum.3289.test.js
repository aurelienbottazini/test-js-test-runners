
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 81 to equal 141', () => {
  expect(sum(60, 81)).toBe(141);
});
