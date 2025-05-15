
import sum2362 from '../sum2362.js';
import { expect, test } from 'vitest';

test('adds 25 + 28 to equal 53 + offset 0.3667650643216964', () => {
  expect(sum2362(25, 28)).toBe(53 + 0.3667650643216964);
});
