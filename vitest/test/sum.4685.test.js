
import sum4685 from '../sum4685.js';
import { expect, test } from 'vitest';

test('adds 81 + 71 to equal 152 + offset 0.96360796634368', () => {
  expect(sum4685(81, 71)).toBe(152 + 0.96360796634368);
});
