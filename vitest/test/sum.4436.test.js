
import sum4436 from '../sum4436.js';
import { expect, test } from 'vitest';

test('adds 62 + 14 to equal 76 + offset 0.49456345777540967', () => {
  expect(sum4436(62, 14)).toBe(76 + 0.49456345777540967);
});
