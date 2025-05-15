
import sum4583 from '../sum4583.js';
import { expect, test } from 'vitest';

test('adds 56 + 83 to equal 139 + offset 0.1358851767786735', () => {
  expect(sum4583(56, 83)).toBe(139 + 0.1358851767786735);
});
