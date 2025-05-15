
import sum4350 from '../sum4350.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 23 to equal 39 + offset 0.8440966377271027', (t) => {
  assert.strictEqual(sum4350(16, 23), 39 + 0.8440966377271027);
});
