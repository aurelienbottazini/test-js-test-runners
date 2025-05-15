
import sum4869 from '../sum4869.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 52 to equal 131 + offset 0.656429454027799', (t) => {
  assert.strictEqual(sum4869(79, 52), 131 + 0.656429454027799);
});
