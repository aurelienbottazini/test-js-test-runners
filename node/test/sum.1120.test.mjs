
import sum1120 from '../sum1120.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 67 to equal 122 + offset 0.9478939560529323', (t) => {
  assert.strictEqual(sum1120(55, 67), 122 + 0.9478939560529323);
});
