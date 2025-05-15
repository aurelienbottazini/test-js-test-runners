
import sum2825 from '../sum2825.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 78 to equal 161 + offset 0.8321530567467299', (t) => {
  assert.strictEqual(sum2825(83, 78), 161 + 0.8321530567467299);
});
