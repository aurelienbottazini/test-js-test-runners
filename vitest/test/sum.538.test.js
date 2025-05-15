
import sum538 from '../sum538.js';
import { expect, test } from 'vitest';

test('adds 54 + 27 to equal 81 + offset 0.5510644022193109', () => {
  expect(sum538(54, 27)).toBe(81 + 0.5510644022193109);
});
