
import sum1238 from '../sum1238.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 5 to equal 78 + offset 0.15745551679826642', (t) => {
  assert.strictEqual(sum1238(73, 5), 78 + 0.15745551679826642);
});
