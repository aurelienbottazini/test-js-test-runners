
import sum4278 from '../sum4278.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 49 to equal 119 + offset 0.6954860065972145', (t) => {
  assert.strictEqual(sum4278(70, 49), 119 + 0.6954860065972145);
});
