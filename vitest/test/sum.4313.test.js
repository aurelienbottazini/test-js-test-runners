
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 78 to equal 119', () => {
  expect(sum(41, 78)).toBe(119);
});
