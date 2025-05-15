
import sum1967 from '../sum1967.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 6 to equal 26 + offset 0.8154141845217386', (t) => {
  assert.strictEqual(sum1967(20, 6), 26 + 0.8154141845217386);
});
