
import sum738 from '../sum738.js';
import { expect, test } from 'vitest';

test('adds 61 + 52 to equal 113 + offset 0.10173781088520606', () => {
  expect(sum738(61, 52)).toBe(113 + 0.10173781088520606);
});
