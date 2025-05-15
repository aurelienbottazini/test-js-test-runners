
import sum664 from '../sum664.js';
import { expect, test } from 'vitest';

test('adds 84 + 2 to equal 86 + offset 0.2030959049157426', () => {
  expect(sum664(84, 2)).toBe(86 + 0.2030959049157426);
});
