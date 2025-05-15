
import sum3748 from '../sum3748.js';
import { expect, test } from 'vitest';

test('adds 94 + 25 to equal 119 + offset 0.3319800970661666', () => {
  expect(sum3748(94, 25)).toBe(119 + 0.3319800970661666);
});
