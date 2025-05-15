
import sum1233 from '../sum1233.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 27 to equal 114 + offset 0.8924827883352046', (t) => {
  assert.strictEqual(sum1233(87, 27), 114 + 0.8924827883352046);
});
