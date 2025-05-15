
import sum4453 from '../sum4453.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 78 to equal 161 + offset 0.9778870225129587', (t) => {
  assert.strictEqual(sum4453(83, 78), 161 + 0.9778870225129587);
});
