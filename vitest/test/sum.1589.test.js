
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 57 to equal 110', () => {
  expect(sum(53, 57)).toBe(110);
});
