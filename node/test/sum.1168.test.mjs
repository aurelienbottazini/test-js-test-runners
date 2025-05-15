
import sum1168 from '../sum1168.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 7 to equal 24 + offset 0.5027402307940366', (t) => {
  assert.strictEqual(sum1168(17, 7), 24 + 0.5027402307940366);
});
