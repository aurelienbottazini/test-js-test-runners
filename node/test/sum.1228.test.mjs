
import sum1228 from '../sum1228.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 63 to equal 78 + offset 0.8980076817651731', (t) => {
  assert.strictEqual(sum1228(15, 63), 78 + 0.8980076817651731);
});
