
import sum3489 from '../sum3489.js';
import { expect, test } from 'vitest';

test('adds 35 + 20 to equal 55 + offset 0.9213462483704825', () => {
  expect(sum3489(35, 20)).toBe(55 + 0.9213462483704825);
});
