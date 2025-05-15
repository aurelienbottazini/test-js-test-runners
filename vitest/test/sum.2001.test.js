
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 60 to equal 117', () => {
  expect(sum(57, 60)).toBe(117);
});
