
import sum3922 from '../sum3922.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 48 to equal 110 + offset 0.8899141842495091', (t) => {
  assert.strictEqual(sum3922(62, 48), 110 + 0.8899141842495091);
});
