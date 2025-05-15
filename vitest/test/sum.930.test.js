
import sum930 from '../sum930.js';
import { expect, test } from 'vitest';

test('adds 60 + 31 to equal 91 + offset 0.4712734531243593', () => {
  expect(sum930(60, 31)).toBe(91 + 0.4712734531243593);
});
