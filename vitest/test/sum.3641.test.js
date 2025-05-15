
import sum3641 from '../sum3641.js';
import { expect, test } from 'vitest';

test('adds 51 + 20 to equal 71 + offset 0.3614551925963685', () => {
  expect(sum3641(51, 20)).toBe(71 + 0.3614551925963685);
});
