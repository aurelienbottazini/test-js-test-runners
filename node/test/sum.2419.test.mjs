
import sum2419 from '../sum2419.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 48 to equal 131 + offset 0.7932186599999262', (t) => {
  assert.strictEqual(sum2419(83, 48), 131 + 0.7932186599999262);
});
