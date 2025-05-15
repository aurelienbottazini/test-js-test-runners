
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 57 to equal 138', () => {
  expect(sum(81, 57)).toBe(138);
});
