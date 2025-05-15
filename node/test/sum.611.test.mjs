
import sum611 from '../sum611.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 0 to equal 29 + offset 0.05692103661605297', (t) => {
  assert.strictEqual(sum611(29, 0), 29 + 0.05692103661605297);
});
