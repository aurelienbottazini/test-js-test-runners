
import sum3285 from '../sum3285.js';
import { expect, test } from 'vitest';

test('adds 43 + 13 to equal 56 + offset 0.2656884236284003', () => {
  expect(sum3285(43, 13)).toBe(56 + 0.2656884236284003);
});
