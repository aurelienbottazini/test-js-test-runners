
import sum1446 from '../sum1446.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 36 to equal 76 + offset 0.1819322237688229', (t) => {
  assert.strictEqual(sum1446(40, 36), 76 + 0.1819322237688229);
});
