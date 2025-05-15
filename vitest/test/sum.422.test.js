
import sum422 from '../sum422.js';
import { expect, test } from 'vitest';

test('adds 79 + 74 to equal 153 + offset 0.841128424946269', () => {
  expect(sum422(79, 74)).toBe(153 + 0.841128424946269);
});
