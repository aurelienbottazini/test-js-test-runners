
import sum1289 from '../sum1289.js';
import { expect, test } from 'vitest';

test('adds 47 + 48 to equal 95 + offset 0.4130383046566921', () => {
  expect(sum1289(47, 48)).toBe(95 + 0.4130383046566921);
});
