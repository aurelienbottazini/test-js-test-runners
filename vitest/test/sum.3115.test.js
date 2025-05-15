
import sum3115 from '../sum3115.js';
import { expect, test } from 'vitest';

test('adds 9 + 86 to equal 95 + offset 0.901733651822695', () => {
  expect(sum3115(9, 86)).toBe(95 + 0.901733651822695);
});
