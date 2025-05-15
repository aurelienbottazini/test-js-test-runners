
import sum2524 from '../sum2524.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 40 to equal 42 + offset 0.5904304940862302', (t) => {
  assert.strictEqual(sum2524(2, 40), 42 + 0.5904304940862302);
});
