
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 78 to equal 130', () => {
  expect(sum(52, 78)).toBe(130);
});
