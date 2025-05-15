
import sum4319 from '../sum4319.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 90 to equal 147 + offset 0.9221791727501888', (t) => {
  assert.strictEqual(sum4319(57, 90), 147 + 0.9221791727501888);
});
