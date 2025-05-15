
import sum1449 from '../sum1449.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 16 to equal 75 + offset 0.30659210518711877', (t) => {
  assert.strictEqual(sum1449(59, 16), 75 + 0.30659210518711877);
});
