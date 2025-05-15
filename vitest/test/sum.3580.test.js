
import sum3580 from '../sum3580.js';
import { expect, test } from 'vitest';

test('adds 41 + 56 to equal 97 + offset 0.9107478921960181', () => {
  expect(sum3580(41, 56)).toBe(97 + 0.9107478921960181);
});
