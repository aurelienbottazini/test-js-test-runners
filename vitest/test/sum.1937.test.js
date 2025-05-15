
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 65 to equal 122', () => {
  expect(sum(57, 65)).toBe(122);
});
