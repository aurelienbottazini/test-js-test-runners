
import sum1127 from '../sum1127.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 78 to equal 174 + offset 0.8071964919580186', (t) => {
  assert.strictEqual(sum1127(96, 78), 174 + 0.8071964919580186);
});
