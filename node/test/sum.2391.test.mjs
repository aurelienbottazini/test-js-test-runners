
import sum2391 from '../sum2391.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 73 to equal 135 + offset 0.8425223770443956', (t) => {
  assert.strictEqual(sum2391(62, 73), 135 + 0.8425223770443956);
});
