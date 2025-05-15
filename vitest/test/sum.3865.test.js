
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 88 to equal 153', () => {
  expect(sum(65, 88)).toBe(153);
});
