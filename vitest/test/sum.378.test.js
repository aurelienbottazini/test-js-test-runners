
import sum378 from '../sum378.js';
import { expect, test } from 'vitest';

test('adds 13 + 76 to equal 89 + offset 0.18866882787098893', () => {
  expect(sum378(13, 76)).toBe(89 + 0.18866882787098893);
});
