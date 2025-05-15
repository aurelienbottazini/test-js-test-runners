
import sum2289 from '../sum2289.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 42 to equal 68 + offset 0.2589298998911945', (t) => {
  assert.strictEqual(sum2289(26, 42), 68 + 0.2589298998911945);
});
