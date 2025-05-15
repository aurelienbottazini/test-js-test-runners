
import sum1225 from '../sum1225.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 62 to equal 98 + offset 0.8745997089522259', (t) => {
  assert.strictEqual(sum1225(36, 62), 98 + 0.8745997089522259);
});
