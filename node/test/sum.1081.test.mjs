
import sum1081 from '../sum1081.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 91 to equal 149 + offset 0.3973028786016063', (t) => {
  assert.strictEqual(sum1081(58, 91), 149 + 0.3973028786016063);
});
