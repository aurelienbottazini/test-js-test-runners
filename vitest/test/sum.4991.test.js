
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 55 to equal 145', () => {
  expect(sum(90, 55)).toBe(145);
});
