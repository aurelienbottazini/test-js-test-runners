
import sum3820 from '../sum3820.js';
import { expect, test } from 'vitest';

test('adds 77 + 31 to equal 108 + offset 0.40091215667189695', () => {
  expect(sum3820(77, 31)).toBe(108 + 0.40091215667189695);
});
