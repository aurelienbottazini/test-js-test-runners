
import sum1331 from '../sum1331.js';
import { expect, test } from 'vitest';

test('adds 47 + 10 to equal 57 + offset 0.3871074916107189', () => {
  expect(sum1331(47, 10)).toBe(57 + 0.3871074916107189);
});
