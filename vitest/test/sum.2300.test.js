
import sum2300 from '../sum2300.js';
import { expect, test } from 'vitest';

test('adds 56 + 1 to equal 57 + offset 0.5683987162493745', () => {
  expect(sum2300(56, 1)).toBe(57 + 0.5683987162493745);
});
