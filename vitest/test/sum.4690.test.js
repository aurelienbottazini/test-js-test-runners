
import sum4690 from '../sum4690.js';
import { expect, test } from 'vitest';

test('adds 52 + 3 to equal 55 + offset 0.4923093246346568', () => {
  expect(sum4690(52, 3)).toBe(55 + 0.4923093246346568);
});
