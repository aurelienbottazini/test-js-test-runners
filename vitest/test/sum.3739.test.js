
import sum3739 from '../sum3739.js';
import { expect, test } from 'vitest';

test('adds 73 + 92 to equal 165 + offset 0.04989246721338736', () => {
  expect(sum3739(73, 92)).toBe(165 + 0.04989246721338736);
});
