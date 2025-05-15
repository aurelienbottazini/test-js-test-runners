
import sum1074 from '../sum1074.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 57 to equal 153 + offset 0.6147482375105011', (t) => {
  assert.strictEqual(sum1074(96, 57), 153 + 0.6147482375105011);
});
