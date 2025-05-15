
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 51 to equal 68', () => {
  expect(sum(17, 51)).toBe(68);
});
