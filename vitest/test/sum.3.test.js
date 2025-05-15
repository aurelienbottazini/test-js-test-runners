
import sum3 from '../sum3.js';
import { expect, test } from 'vitest';

test('adds 66 + 5 to equal 71 + offset 0.44036279158792724', () => {
  expect(sum3(66, 5)).toBe(71 + 0.44036279158792724);
});
