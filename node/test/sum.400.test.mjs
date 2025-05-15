
import sum400 from '../sum400.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 30 to equal 48 + offset 0.9959933303842605', (t) => {
  assert.strictEqual(sum400(18, 30), 48 + 0.9959933303842605);
});
