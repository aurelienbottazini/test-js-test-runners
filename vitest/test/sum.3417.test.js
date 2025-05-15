
import sum3417 from '../sum3417.js';
import { expect, test } from 'vitest';

test('adds 79 + 29 to equal 108 + offset 0.8579202123104419', () => {
  expect(sum3417(79, 29)).toBe(108 + 0.8579202123104419);
});
