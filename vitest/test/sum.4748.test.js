
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 35 to equal 130', () => {
  expect(sum(95, 35)).toBe(130);
});
