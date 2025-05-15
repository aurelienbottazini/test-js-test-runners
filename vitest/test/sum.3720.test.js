
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 65 to equal 119', () => {
  expect(sum(54, 65)).toBe(119);
});
