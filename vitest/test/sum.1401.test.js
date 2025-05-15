
import sum1401 from '../sum1401.js';
import { expect, test } from 'vitest';

test('adds 8 + 89 to equal 97 + offset 0.7011664222248514', () => {
  expect(sum1401(8, 89)).toBe(97 + 0.7011664222248514);
});
