
import sum1317 from '../sum1317.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 24 to equal 78 + offset 0.82104711279561', (t) => {
  assert.strictEqual(sum1317(54, 24), 78 + 0.82104711279561);
});
