
import sum599 from '../sum599.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 51 to equal 92 + offset 0.14624617148413366', (t) => {
  assert.strictEqual(sum599(41, 51), 92 + 0.14624617148413366);
});
