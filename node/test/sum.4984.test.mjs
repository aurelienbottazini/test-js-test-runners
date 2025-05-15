
import sum4984 from '../sum4984.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 9 to equal 14 + offset 0.5974140769004592', (t) => {
  assert.strictEqual(sum4984(5, 9), 14 + 0.5974140769004592);
});
