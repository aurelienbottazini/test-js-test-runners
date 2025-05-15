
import sum254 from '../sum254.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 12 to equal 108 + offset 0.8378460410963882', (t) => {
  assert.strictEqual(sum254(96, 12), 108 + 0.8378460410963882);
});
