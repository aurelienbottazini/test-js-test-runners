
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 49 to equal 119', () => {
  expect(sum(70, 49)).toBe(119);
});
