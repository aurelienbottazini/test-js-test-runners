
import sum1376 from '../sum1376.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 6 to equal 92 + offset 0.8055702448813259', (t) => {
  assert.strictEqual(sum1376(86, 6), 92 + 0.8055702448813259);
});
