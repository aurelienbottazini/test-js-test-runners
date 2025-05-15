
import sum1865 from '../sum1865.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 90 to equal 105 + offset 0.6516982807889616', (t) => {
  assert.strictEqual(sum1865(15, 90), 105 + 0.6516982807889616);
});
