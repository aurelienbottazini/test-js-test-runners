
import sum1960 from '../sum1960.js';
import { expect, test } from 'vitest';

test('adds 66 + 49 to equal 115 + offset 0.8522141048897994', () => {
  expect(sum1960(66, 49)).toBe(115 + 0.8522141048897994);
});
