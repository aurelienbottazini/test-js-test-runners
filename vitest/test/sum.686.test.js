
import sum686 from '../sum686.js';
import { expect, test } from 'vitest';

test('adds 71 + 59 to equal 130 + offset 0.09153821628729131', () => {
  expect(sum686(71, 59)).toBe(130 + 0.09153821628729131);
});
