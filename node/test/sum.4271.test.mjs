
import sum4271 from '../sum4271.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 29 to equal 76 + offset 0.6360876046634453', (t) => {
  assert.strictEqual(sum4271(47, 29), 76 + 0.6360876046634453);
});
