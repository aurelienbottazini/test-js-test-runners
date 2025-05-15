
import sum2082 from '../sum2082.js';
import { expect, test } from 'vitest';

test('adds 13 + 44 to equal 57 + offset 0.6558425144596002', () => {
  expect(sum2082(13, 44)).toBe(57 + 0.6558425144596002);
});
