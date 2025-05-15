
import sum3373 from '../sum3373.js';
import { expect, test } from 'vitest';

test('adds 57 + 97 to equal 154 + offset 0.5003540429716983', () => {
  expect(sum3373(57, 97)).toBe(154 + 0.5003540429716983);
});
