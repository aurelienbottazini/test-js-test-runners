
import sum4281 from '../sum4281.js';
import { expect, test } from 'vitest';

test('adds 20 + 59 to equal 79 + offset 0.7347378878425566', () => {
  expect(sum4281(20, 59)).toBe(79 + 0.7347378878425566);
});
