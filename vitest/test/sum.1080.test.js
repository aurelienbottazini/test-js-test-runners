
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 60 to equal 113', () => {
  expect(sum(53, 60)).toBe(113);
});
