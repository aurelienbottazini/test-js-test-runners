
import sum4551 from '../sum4551.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 40 to equal 125 + offset 0.42697487034789594', (t) => {
  assert.strictEqual(sum4551(85, 40), 125 + 0.42697487034789594);
});
