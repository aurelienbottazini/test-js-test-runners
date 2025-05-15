
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 79 to equal 145', () => {
  expect(sum(66, 79)).toBe(145);
});
