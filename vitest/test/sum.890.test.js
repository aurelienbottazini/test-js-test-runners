
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 33 to equal 117', () => {
  expect(sum(84, 33)).toBe(117);
});
