
import sum361 from '../sum361.js';
import { expect, test } from 'vitest';

test('adds 35 + 67 to equal 102 + offset 0.34146137558336176', () => {
  expect(sum361(35, 67)).toBe(102 + 0.34146137558336176);
});
