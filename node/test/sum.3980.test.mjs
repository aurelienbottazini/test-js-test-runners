
import sum3980 from '../sum3980.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 33 to equal 58 + offset 0.022804625534331602', (t) => {
  assert.strictEqual(sum3980(25, 33), 58 + 0.022804625534331602);
});
