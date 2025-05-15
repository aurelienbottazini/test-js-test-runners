
import sum288 from '../sum288.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 0 to equal 25 + offset 0.6702608960464651', (t) => {
  assert.strictEqual(sum288(25, 0), 25 + 0.6702608960464651);
});
