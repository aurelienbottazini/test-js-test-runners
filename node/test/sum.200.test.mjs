
import sum200 from '../sum200.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 32 to equal 84 + offset 0.2197561162443995', (t) => {
  assert.strictEqual(sum200(52, 32), 84 + 0.2197561162443995);
});
