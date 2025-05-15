
import sum4599 from '../sum4599.js';
import { expect, test } from 'vitest';

test('adds 92 + 64 to equal 156 + offset 0.1321528450257362', () => {
  expect(sum4599(92, 64)).toBe(156 + 0.1321528450257362);
});
