
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 77 to equal 130', () => {
  expect(sum(53, 77)).toBe(130);
});
