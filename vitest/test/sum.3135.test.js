
import sum3135 from '../sum3135.js';
import { expect, test } from 'vitest';

test('adds 29 + 97 to equal 126 + offset 0.6056482982198949', () => {
  expect(sum3135(29, 97)).toBe(126 + 0.6056482982198949);
});
