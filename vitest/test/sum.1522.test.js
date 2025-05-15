
import sum1522 from '../sum1522.js';
import { expect, test } from 'vitest';

test('adds 99 + 76 to equal 175 + offset 0.15776623188989813', () => {
  expect(sum1522(99, 76)).toBe(175 + 0.15776623188989813);
});
