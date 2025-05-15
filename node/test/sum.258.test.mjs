
import sum258 from '../sum258.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 44 to equal 97 + offset 0.8788050517524895', (t) => {
  assert.strictEqual(sum258(53, 44), 97 + 0.8788050517524895);
});
