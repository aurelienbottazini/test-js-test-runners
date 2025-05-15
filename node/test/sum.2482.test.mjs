
import sum2482 from '../sum2482.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 35 to equal 42 + offset 0.017234122903692084', (t) => {
  assert.strictEqual(sum2482(7, 35), 42 + 0.017234122903692084);
});
