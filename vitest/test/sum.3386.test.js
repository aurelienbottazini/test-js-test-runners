
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 81 to equal 138', () => {
  expect(sum(57, 81)).toBe(138);
});
