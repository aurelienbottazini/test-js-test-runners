
import sum3424 from '../sum3424.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 73 to equal 141 + offset 0.15433313549554006', (t) => {
  assert.strictEqual(sum3424(68, 73), 141 + 0.15433313549554006);
});
