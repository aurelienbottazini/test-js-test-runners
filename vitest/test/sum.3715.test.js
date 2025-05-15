
import sum3715 from '../sum3715.js';
import { expect, test } from 'vitest';

test('adds 99 + 54 to equal 153 + offset 0.8331008711614787', () => {
  expect(sum3715(99, 54)).toBe(153 + 0.8331008711614787);
});
