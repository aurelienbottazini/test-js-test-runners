
import sum2056 from '../sum2056.js';
import { expect, test } from 'vitest';

test('adds 35 + 28 to equal 63 + offset 0.7480542233157971', () => {
  expect(sum2056(35, 28)).toBe(63 + 0.7480542233157971);
});
