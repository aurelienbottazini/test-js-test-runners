
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 46 to equal 119', () => {
  expect(sum(73, 46)).toBe(119);
});
