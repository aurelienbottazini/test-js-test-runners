
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 28 to equal 73', () => {
  expect(sum(45, 28)).toBe(73);
});
