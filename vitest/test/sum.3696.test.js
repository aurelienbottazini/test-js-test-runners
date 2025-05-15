
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 60 to equal 86', () => {
  expect(sum(26, 60)).toBe(86);
});
