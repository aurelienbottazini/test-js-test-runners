
import sum3331 from '../sum3331.js';
import { expect, test } from 'vitest';

test('adds 14 + 96 to equal 110 + offset 0.9063067715410339', () => {
  expect(sum3331(14, 96)).toBe(110 + 0.9063067715410339);
});
