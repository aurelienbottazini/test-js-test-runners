
import sum4086 from '../sum4086.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 56 to equal 103 + offset 0.8834403807637408', (t) => {
  assert.strictEqual(sum4086(47, 56), 103 + 0.8834403807637408);
});
