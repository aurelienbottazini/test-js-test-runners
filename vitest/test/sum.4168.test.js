
import sum4168 from '../sum4168.js';
import { expect, test } from 'vitest';

test('adds 62 + 71 to equal 133 + offset 0.9507082587640959', () => {
  expect(sum4168(62, 71)).toBe(133 + 0.9507082587640959);
});
