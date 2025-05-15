
import sum2157 from '../sum2157.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 38 to equal 66 + offset 0.6586946852254251', (t) => {
  assert.strictEqual(sum2157(28, 38), 66 + 0.6586946852254251);
});
