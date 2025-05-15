
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 21 to equal 119', () => {
  expect(sum(98, 21)).toBe(119);
});
