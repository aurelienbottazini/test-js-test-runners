
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 60 to equal 133', () => {
  expect(sum(73, 60)).toBe(133);
});
