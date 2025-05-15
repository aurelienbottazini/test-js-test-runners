
import sum97 from '../sum97.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 54 to equal 114 + offset 0.9628646256494316', (t) => {
  assert.strictEqual(sum97(60, 54), 114 + 0.9628646256494316);
});
