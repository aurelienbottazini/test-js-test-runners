
import sum4213 from '../sum4213.js';
import { expect, test } from 'vitest';

test('adds 81 + 28 to equal 109 + offset 0.5561862095589789', () => {
  expect(sum4213(81, 28)).toBe(109 + 0.5561862095589789);
});
