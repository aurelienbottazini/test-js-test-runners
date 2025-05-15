
import sum2538 from '../sum2538.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 93 to equal 167 + offset 0.9622001225086224', (t) => {
  assert.strictEqual(sum2538(74, 93), 167 + 0.9622001225086224);
});
