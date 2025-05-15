
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 11 to equal 33', () => {
  expect(sum(22, 11)).toBe(33);
});
