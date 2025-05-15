
import sum2002 from '../sum2002.js';
import { expect, test } from 'vitest';

test('adds 87 + 77 to equal 164 + offset 0.6679678627224901', () => {
  expect(sum2002(87, 77)).toBe(164 + 0.6679678627224901);
});
