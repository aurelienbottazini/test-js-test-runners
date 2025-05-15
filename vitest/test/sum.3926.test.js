
import sum3926 from '../sum3926.js';
import { expect, test } from 'vitest';

test('adds 67 + 6 to equal 73 + offset 0.8422470587277764', () => {
  expect(sum3926(67, 6)).toBe(73 + 0.8422470587277764);
});
