
import sum1814 from '../sum1814.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 19 to equal 93 + offset 0.9883168282380359', (t) => {
  assert.strictEqual(sum1814(74, 19), 93 + 0.9883168282380359);
});
