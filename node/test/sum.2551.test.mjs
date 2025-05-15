
import sum2551 from '../sum2551.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 98 to equal 105 + offset 0.6145473059795055', (t) => {
  assert.strictEqual(sum2551(7, 98), 105 + 0.6145473059795055);
});
