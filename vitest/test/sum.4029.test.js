
import sum4029 from '../sum4029.js';
import { expect, test } from 'vitest';

test('adds 68 + 67 to equal 135 + offset 0.9374315654726655', () => {
  expect(sum4029(68, 67)).toBe(135 + 0.9374315654726655);
});
