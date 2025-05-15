
import sum4700 from '../sum4700.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 37 to equal 55 + offset 0.8141041691988642', (t) => {
  assert.strictEqual(sum4700(18, 37), 55 + 0.8141041691988642);
});
