
import sum212 from '../sum212.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 19 to equal 111 + offset 0.2653407601052352', (t) => {
  assert.strictEqual(sum212(92, 19), 111 + 0.2653407601052352);
});
