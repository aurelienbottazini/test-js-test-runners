
import sum1221 from '../sum1221.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 55 to equal 148 + offset 0.4924403087051158', (t) => {
  assert.strictEqual(sum1221(93, 55), 148 + 0.4924403087051158);
});
