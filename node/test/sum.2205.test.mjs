
import sum2205 from '../sum2205.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 80 to equal 127 + offset 0.07901687932691592', (t) => {
  assert.strictEqual(sum2205(47, 80), 127 + 0.07901687932691592);
});
