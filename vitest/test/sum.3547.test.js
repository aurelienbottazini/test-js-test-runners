
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 33 to equal 33', () => {
  expect(sum(0, 33)).toBe(33);
});
