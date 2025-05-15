
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 50 to equal 145', () => {
  expect(sum(95, 50)).toBe(145);
});
