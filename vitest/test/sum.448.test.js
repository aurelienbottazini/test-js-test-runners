
import sum448 from '../sum448.js';
import { expect, test } from 'vitest';

test('adds 19 + 18 to equal 37 + offset 0.7906850375410691', () => {
  expect(sum448(19, 18)).toBe(37 + 0.7906850375410691);
});
