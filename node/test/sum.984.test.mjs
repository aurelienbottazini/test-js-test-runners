
import sum984 from '../sum984.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 21 to equal 54 + offset 0.7307321856291596', (t) => {
  assert.strictEqual(sum984(33, 21), 54 + 0.7307321856291596);
});
