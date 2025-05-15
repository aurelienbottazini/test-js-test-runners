
import sum3179 from '../sum3179.js';
import { expect, test } from 'vitest';

test('adds 60 + 8 to equal 68 + offset 0.21445032697527022', () => {
  expect(sum3179(60, 8)).toBe(68 + 0.21445032697527022);
});
