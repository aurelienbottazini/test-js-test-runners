
import sum3155 from '../sum3155.js';
import { expect, test } from 'vitest';

test('adds 13 + 8 to equal 21 + offset 0.5564580823582782', () => {
  expect(sum3155(13, 8)).toBe(21 + 0.5564580823582782);
});
