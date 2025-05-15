
import sum2650 from '../sum2650.js';
import { expect, test } from 'vitest';

test('adds 79 + 58 to equal 137 + offset 0.7377706629609503', () => {
  expect(sum2650(79, 58)).toBe(137 + 0.7377706629609503);
});
