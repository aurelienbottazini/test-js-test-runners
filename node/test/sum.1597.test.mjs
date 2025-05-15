
import sum1597 from '../sum1597.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 75 to equal 123 + offset 0.3550066829671048', (t) => {
  assert.strictEqual(sum1597(48, 75), 123 + 0.3550066829671048);
});
