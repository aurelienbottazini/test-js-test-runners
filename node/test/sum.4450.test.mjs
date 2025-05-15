
import sum4450 from '../sum4450.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 22 to equal 70 + offset 0.9020776318659004', (t) => {
  assert.strictEqual(sum4450(48, 22), 70 + 0.9020776318659004);
});
