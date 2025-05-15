
import sum3302 from '../sum3302.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 37 to equal 114 + offset 0.1796527555634968', (t) => {
  assert.strictEqual(sum3302(77, 37), 114 + 0.1796527555634968);
});
