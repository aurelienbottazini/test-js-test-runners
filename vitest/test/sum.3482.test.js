
import sum3482 from '../sum3482.js';
import { expect, test } from 'vitest';

test('adds 38 + 89 to equal 127 + offset 0.2580092875177947', () => {
  expect(sum3482(38, 89)).toBe(127 + 0.2580092875177947);
});
