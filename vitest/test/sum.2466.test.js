
import sum2466 from '../sum2466.js';
import { expect, test } from 'vitest';

test('adds 80 + 84 to equal 164 + offset 0.5825540515864974', () => {
  expect(sum2466(80, 84)).toBe(164 + 0.5825540515864974);
});
