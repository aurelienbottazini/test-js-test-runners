
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 82 to equal 130', () => {
  expect(sum(48, 82)).toBe(130);
});
