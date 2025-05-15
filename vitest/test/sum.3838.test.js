
import sum3838 from '../sum3838.js';
import { expect, test } from 'vitest';

test('adds 70 + 59 to equal 129 + offset 0.19096315855883816', () => {
  expect(sum3838(70, 59)).toBe(129 + 0.19096315855883816);
});
