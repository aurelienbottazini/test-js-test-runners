
import sum1056 from '../sum1056.js';
import { expect, test } from 'vitest';

test('adds 80 + 26 to equal 106 + offset 0.28510865652791595', () => {
  expect(sum1056(80, 26)).toBe(106 + 0.28510865652791595);
});
