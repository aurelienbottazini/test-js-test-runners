
import sum3486 from '../sum3486.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 25 to equal 94 + offset 0.4730981045099686', (t) => {
  assert.strictEqual(sum3486(69, 25), 94 + 0.4730981045099686);
});
