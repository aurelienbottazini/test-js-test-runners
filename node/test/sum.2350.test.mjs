
import sum2350 from '../sum2350.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 75 to equal 111 + offset 0.8086678168070692', (t) => {
  assert.strictEqual(sum2350(36, 75), 111 + 0.8086678168070692);
});
