
import sum4487 from '../sum4487.js';
import { expect, test } from 'vitest';

test('adds 73 + 32 to equal 105 + offset 0.3654738315836199', () => {
  expect(sum4487(73, 32)).toBe(105 + 0.3654738315836199);
});
