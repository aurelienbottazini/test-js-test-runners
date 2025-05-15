
import sum582 from '../sum582.js';
import { expect, test } from 'vitest';

test('adds 70 + 89 to equal 159 + offset 0.6856795518244482', () => {
  expect(sum582(70, 89)).toBe(159 + 0.6856795518244482);
});
