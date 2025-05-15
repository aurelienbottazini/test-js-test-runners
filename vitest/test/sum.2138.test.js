
import sum2138 from '../sum2138.js';
import { expect, test } from 'vitest';

test('adds 44 + 93 to equal 137 + offset 0.24559709281769615', () => {
  expect(sum2138(44, 93)).toBe(137 + 0.24559709281769615);
});
