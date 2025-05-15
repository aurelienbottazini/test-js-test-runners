
import sum2087 from '../sum2087.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 20 to equal 37 + offset 0.19092728622644894', (t) => {
  assert.strictEqual(sum2087(17, 20), 37 + 0.19092728622644894);
});
