
import sum4466 from '../sum4466.js';
import { expect, test } from 'vitest';

test('adds 37 + 51 to equal 88 + offset 0.3387936998165577', () => {
  expect(sum4466(37, 51)).toBe(88 + 0.3387936998165577);
});
