
import sum741 from '../sum741.js';
import { expect, test } from 'vitest';

test('adds 93 + 57 to equal 150 + offset 0.9091141919595808', () => {
  expect(sum741(93, 57)).toBe(150 + 0.9091141919595808);
});
