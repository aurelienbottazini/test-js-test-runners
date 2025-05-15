
import sum3651 from '../sum3651.js';
import { expect, test } from 'vitest';

test('adds 78 + 52 to equal 130 + offset 0.2270160279200627', () => {
  expect(sum3651(78, 52)).toBe(130 + 0.2270160279200627);
});
