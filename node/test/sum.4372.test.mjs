
import sum4372 from '../sum4372.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 62 to equal 93 + offset 0.3353488019409978', (t) => {
  assert.strictEqual(sum4372(31, 62), 93 + 0.3353488019409978);
});
