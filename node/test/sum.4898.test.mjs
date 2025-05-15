
import sum4898 from '../sum4898.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 72 to equal 107 + offset 0.0757374690262761', (t) => {
  assert.strictEqual(sum4898(35, 72), 107 + 0.0757374690262761);
});
