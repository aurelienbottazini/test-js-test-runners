
import sum79 from '../sum79.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 94 to equal 97 + offset 0.3575821675778167', (t) => {
  assert.strictEqual(sum79(3, 94), 97 + 0.3575821675778167);
});
