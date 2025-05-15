
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 53 to equal 145', () => {
  expect(sum(92, 53)).toBe(145);
});
