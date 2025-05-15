
import sum3435 from '../sum3435.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 58 to equal 90 + offset 0.4718993603351346', (t) => {
  assert.strictEqual(sum3435(32, 58), 90 + 0.4718993603351346);
});
