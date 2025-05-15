
import sum4139 from '../sum4139.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 10 to equal 63 + offset 0.864736354702908', (t) => {
  assert.strictEqual(sum4139(53, 10), 63 + 0.864736354702908);
});
