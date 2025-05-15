
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 97 to equal 119', () => {
  expect(sum(22, 97)).toBe(119);
});
