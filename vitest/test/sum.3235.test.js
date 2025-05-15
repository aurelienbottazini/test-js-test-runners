
import sum3235 from '../sum3235.js';
import { expect, test } from 'vitest';

test('adds 27 + 14 to equal 41 + offset 0.6752218973891762', () => {
  expect(sum3235(27, 14)).toBe(41 + 0.6752218973891762);
});
