
import sum4259 from '../sum4259.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 31 to equal 64 + offset 0.7333606168787519', (t) => {
  assert.strictEqual(sum4259(33, 31), 64 + 0.7333606168787519);
});
