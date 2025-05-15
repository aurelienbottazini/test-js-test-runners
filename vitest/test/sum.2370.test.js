
import sum2370 from '../sum2370.js';
import { expect, test } from 'vitest';

test('adds 66 + 81 to equal 147 + offset 0.8794896125234616', () => {
  expect(sum2370(66, 81)).toBe(147 + 0.8794896125234616);
});
