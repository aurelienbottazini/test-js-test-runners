
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 65 to equal 127', () => {
  expect(sum(62, 65)).toBe(127);
});
