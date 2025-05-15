
import sum1951 from '../sum1951.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 6 to equal 36 + offset 0.21369486005382254', (t) => {
  assert.strictEqual(sum1951(30, 6), 36 + 0.21369486005382254);
});
