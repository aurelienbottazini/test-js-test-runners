
import sum1424 from '../sum1424.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 68 to equal 108 + offset 0.2663779864733118', (t) => {
  assert.strictEqual(sum1424(40, 68), 108 + 0.2663779864733118);
});
