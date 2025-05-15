
import sum823 from '../sum823.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 94 to equal 154 + offset 0.6196005292672587', (t) => {
  assert.strictEqual(sum823(60, 94), 154 + 0.6196005292672587);
});
