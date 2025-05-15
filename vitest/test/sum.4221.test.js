
import sum4221 from '../sum4221.js';
import { expect, test } from 'vitest';

test('adds 90 + 14 to equal 104 + offset 0.18804466581149215', () => {
  expect(sum4221(90, 14)).toBe(104 + 0.18804466581149215);
});
