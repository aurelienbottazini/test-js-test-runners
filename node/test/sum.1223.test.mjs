
import sum1223 from '../sum1223.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 23 to equal 94 + offset 0.9287790510854217', (t) => {
  assert.strictEqual(sum1223(71, 23), 94 + 0.9287790510854217);
});
